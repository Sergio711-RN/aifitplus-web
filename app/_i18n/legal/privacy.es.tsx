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
          <li>Dirección de correo electrónico: para iniciar sesión con un código.</li>
          <li>Nombre, idioma de la interfaz y foto de perfil: si usted los proporciona.</li>
        </ul>
        <h3>Datos de salud y del cuerpo</h3>
        <p>
          Sus respuestas en el primer inicio: sexo, año de nacimiento, estatura, peso e historial de pesajes, peso meta y ritmo, nivel de
          actividad, tipo de alimentación, lo que desea mejorar, grupo sanguíneo y factor Rh (opcional). Se trata de una categoría especial
          de datos: llegan a nuestro servidor solo después de que usted da un consentimiento aparte al registrarse. Hasta ese momento, sus
          respuestas se guardan únicamente en su dispositivo.
        </p>
        <h3>Diario de comidas</h3>
        <ul>
          <li>Fotos de comidas que usted toma o elige de su galería.</li>
          <li>
            Resultados del reconocimiento: plato, ingredientes, peso de la porción, calorías, proteínas, grasas, carbohidratos, sus
            correcciones y sus respuestas a las preguntas aclaratorias.
          </li>
          <li>Hora y tipo de comida.</li>
        </ul>
        <h3>Suscripción</h3>
        <p>
          Estado de la suscripción, plan, fechas de la prueba y de la renovación. Los pagos los cobran el App Store y Google Play: nosotros
          no recibimos el número de su tarjeta ni sus datos de pago.
        </p>
        <h3>Ajustes y datos técnicos</h3>
        <ul>
          <li>Horarios de los recordatorios, unidades de medida y el código promocional que haya ingresado.</li>
          <li>Un identificador interno de usuario y una clave de sesión en su dispositivo.</li>
          <li>
            Registros técnicos del servidor: dirección IP, hora y tipo de solicitud. Los necesitamos para operar y proteger el servicio.
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
          <strong>Funcionamiento de la aplicación</strong>: inicio de sesión, cálculo de sus metas diarias, reconocimiento de comidas,
          diario, sincronización entre dispositivos. Base legal: nuestro contrato con usted (<Link href="/es/terms">Términos de uso</Link>),
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
          <strong>Seguridad</strong>: protección contra ataques y abusos, por ejemplo, un límite diario de solicitudes a la IA. Base legal:
          nuestro interés legítimo en que el servicio funcione, art. 6.1.f del RGPD.
        </li>
        <li>
          <strong>Estadísticas del sitio web</strong>: cuántas personas visitan el sitio y de dónde llegan, para poder mejorarlo. Base
          legal: su consentimiento en el aviso de cookies, art. 6.1.a del RGPD; puede retirarlo en “Configuración de cookies”, al final de
          la página.
        </li>
        <li>
          <strong>Los recordatorios</strong> se envían solo si usted los activa y permite las notificaciones en los ajustes de su sistema.
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
    title: "Cómo funciona el reconocimiento de fotos",
    body: (
      <>
        <p>
          La foto se comprime en su dispositivo y se sube a un almacenamiento privado al que solo su cuenta tiene acceso. El servidor la
          envía a un modelo de inteligencia artificial, recibe el desglose de la comida y guarda el resultado en su diario.
        </p>
        <p>
          El modelo lo proporciona Anthropic. Anthropic trata la foto por encargo nuestro y únicamente para responder a la solicitud. Según
          las condiciones de su API comercial, el contenido de las solicitudes no se usa para entrenar modelos.
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
            <strong>Supabase</strong>: base de datos, inicio de sesión y almacenamiento de archivos. Todos los datos de la cuenta, el diario
            y las fotos. Servidores en Irlanda (UE).
          </li>
          <li>
            <strong>Anthropic</strong>: reconocimiento de comidas. Fotos y texto de las respuestas a las preguntas aclaratorias. Estados
            Unidos.
          </li>
          <li>
            <strong>Resend</strong>: envío de los correos con el código de inicio de sesión. Dirección de correo electrónico e idioma del
            correo. Estados Unidos.
          </li>
          <li>
            <strong>RevenueCat</strong>: gestión de suscripciones. Identificador interno de usuario e historial de compras de la tienda.
            Estados Unidos.
          </li>
          <li>
            <strong>Google</strong>: estadísticas del sitio web (Google Analytics), solo con su consentimiento. Identificador del navegador
            tomado de la cookie, páginas vistas, tipo de dispositivo, ubicación aproximada. Google Ireland Limited; los datos pueden
            tratarse en Estados Unidos.
          </li>
          <li>
            <strong>Apple y Google</strong>: pago de suscripciones y notificaciones. Tratan los datos conforme a sus propias políticas, como
            responsables independientes.
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
          Nuestro almacenamiento principal está en la Unión Europea (Irlanda). El reconocimiento de fotos, los correos, la gestión de
          suscripciones y las estadísticas del sitio web están a cargo de proveedores ubicados en Estados Unidos, por lo que algunos datos
          se transfieren fuera del Espacio Económico Europeo.
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
        <li>Datos de la cuenta, diario y fotos: mientras usted tenga una cuenta.</li>
        <li>
          Cuando elimina su cuenta, su perfil, su plan, su historial de peso, su diario y sus fotos se eliminan de inmediato. Desaparecen de
          las copias de seguridad del proveedor de alojamiento en un plazo de {LEGAL.backupRetentionDays} días.
        </li>
        <li>Las respuestas ingresadas antes del registro se guardan solo en su dispositivo y se borran al cerrar sesión.</li>
        <li>
          El App Store, Google Play y RevenueCat conservan los registros de compras durante el tiempo que exijan las leyes sobre
          contabilidad de pagos.
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
            <strong>Saber</strong> qué datos tenemos sobre usted y obtener una copia.
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
            su plan, por lo que retirar el consentimiento implica eliminar su cuenta.
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
        <li>El inicio de sesión se hace con un código de un solo uso: no hay contraseñas que robar.</li>
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
      AIFit+ cuenta las calorías a partir de fotos de su comida. Para hacerlo, necesita datos sobre su cuerpo y su alimentación. Aquí
      tiene un resumen breve y directo: qué recopilamos, para qué, dónde lo guardamos y cómo eliminarlo todo.
    </p>
  ),
  sections: SECTIONS,
};
