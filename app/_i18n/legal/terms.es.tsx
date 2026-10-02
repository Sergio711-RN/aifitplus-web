import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Neutral Spanish (US and Latin America first), formal «usted», “…” quotes, decimal point («18.5»)

const SECTIONS: ILegalSection[] = [
  {
    id: "general",
    title: "Disposiciones generales",
    body: (
      <>
        <p>
          Estos términos son un acuerdo entre usted y <Fill value={LEGAL.operatorNameWith.es} label="nombre del operador" /> (“nosotros”)
          sobre el uso de la aplicación AIFit+ y del sitio web aifitplus.com.
        </p>
        <p>
          Al tocar “Continuar” durante el registro, usted acepta estos términos y la{" "}
          <Link href="/es/privacy">Política de privacidad</Link>. Si no está de acuerdo, no use la aplicación.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "Qué hace AIFit+",
    body: (
      <>
        <ul>
          <li>Calcula sus metas diarias de calorías, proteínas, grasas y carbohidratos a partir de sus respuestas.</li>
          <li>
            Reconoce las comidas en fotos mediante inteligencia artificial y estima el peso de la porción, las calorías y los nutrientes.
          </li>
          <li>Lleva un diario de comidas y de peso, y ofrece consejos y recordatorios.</li>
        </ul>
        <p>
          La aplicación se distribuye a través del App Store y Google Play en determinados países. No está disponible en la Federación de
          Rusia.
        </p>
      </>
    ),
  },
  {
    id: "not-medical",
    title: "No es un servicio médico",
    body: (
      <>
        <p>
          AIFit+ le ayuda a llevar el control de su alimentación, pero no diagnostica ni trata nada. Sus cálculos y consejos son solo
          informativos y no sustituyen la recomendación de un médico o nutricionista.
        </p>
        <p>
          El reconocimiento por foto ofrece una <strong>estimación</strong>: el plato, el peso de la porción y las calorías pueden diferir
          de los reales. Revise el resultado y corríjalo manualmente.
        </p>
        <p>
          El reconocimiento de comidas, las preguntas aclaratorias y los consejos los genera un sistema de inteligencia artificial, no una
          persona.
        </p>
        <p>
          <strong>Alergias e intolerancias.</strong> La aplicación no puede ver todos los ingredientes en una foto y no verifica si los
          alimentos contienen alérgenos ni si son seguros. Si tiene una alergia, una intolerancia o una dieta indicada por un médico, no se
          fíe de los ingredientes reconocidos.
        </p>
        <p>
          Consulte a un médico antes de cambiar su alimentación si está embarazada o amamantando, si tiene diabetes o una enfermedad renal,
          cardíaca o metabólica, si tiene o ha tenido un trastorno de la conducta alimentaria, o si toma medicamentos cuyo efecto depende
          de la alimentación.
        </p>
        <p>
          No use la aplicación para alcanzar o mantener una ingesta calórica o un peso corporal peligrosamente bajos. La Organización
          Mundial de la Salud considera que un índice de masa corporal de 18.5 a 25 corresponde a un peso saludable en adultos.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "Cuenta",
    body: (
      <ul>
        <li>Puede usar la aplicación a partir de los {LEGAL.minAge} años.</li>
        <li>Usted inicia sesión con un código de un solo uso enviado a su correo electrónico. Cada cuenta es para una sola persona.</li>
        <li>Proporcione información veraz sobre usted: sus metas se calculan a partir de ella.</li>
        <li>No comparta los códigos de inicio de sesión con otras personas. Las acciones realizadas en su cuenta se consideran suyas.</li>
        <li>Puede eliminar su cuenta en cualquier momento desde la aplicación: toque su foto de perfil → “Eliminar cuenta”.</li>
      </ul>
    ),
  },
  {
    id: "subscription",
    title: "Suscripción y prueba gratuita",
    body: (
      <ul>
        <li>Algunas funciones están disponibles con una suscripción de pago. El precio y la duración se muestran en la aplicación antes de pagar.</li>
        <li>Usted se suscribe y paga a través del App Store o Google Play, conforme a las reglas de esas tiendas.</li>
        <li>
          Si su suscripción comienza con una prueba gratuita, pasa a ser de pago automáticamente cuando termina la prueba, salvo que usted
          la cancele al menos 24 horas antes de que termine.
        </li>
        <li>La suscripción se renueva automáticamente hasta que usted la cancele en los ajustes del App Store o de Google Play.</li>
        <li>
          <strong>Eliminar su cuenta no cancela su suscripción</strong>: cancélela por separado en la tienda.
        </li>
        <li>Los reembolsos los gestionan el App Store y Google Play conforme a sus propias reglas.</li>
        <li>Un código promocional agrega días gratuitos. No se puede canjear por dinero.</li>
        <li>
          Si cambiamos el precio, el nuevo precio se aplica a partir del siguiente período, y la tienda le pedirá su consentimiento con
          antelación.
        </li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "Reglas de uso",
    body: (
      <>
        <p>No está permitido:</p>
        <ul>
          <li>Subir material ilegal o fotos de otras personas sin su consentimiento.</li>
          <li>Enviar solicitudes de forma automatizada, sin pasar por la aplicación o más allá de un uso personal razonable.</li>
          <li>Vulnerar, descompilar o copiar la aplicación, ni eludir las restricciones de la suscripción.</li>
          <li>Revender el acceso al servicio.</li>
        </ul>
        <p>
          Para prevenir abusos, el número de reconocimientos por día está limitado. Ese límite no interfiere con el uso normal.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Sus fotos y sus datos",
    body: (
      <p>
        Sus fotos y las entradas de su diario siguen siendo suyas. Usted nos autoriza a almacenarlas y tratarlas únicamente para que el
        servicio funcione para usted: mostrar su diario, reconocer las comidas y sincronizar sus dispositivos. No publicamos su contenido.
        Para más detalles, consulte la <Link href="/es/privacy">Política de privacidad</Link>.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Derechos sobre la aplicación",
    body: (
      <p>
        La aplicación, su diseño, sus textos y el nombre y el logotipo de AIFit+ nos pertenecen. Usted obtiene un derecho personal e
        intransferible de usar la aplicación en sus dispositivos mientras estos términos estén vigentes.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Disponibilidad del servicio",
    body: (
      <p>
        Seguimos desarrollando la aplicación: las funciones pueden cambiar, agregarse o eliminarse. El servicio puede no estar disponible
        temporalmente debido a actualizaciones o a fallas de nuestros proveedores. Le avisaremos con antelación de los cambios importantes
        en las funciones de pago.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Responsabilidad",
    body: (
      <>
        <p>
          El servicio se ofrece “tal cual”. En la medida en que la ley lo permita, no somos responsables de las decisiones sobre
          alimentación y salud tomadas con base en los cálculos y las estimaciones de la aplicación, ni de las pérdidas indirectas.
        </p>
        <p>
          Esta limitación no se aplica a los daños a la vida o a la salud causados por nuestra culpa, a los daños que causemos de forma
          intencional o por negligencia grave, ni a ninguna responsabilidad que la ley no permita excluir.
        </p>
        <p>
          Estos términos no limitan los derechos que usted tiene como consumidor según las leyes del país donde vive.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Fin del acceso",
    body: (
      <p>
        Puede dejar de usar la aplicación y eliminar su cuenta en cualquier momento. Podemos bloquear una cuenta que incumpla estos
        términos. Antes se lo advertiremos, salvo que el incumplimiento ponga en riesgo a otros usuarios o el funcionamiento del servicio.
      </p>
    ),
  },
  {
    id: "law",
    title: "Ley aplicable y controversias",
    body: (
      <p>
        Estos términos se rigen por las leyes de <Fill value={LEGAL.governingLaw.es} label="país de la ley aplicable" />. Primero
        intentaremos resolver cualquier controversia por escrito: escriba a <ContactEmail label="correo electrónico de contacto" /> y le
        responderemos en un plazo de 10 días hábiles.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Cambios en estos términos",
    body: (
      <p>
        Si cambiamos estos términos, se lo avisaremos con antelación en la aplicación. Al seguir usando la aplicación después de que los
        cambios entren en vigor, usted los acepta. La fecha de la versión vigente aparece al inicio de este documento.
      </p>
    ),
  },
  {
    id: "contacts",
    title: "Contacto",
    body: (
      <p>
        <Fill value={LEGAL.operatorName.es} label="nombre del operador" />,{" "}
        <Fill value={LEGAL.operatorAddress.es} label="dirección postal" />. Correo electrónico:{" "}
        <ContactEmail label="correo electrónico de contacto" />.
      </p>
    ),
  },
];

export const termsEs: ILegalDocument = {
  title: "Términos de uso",
  lead: (
    <p>
      Las reglas con las que funciona AIFit+: qué le ofrece la aplicación, cómo funciona la suscripción, qué no está permitido y de qué
      somos responsables.
    </p>
  ),
  sections: SECTIONS,
};
