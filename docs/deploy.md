# Деплой aifitplus.com на Хостинг Украина

Как выложить сайт на виртуальный хостинг [ukraine.com.ua](https://www.ukraine.com.ua/) (тариф «Кращий» / «Лучший»). Составлено 1 октября 2026 г.; пункты панели названы, как в её русском интерфейсе, — если что-то переименуют, сверяйтесь с [вики хостинга](https://www.ukraine.com.ua/ru/wiki/).

## Как это устроено

На виртуальном хостинге нет Node.js: сайты на Node.js запускаются только на бизнес-хостинге ([вики](https://www.ukraine.com.ua/ru/wiki/hosting/nodejs/overview/)). Поэтому сайт собирается в обычные файлы (`output: "export"` в `next.config.ts`), а Apache хостинга их просто отдаёт.

- `npm run build` пишет готовый сайт в `out/`: страница — `en.html`, `en/privacy.html`, рядом служебные `.txt` для переходов без перезагрузки, картинки соцсетей `en/og.png`, `sitemap.xml`, `robots.txt`.
- Всё, что раньше делал сервер Next, — в `public/.htaccess` (при сборке копируется в `out/`):
  - `/` и адреса без языка → язык из cookie `NEXT_LOCALE`, иначе из `Accept-Language`, иначе `/en`;
  - адреса без `.html`: `/en/privacy` → файл `en/privacy.html`; `/en/privacy/` и `/en/privacy.html` → 301 на `/en/privacy`;
  - 404 на языке адреса (`/uk/…` → `uk/404.html`), для остального — английская `404.html`;
  - `www.aifitplus.com` → `aifitplus.com`;
  - кэш: страницы — с проверкой при каждом заходе; сжатие gzip.
- **Файлы с расширением из списка статики панели** (`.js`, `.css`, `.png`, `.html` и т. п.) отдаёт nginx хостинга напрямую, `.htaccess` на них не действует (проверено после первой выкладки 1 октября 2026 г.: `Cache-Control` из `.htaccess` у `/_next/static/` нет, `/ru.html` отдаётся с кодом 200 без редиректа — не страшно, у страницы canonical на `/ru`). Их кэш задаётся в панели — шаг 5.
- Фото блюд берутся прямо с Unsplash в нужном размере (`app/_lib/image-loader.ts`): своего сервера картинок в статике нет.

**Чего на сайте быть не может**, пока он статический: `proxy.ts`, `cookies()` / `headers()`, Server Actions, обработчики маршрутов, читающие запрос, оптимизация картинок Next. Сборка с ними упадёт. Если понадобятся (формы, личный кабинет) — либо внешний сервис, либо переход на бизнес-хостинг с Node.js.

## Первая настройка (один раз)

### 1. Сайт в панели

1. **«Мои сайты»** → добавить сайт `aifitplus.com`. Домен зарегистрирован в этом же аккаунте, DNS хостинг пропишет сам; если домен «не направлен» — в **«Домены»** выбрать для него DNS-серверы хостинга.
2. Убедиться, что у сайта есть поддомен `www` (обычно создаётся сам).
3. Посмотреть **корневую папку сайта** — обычно `aifitplus.com/www` от домашней папки аккаунта. Её содержимое при деплое полностью заменяется сайтом (кроме `.well-known`).
4. Веб-сервер сайта — Apache (по умолчанию). Если в настройках сайта выбран другой — вернуть Apache, иначе `.htaccess` не сработает.

### 2. SSL

1. **«SSL»** → вкладка **Let's Encrypt** → выпустить сертификат для `aifitplus.com` и `www.aifitplus.com`.
2. Включить **редирект на HTTPS** в настройках SSL сайта. Делать это в панели, а не в `.htaccess`: перед Apache стоит прокси хостинга, и самодельное правило может зациклиться.

### 3. SSH-ключ

Деплой заливает файлы по SSH, без пароля — по ключу.

1. Если ключа на Mac ещё нет (`ls ~/.ssh/*.pub` пусто): `ssh-keygen -t ed25519 -C aifitplus-deploy` (если панель не примет ed25519 — `ssh-keygen -t rsa -b 4096`).
2. Панель → **«Персональные данные»** → **«SSH-ключи»** → **«Добавить ключ»**, вставить содержимое `~/.ssh/id_ed25519.pub`.
3. **«SSH-доступ»** хостинга → привязать ключ к аккаунту хостинга. Там же — логин и хост вида `логин.ftp.tools` ([вики](https://www.ukraine.com.ua/ru/wiki/hosting/cli/ssh/connect/)).
4. Проверить: `ssh логин@логин.ftp.tools 'ls; which rsync'` — должна открыться без пароля, показать папку `aifitplus.com` и путь к `rsync`.

### 4. Файл `.env.deploy`

В корне проекта, в git не попадает (`.env*` в `.gitignore`):

```sh
DEPLOY_SSH=логин@логин.ftp.tools
DEPLOY_DIR=aifitplus.com/www
```

`DEPLOY_DIR` — корневая папка сайта из шага 1, от домашней папки аккаунта.

### 5. Кэш статики (необязательно)

**«Мои сайты»** → настройки сайта → поле **«Кеширование»** ([вики](https://www.ukraine.com.ua/ru/wiki/hosting/sites/my-sites/site-settings/static-files-expire/)). По умолчанию выключено: nginx отдаёт статику без `Cache-Control`, только с `ETag` и `Last-Modified`, браузер перепроверяет файлы сам. Сайт так работает, включение лишь сокращает повторные запросы.

Если включать — срок один на все расширения из списка статики, поэтому:

1. Сначала убрать из списка расширений `txt`, `html`, `xml`, `json`, `webmanifest`, если они там есть. `.txt` — данные страниц для переходов без перезагрузки, их имена не меняются между сборками: с долгим кэшем после деплоя посетитель получит старые тексты. Без расширения в списке файл отдаёт Apache, и работает `no-cache` из `.htaccess`.
2. Срок — **1 месяц**. Файлы `/_next/static/` с хешем в имени можно кэшировать хоть на год, но тот же срок получат картинки без хеша (`og.png`, иконки) — месяц устаревания для них приемлем.
3. Изменения применяются 15–30 минут. Проверка: `curl -sI https://aifitplus.com/favicon.ico | grep -i cache-control` → `max-age=2592000`, а у `https://aifitplus.com/en/privacy.txt` — `no-cache`.

## Деплой

```sh
npm run deploy
```

Скрипт `scripts/deploy.sh`: отказывается работать при незакоммиченных изменениях (на сайт идёт только то, что в git), собирает `out/` и заливает его `rsync` с удалением старых файлов. Перезапускать ничего не нужно — Apache сразу отдаёт новые файлы.

Если `rsync` на хостинге нет — залить содержимое `out/` (вместе со скрытым `.htaccess`) через FTP или файловый менеджер панели в корневую папку сайта, предварительно очистив её.

## Проверка после деплоя

```sh
curl -sI https://aifitplus.com/ -H 'Accept-Language: uk' | grep -i location      # → /uk
curl -sI https://aifitplus.com/ -b 'NEXT_LOCALE=ru' | grep -i location           # → /ru
curl -sI https://aifitplus.com/ -H 'Accept-Language: fr-CA,fr;q=0.9' | grep -i location  # → /fr (так же de, es, it)
curl -s https://aifitplus.com/de/nothing -o /dev/null -w '%{http_code}\n'        # → 404 (немецкая страница)
curl -sI https://aifitplus.com/en/privacy | head -1                              # → 200
curl -sI https://aifitplus.com/en/privacy/ | grep -i location                    # → /en/privacy
curl -s https://aifitplus.com/uk/nothing -o /dev/null -w '%{http_code}\n'        # → 404 (украинская страница)
curl -sI http://aifitplus.com/en | grep -i location                              # → https://aifitplus.com/en
curl -sI https://www.aifitplus.com/en | grep -i location                         # → https://aifitplus.com/en
curl -sI https://aifitplus.com/en/og.png | grep -i content-type                  # → image/png
```

Плюс открыть сайт в браузере: фото грузятся, переключатель языков и ссылки в футере работают без перезагрузки.

**Если сайт отдаёт 500** — хостинг не разрешил какую-то директиву `.htaccess`. Причина — в логе ошибок сайта (панель → **«Логи»**). Под подозрением `Options` и `DirectorySlash`: без `DirectorySlash Off` адреса `/en` и `/en/privacy` уйдут редиректом на `/en/`, потому что рядом со страницей лежит одноимённая папка.

## Правки `.htaccess`

Проверять до деплоя на Apache, встроенном в macOS (2.4, как на хостинге):

```sh
npm run build && npm run preview:static
```

Сайт откроется на http://127.0.0.1:8088 со всеми правилами `.htaccess`; проверять `curl` из раздела выше, заменив адрес. `next dev` `.htaccess` не читает: там `/` просто ведёт на `/en`.
