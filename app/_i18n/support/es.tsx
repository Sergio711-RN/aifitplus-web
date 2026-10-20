import Link from "next/link";
import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "../legal/contact-email";
import type { ILegalDocument } from "../legal/types";
import { EmailButton } from "./email-button";

// «Tú», as in the app's Spanish texts («Escríbenos»)
export const supportEs: ILegalDocument = {
  title: "Soporte",
  lead: (
    <>
      <p>
        ¿Tienes una pregunta sobre AIFit+, un problema con la app o la suscripción, o una idea? Escríbenos: te responderemos por correo en un
        par de días hábiles.
      </p>
      <EmailButton label="correo electrónico de contacto" />
    </>
  ),
  sections: [
    {
      id: "contact",
      title: "Cómo contactarnos",
      body: (
        <ul>
          <li>
            <strong>Por correo:</strong> <ContactEmail label="correo electrónico de contacto" />. Si tu pregunta es sobre tu cuenta, escríbenos
            desde el correo vinculado a ella: así la encontraremos más rápido.
          </li>
          <li>
            <strong>En la app:</strong> toca tu foto de perfil → “Escríbenos”. La app añade a tu mensaje su versión, el sistema operativo de tu
            teléfono y el idioma de la interfaz: eso nos ayuda a resolverlo más rápido.
          </li>
          <li>
            <strong>Si no puedes entrar:</strong> toca “¿No puedes entrar?” en la pantalla de inicio de sesión o simplemente escríbenos por
            correo.
          </li>
        </ul>
      ),
    },
    {
      id: "sign-in",
      title: "Inicio de sesión",
      body: (
        <ul>
          <li>
            Te enviamos un código de 6 dígitos por correo. Puede tardar hasta un minuto: revisa también la carpeta de spam. Si el código venció,
            pide uno nuevo.
          </li>
          <li>
            En un teléfono nuevo, inicia sesión igual que la primera vez: con el mismo correo, Apple ID o cuenta de Google. Tu plan y tu diario
            se cargan solos.
          </li>
          <li>
            Si iniciaste sesión con Apple y ocultaste tu correo, solo tenemos la dirección de reenvío de Apple; por eso, vuelve a entrar con
            Apple.
          </li>
        </ul>
      ),
    },
    {
      id: "subscription",
      title: "Suscripción y pago",
      body: (
        <ul>
          <li>La suscripción se contrata y se paga en el App Store o Google Play. No vemos los datos de tu tarjeta.</li>
          <li>
            Para cancelar la suscripción, usa los ajustes de la tienda: consulta las instrucciones de{" "}
            <a href="https://support.apple.com/118428">Apple</a> y{" "}
            <a href="https://support.google.com/googleplay/answer/7018481?hl=es-419">Google</a>. Cancela al menos 24 horas antes de que
            termine el período.
          </li>
          <li>
            <strong>Eliminar tu cuenta no cancela la suscripción</strong>: cancélala aparte en la tienda.
          </li>
          <li>
            ¿Teléfono nuevo o reinstalaste la app? Inicia sesión en la misma cuenta. Si la suscripción no aparece, toca “Restaurar compras” en la
            pantalla de suscripción, con el mismo Apple ID o cuenta de Google con que pagaste.
          </li>
          <li>Si la app indica que el pago falló, actualiza tu método de pago en el App Store o Google Play.</li>
          <li>
            Los reembolsos los gestionan las tiendas según sus propias reglas: <a href="https://support.apple.com/118223">Apple</a>,{" "}
            <a href="https://support.google.com/googleplay/answer/2479637?hl=es-419">Google Play</a>.
          </li>
        </ul>
      ),
    },
    {
      id: "data",
      title: "Tus datos y tu cuenta",
      body: (
        <>
          <ul>
            <li>
              <strong>Obtener una copia de tus datos:</strong> toca tu foto de perfil → “Datos personales” → “Descargar una copia de mis
              datos”.
            </li>
            <li>
              <strong>Eliminar tu cuenta:</strong> toca tu foto de perfil → “Eliminar cuenta”. Tu perfil, plan, diario y fotos se eliminan para
              siempre. Esto no cancela la suscripción.
            </li>
            <li>
              <strong>Retirar el consentimiento</strong> al tratamiento de tus datos de salud: “Datos personales” → “Retirar el
              consentimiento”. Sin esos datos la app no puede calcular tu plan, así que tu cuenta también se elimina.
            </li>
            <li>
              Si no puedes entrar en la app, escribe a <ContactEmail label="correo electrónico de contacto" /> desde el correo vinculado a tu
              cuenta y te ayudaremos.
            </li>
          </ul>
          <p>
            Qué recopilamos y cuánto tiempo lo guardamos se explica en la <Link href="/es/privacy">Política de privacidad</Link>.
          </p>
        </>
      ),
    },
    {
      id: "accuracy",
      title: "Precisión del reconocimiento",
      body: (
        <ul>
          <li>
            La IA da una <strong>estimación</strong>: el plato, el peso de la porción y las calorías pueden diferir de los reales. Revisa el
            resultado y corrígelo a mano si hace falta.
          </li>
          <li>
            Para un mejor resultado, toma la foto con buena luz y con toda la comida en el encuadre. Para productos envasados, escanea el código
            de barras o fotografía la tabla nutricional.
          </li>
          <li>
            AIFit+ no es un servicio médico y no revisa los alimentos en busca de alérgenos: consulta los{" "}
            <Link href="/es/terms">Términos de uso</Link>.
          </li>
          <li>Si la app se equivoca una y otra vez con un plato, cuéntanoslo en “Escríbenos”: nos ayuda a mejorar el reconocimiento.</li>
        </ul>
      ),
    },
    {
      id: "about",
      title: "Quién está detrás de AIFit+",
      body: (
        <p>
          <Fill value={LEGAL.operatorName.es} label="nombre del operador" />,{" "}
          <Fill value={LEGAL.operatorAddress.es} label="dirección postal" />. Correo: <ContactEmail label="correo electrónico de contacto" />.
        </p>
      ),
    },
  ],
};
