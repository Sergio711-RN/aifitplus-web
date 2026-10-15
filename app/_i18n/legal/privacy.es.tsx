import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Neutral Spanish (US and Latin America first), formal «usted», “…” quotes, RGPD article references as «art. 6.1.b del RGPD»

const SECTIONS: ILegalSection[] = [
  {
    id: "operator",
    title: "Quién trata sus datos",
    body: (
      <>
        <p>
          El responsable del tratamiento es <Fill value={LEGAL.operatorName.es} label="nombre del operador" />, domicilio:{" "}
          <Fill value={LEGAL.operatorAddress.es} label="dirección postal" />. En esta política, “nosotros” se refiere al responsable del
          tratamiento.
        </p>
        <p>
          Esta política se aplica a la aplicación móvil AIFit+ para iOS y Android y al sitio web aifitplus.com. Si tiene preguntas sobre sus
          datos, escriba a <ContactEmail label="correo electrónico de contacto" />.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Qué datos recopilamos",
    body: (
      <>
        <h3>Cuenta</h3>
        <ul>
          <li>
            Dirección de correo electrónico: para iniciar sesión. Puede iniciar sesión con un código de un solo uso enviado a su correo
            electrónico, con su Apple ID (en iPhone) o con su cuenta de Google.
          </li>
          <li>
            Si inicia sesión con Apple o Google, recibimos de ellos su dirección de correo electrónico y, si usted lo permite, su nombre. Apple
            le permite ocultar su correo electrónico: en ese caso, recibimos solo una dirección de reenvío. No tomamos su foto de perfil de
            Google. Después de que inicia sesión con Apple, conservamos un token emitido por Apple para poder revocar el acceso de la aplicación
            a su Apple ID cuando elimine su cuenta.
          </li>
          <li>Nombre, idioma de la interfaz y foto de perfil: si usted los proporciona.</li>
        </ul>
        <h3>Datos de salud y del cuerpo</h3>
        <p>
          Sus respuestas en el primer inicio: sexo, edad, estatura, peso e historial de pesajes, peso meta y ritmo, nivel de
          actividad, tipo de alimentación y lo que desea mejorar. Se trata de una categoría especial
          de datos: llegan a nuestro servidor solo después de que usted da un consentimiento aparte al registrarse. Hasta ese momento, sus
          respuestas se guardan únicamente en su dispositivo.
        </p>
        <h3>Diario de comidas</h3>
        <ul>
          <li>Fotos de comidas que usted toma o elige de su galería, incluida una vista lateral opcional.</li>
          <li>
            Descripciones de comidas que usted escribe o dicta. La voz se convierte en texto mientras habla; guardamos solo el texto, no la
            grabación de su voz.
          </li>
          <li>
            Códigos de barras de productos que usted escanea o escribe. Si un producto no está en la base de datos, puede fotografiar su
            etiqueta nutricional: la IA lee los valores y guardamos el producto en su cuenta (nombre, marca, valor nutricional por 100 g, peso
            del envase y de la porción) para que el siguiente escaneo lo encuentre. La foto de la etiqueta no se guarda.
          </li>
          <li>
            Resultados del reconocimiento: plato, ingredientes, peso de la porción, calorías, proteínas, grasas, carbohidratos, sus
            correcciones y sus respuestas a las preguntas aclaratorias.
          </li>
          <li>Comidas que usted agrega a “Guardados”.</li>
          <li>Hora y tipo de comida.</li>
        </ul>
        <h3>Suscripción</h3>
        <p>
          Estado de la suscripción, plan, fechas de la prueba y de la renovación. Los pagos los cobran el App Store y Google Play: nosotros
          no recibimos el número de su tarjeta ni sus datos de pago.
        </p>
        <h3>Mensajes al soporte</h3>
        <p>
          Si nos escribe desde la aplicación, recibimos el tema, la dirección de correo electrónico para nuestra respuesta, el texto de su
          mensaje, la versión de la aplicación, el sistema operativo de su teléfono y el idioma de la interfaz. El mensaje se guarda en su
          cuenta y se envía a nuestro buzón.
        </p>
        <h3>Ajustes y datos técnicos</h3>
        <ul>
          <li>Ajustes de los recordatorios y unidades de medida.</li>
          <li>Un identificador interno de usuario y una clave de sesión cifrada en su dispositivo.</li>
          <li>
            Un registro de cada solicitud a la IA: su tipo, hora, resultado y tamaño. Lo necesitamos para el límite diario y para saber cuánto
            cuesta el servicio.
          </li>
          <li>
            Registros técnicos del servidor: dirección IP, hora y tipo de solicitud. Los necesitamos para operar y proteger el servicio.
          </li>
          <li>
            Informes de fallos y errores: identificador interno de usuario, modelo del dispositivo, sistema operativo, versión de la aplicación,
            la pantalla donde ocurrió el error y los últimos pasos técnicos de la aplicación antes de él. Los informes no incluyen su correo
            electrónico, su dirección IP ni capturas de pantalla.
          </li>
          <li>
            En su teléfono, la aplicación guarda una copia del diario y de las estadísticas cargados más recientemente, para que se puedan ver
            sin conexión, y de los productos encontrados por código de barras. Todo esto se borra al cerrar sesión.
          </li>
        </ul>
        <h3>Sitio web</h3>
        <p>
          Como cualquier servidor web, el proveedor de alojamiento del sitio ve su dirección IP y el tipo de navegador en sus registros
          técnicos. El sitio recuerda el idioma que usted elige en la cookie NEXT_LOCALE durante un año, y su respuesta sobre las
          estadísticas en el almacenamiento de su navegador. Ambos son necesarios para que el sitio funcione y no requieren consentimiento.
        </p>
        <p>
          Si hace clic en “Aceptar” en el aviso de cookies, el sitio carga Google Analytics. Este servicio instala las cookies _ga y _ga_*
          con un identificador aleatorio del navegador durante un máximo de 2 años y recopila qué páginas abre, desde dónde llegó, el tipo
          de dispositivo y de navegador, el idioma y la ubicación aproximada (país, ciudad). Google Analytics no almacena direcciones IP.
          Los datos detallados se conservan en Google Analytics durante 2 meses; después solo quedan estadísticas agregadas. Nosotros vemos
          informes agregados y no los vinculamos con su cuenta de la aplicación. Las funciones publicitarias de Google Analytics están
          desactivadas.
        </p>
        <p>
          Sin su consentimiento, Google Analytics no se carga. Puede cambiar de opinión en cualquier momento en “Configuración de cookies”,
          al final de la página.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "Para qué tratamos los datos y con qué base legal",
    body: (
      <ul>
        <li>
          <strong>Funcionamiento de la aplicación</strong>: inicio de sesión, cálculo de sus metas diarias, reconocimiento de comidas y de
          etiquetas nutricionales, búsqueda de productos por código de barras, diario, sincronización entre dispositivos, respuesta a sus
          mensajes. Base legal: nuestro contrato con usted (<Link href="/es/terms">Términos de uso</Link>),
          art. 6.1.b del RGPD.
        </li>
        <li>
          <strong>Los datos de salud</strong> se tratan únicamente para calcular su plan y llevar su diario. Base legal: su consentimiento
          explícito y aparte, que usted da al marcar una casilla al registrarse, art. 9.2.a del RGPD.
        </li>
        <li>
          <strong>Suscripción</strong>: verificación del acceso a las funciones de pago. Base legal: contrato, art. 6.1.b del RGPD.
        </li>
        <li>
          <strong>Seguridad y estabilidad</strong>: protección contra ataques y abusos, por ejemplo, un límite diario de solicitudes a la IA;
          informes de errores para encontrar y corregir fallos. Base legal: nuestro interés legítimo en que el servicio funcione, art. 6.1.f
          del RGPD.
        </li>
        <li>
          <strong>Estadísticas del sitio web</strong>: cuántas personas visitan el sitio y de dónde llegan, para poder mejorarlo. Base
          legal: su consentimiento en el aviso de cookies, art. 6.1.a del RGPD; puede retirarlo en “Configuración de cookies”, al final de
          la página.
        </li>
        <li>
          <strong>Los recordatorios</strong> se programan en su teléfono y se muestran solo si usted los activa y permite las notificaciones
          en los ajustes de su sistema. Los ajustes de sus recordatorios se guardan en su cuenta para que se trasladen a otro dispositivo.
        </li>
      </ul>
    ),
  },
  {
    id: "no-sale",
    title: "Lo que no hacemos",
    body: (
      <ul>
        <li>No vendemos ni alquilamos sus datos.</li>
        <li>No mostramos anuncios ni compartimos datos con redes publicitarias.</li>
        <li>No publicamos las fotos de sus comidas ni se las mostramos a otros usuarios.</li>
        <li>No tomamos, a partir de sus datos, decisiones que tengan efectos jurídicos para usted.</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "Cómo funciona el reconocimiento",
    body: (
      <>
        <p>
          La foto se comprime en su dispositivo y se sube a un almacenamiento privado al que solo su cuenta tiene acceso. El servidor la
          envía a un modelo de inteligencia artificial, recibe el desglose de la comida y guarda el resultado en su diario. Las descripciones
          de comidas que usted escribe o dicta y las fotos de etiquetas nutricionales llegan al modelo de la misma manera.
        </p>
        <p>
          El modelo es Gemini, de Google. Google trata la solicitud por encargo nuestro y únicamente para responderla. Usamos la API de pago
          de Gemini: según sus condiciones, el contenido de las solicitudes no se usa para entrenar los modelos de Google; Google puede
          conservarlo durante un tiempo limitado únicamente para detectar abusos.
        </p>
        <p>
          La foto original y la vista lateral se eliminan del almacenamiento 30 días después de tomarse; el diario conserva una vista previa
          pequeña mientras la comida esté en él. Una comida que no se pudo analizar se elimina junto con sus fotos en un plazo de un día.
        </p>
        <p>
          Las estimaciones de calorías y nutrientes son aproximadas. Revise el resultado y corríjalo: sus correcciones se guardan en el
          diario.
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "Con quién compartimos datos",
    body: (
      <>
        <p>
          Solo con los proveedores sin los cuales el servicio no puede funcionar y, si usted lo acepta, con un servicio de estadísticas del
          sitio web. Cada uno recibe el mínimo de datos necesario para su tarea:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong>: base de datos, inicio de sesión y almacenamiento de archivos. Todos los datos de la cuenta, el diario,
            las fotos y los mensajes al soporte. Servidores en Irlanda (UE).
          </li>
          <li>
            <strong>Google</strong>: reconocimiento de comidas y de etiquetas nutricionales (API de Gemini). Fotos de comidas y de etiquetas,
            descripciones de comidas, respuestas a las preguntas aclaratorias y correcciones de ingredientes. Google LLC, Estados Unidos.
          </li>
          <li>
            <strong>Google</strong>: reconocimiento de voz en teléfonos Android que no pueden reconocer la voz en el propio dispositivo.
            Mientras usted dicta, la grabación de su voz la procesa el servicio de reconocimiento de voz de Google: en el teléfono, si está
            descargado el paquete de idioma de Google; de lo contrario, en los servidores de Google. Google devuelve el texto; la grabación
            no se nos transmite. En iPhone y en teléfonos Android con reconocimiento en el dispositivo, su voz no sale del teléfono. Google
            LLC, Estados Unidos.
          </li>
          <li>
            <strong>Open Food Facts</strong>: la base de datos de productos. Cuando usted escanea un código de barras, la aplicación busca el
            producto en Open Food Facts directamente desde su teléfono: Open Food Facts recibe el número del código de barras y, como cualquier
            sitio web, su dirección IP. No le enviamos los datos de su cuenta. Open Food Facts trata las solicitudes conforme a su propia
            política. Asociación Open Food Facts, Francia.
          </li>
          <li>
            <strong>Resend</strong>: envío de los correos con el código de inicio de sesión y entrega de sus mensajes al soporte a nuestro
            buzón. Dirección de correo electrónico, idioma del correo y texto del mensaje. Estados Unidos.
          </li>
          <li>
            <strong>RevenueCat</strong>: gestión de suscripciones. Identificador interno de usuario e historial de compras de la tienda.
            Estados Unidos.
          </li>
          <li>
            <strong>Sentry</strong>: informes de fallos y errores (los datos se indican en “Ajustes y datos técnicos”). Functional Software,
            Inc., Estados Unidos; los datos se almacenan en la UE (Alemania).
          </li>
          <li>
            <strong>Google</strong>: estadísticas del sitio web (Google Analytics), solo con su consentimiento. Identificador del navegador
            tomado de la cookie, páginas vistas, tipo de dispositivo, ubicación aproximada. Google Ireland Limited; los datos pueden
            tratarse en Estados Unidos.
          </li>
          <li>
            <strong>Apple y Google</strong>: pago de suscripciones y, si usted lo elige, inicio de sesión con su Apple ID o su cuenta de
            Google. Tratan los datos conforme a sus propias políticas, como responsables independientes.
          </li>
        </ul>
        <p>
          También comunicamos datos a las autoridades públicas cuando la ley lo exige, y únicamente en la medida de lo solicitado.
        </p>
      </>
    ),
  },
  {
    id: "transfer",
    title: "Dónde se almacenan los datos",
    body: (
      <>
        <p>
          Nuestro almacenamiento principal está en la Unión Europea (Irlanda), los informes de errores se almacenan en Alemania y la base de
          datos de productos Open Food Facts está en Francia. El reconocimiento de fotos, descripciones y etiquetas, el reconocimiento de voz
          en algunos teléfonos Android, los correos, la gestión de suscripciones y las estadísticas del sitio web están a cargo de
          proveedores ubicados en Estados Unidos, por lo que algunos datos se transfieren fuera del Espacio Económico Europeo.
        </p>
        <p>
          Estas transferencias se basan en la decisión de adecuación de la Comisión Europea (Marco de Privacidad de Datos UE-EE. UU.) para
          los proveedores certificados conforme a él, o en las cláusulas contractuales tipo de la Comisión Europea. Los datos se transfieren
          únicamente para los fines descritos en esta política.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Cuánto tiempo conservamos los datos",
    body: (
      <ul>
        <li>Datos de la cuenta, diario, comidas guardadas y productos leídos de etiquetas: mientras usted tenga una cuenta.</li>
        <li>
          Fotos originales de comidas y vistas laterales: 30 días; la vista previa en el diario: hasta que usted elimine la comida o su
          cuenta. Las fotos de etiquetas no se guardan.
        </li>
        <li>
          Mensajes al soporte: hasta que usted elimine su cuenta; el correo en nuestro buzón: durante el tiempo que lo necesitemos para
          responderle.
        </li>
        <li>Informes de errores: no más de 90 días.</li>
        <li>
          Cuando elimina su cuenta, su perfil, su plan, su historial de peso, su diario, sus fotos y sus mensajes al soporte se eliminan de
          inmediato, al igual que su registro de cliente en RevenueCat; si inició sesión con Apple, revocamos el acceso de la aplicación a su
          Apple ID. Los datos desaparecen de las copias de seguridad del proveedor de alojamiento en un plazo
          de {LEGAL.backupRetentionDays} días.
        </li>
        <li>Las respuestas ingresadas antes del registro y las copias de datos en su teléfono se borran al cerrar sesión.</li>
        <li>
          El App Store y Google Play conservan los registros de compras durante el tiempo que exijan las leyes sobre contabilidad de pagos.
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Sus derechos",
    body: (
      <>
        <ul>
          <li>
            <strong>Saber</strong> qué datos tenemos sobre usted y obtener una copia. En la aplicación: toque su foto de perfil → “Datos
            personales” → “Descargar una copia de mis datos”.
          </li>
          <li>
            <strong>Llevarse</strong> sus datos en un formato legible por máquina para trasladarlos a otro servicio.
          </li>
          <li>
            <strong>Corregir</strong> sus datos: la mayoría de los campos se pueden editar directamente en la aplicación.
          </li>
          <li>
            <strong>Eliminar</strong> su cuenta y todos sus datos: en la aplicación, toque su foto de perfil → “Eliminar cuenta”. Esto no
            cancela su suscripción; cancélela en los ajustes del App Store o de Google Play.
          </li>
          <li>
            <strong>Retirar su consentimiento</strong> al tratamiento de sus datos de salud. Sin esos datos la aplicación no puede calcular
            su plan, por lo que retirar el consentimiento implica eliminar su cuenta: “Datos personales” → “Retirar el consentimiento”.
          </li>
          <li>
            <strong>Oponerse</strong> al tratamiento o pedir que se limite.
          </li>
          <li>
            <strong>Presentar una queja</strong> ante la autoridad de protección de datos del país donde vive o trabaja.
          </li>
        </ul>
        <p>
          Envíe sus solicitudes a <ContactEmail label="correo electrónico de contacto" /> desde la dirección de correo vinculada a su
          cuenta. Responderemos en el plazo de un mes, normalmente antes.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Cómo protegemos los datos",
    body: (
      <ul>
        <li>Todas las conexiones están cifradas (HTTPS/TLS).</li>
        <li>Reglas de acceso a la base de datos: cada cuenta ve solo sus propios registros y sus propios archivos.</li>
        <li>Las fotos se guardan en un almacenamiento privado y los enlaces a ellas no son públicos.</li>
        <li>Las claves secretas del servicio se guardan solo en el servidor, no en la aplicación.</li>
        <li>
          La clave de sesión en su teléfono está cifrada; la clave de cifrado se guarda en el almacenamiento seguro del sistema (Keychain o
          Keystore).
        </li>
        <li>El inicio de sesión se hace con un código de un solo uso, Apple ID o una cuenta de Google: no hay contraseñas que robar.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Edad",
    body: (
      <p>
        Puede usar AIFit+ a partir de los {LEGAL.minAge} años. No recopilamos a sabiendas datos de menores. Si se entera de que un menor ha
        creado una cuenta, escríbanos y la eliminaremos.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Cambios en esta política",
    body: (
      <p>
        Si cambiamos qué datos recopilamos o con quién los compartimos, se lo avisaremos con antelación en la aplicación. La fecha de
        entrada en vigor aparece al inicio de este documento.
      </p>
    ),
  },
];

export const privacyEs: ILegalDocument = {
  title: "Política de privacidad",
  lead: (
    <p>
      AIFit+ cuenta las calorías y los nutrientes de lo que usted come. Para hacerlo, necesita datos sobre su cuerpo y su alimentación. Aquí
      tiene un resumen breve y directo: qué recopilamos, para qué, dónde lo guardamos y cómo eliminarlo todo.
    </p>
  ),
  sections: SECTIONS,
};
