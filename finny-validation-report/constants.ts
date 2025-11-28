
import { Interview, InsightPoint, Proposal, BehavioralPattern } from './types';

export const INTERVIEWS: Interview[] = [
  {
    id: 1,
    name: "Rodrigo Castillo",
    role: "Gerente de Ventas",
    company: "MiniCooper",
    quote: "Yo uso Expensify, pero la verdad la odio. La odio porque no es automática.",
    sentiment: "mixed",
    tags: ["Automatización", "Privacidad"],
    keyInsight: "Usa 'Fondo de Ahorro Ágil' (descuento nómina). Privacidad es vital.",
    fullTranscript: `**Fecha:** 26 de noviembre de 2025

Rodrigo cree que las personas no usarían las herramientas para bienestar personal financiero porque a duras penas usan las herramientas que tienen a su mano, como Excel. o eso, en la empresa excel automotriz tienen algo que se llama fondo de ahorro ágil que es un descuento de la nómina y les dan pues es como una cuenta de ahorros con una mejor tasa

también cree que las personas tal vez si lo usarían lo usarían para registro de gastos pero no de ingresos El usa Expensify, pero lo odia porque no es automático, le gustaría una herramienta que es automática y que tenga como... que aseguran que no la información no va a tener terceros van a tener acceso a ella y ya`
  },
  {
    id: 2,
    name: "Abdel",
    role: "Perfil Tecnológico",
    company: "BAM",
    quote: "Lo que más falta es el tema de integraciones... aquí en Guate no existen esas conexiones.",
    sentiment: "neutral",
    tags: ["Open Banking", "Integración", "Consolidación"],
    keyInsight: "Usuario avanzado. Exige integraciones bancarias reales.",
    fullTranscript: `Ahora ya le dije la hora a vos, estaba un poquito en reuniones toda la mañana. Fíjate que tal vez mi opinión sincera a vos es... Y creo que es un poquito también mezclada la idea, fíjate que miro ahí un temita, si una app que me permite ordenar todas mis finanzas personales con el tema del trabajo, meramente eso sí les falta mucho a los bancos tener razón.

Pero lo que más falta es el tema de integraciones. Fíjate que yo la que utilizo por defecto, no es una que me da el banco, sino que esa la compré yo hace ya unos años que se llama Wallet App. Entonces en esa aplicación lo que yo llevo es el control de mis gastos, o sea, el control de cada cuánto gasto, cuándo tengo en balances, etcétera.

Entonces, esa aplicación me ayuda a tener ordenado todo ese tema. Pero lo que falta es conexiones a mis bancos, porque a diferencia de en Estados Unidos, donde esta aplicación se te permite conectarte a Bank of America, bla, bla, bla, bla, bla, bla. pues aquí no existen esas conexiones. Entonces, lo que faltaría es generar esas conexiones para poder tener una visión un poquito más...

más general y más en tiempo real de lo que está pasando con mis finanzas. Le damos... Entonces, esa sería la primera parte. Sí lo usaría, porque sí uso una y me gusta mucho usarla. tal vez lo que te diría que las primeras dos tres preguntas y la última tal vez y ahí creo que no sé cómo sería el tema las dudas de tarjeta de crédito y pagarlas eso sí

Sería tal vez una plataforma central donde se paguen tarjetas, pero no sé si se pudiera realizar. Pero si se pudiera también tenerlo ahí, sería mucho que mejor, vamos a ver qué me cuentas. Sería una banca electrónica de diferentes bancos, a ver qué me cuentas.

Sí, sí sucedía.`
  },
  {
    id: 3,
    name: "Susanna",
    role: "Colaboradora",
    company: "Centro de Diagnóstico",
    quote: "Siento que es algo muy personal para que una empresa te haga esas preguntas... pero si tuviera productos financieros, tal vez sí.",
    sentiment: "negative",
    tags: ["Privacidad", "Deuda", "Préstamos"],
    keyInsight: "Rechazo inicial por privacidad. Cambio radical al mencionar préstamos.",
    fullTranscript: `No, porque no es como que tenga que pagar tanto. Ok. Es más como, digamos, para cosas imprevistas o algo así, que te sales de tu presupuesto? No es como cosas que son muy... Es lo mismo.

Entonces ya tienes en mente lo que vas a necesitar gastar ese mes? Sí, así es. ¿Dónde trabajas? Diagnósticos. ¿A qué te dedicas? Centro de diagnóstico. Si tu empresa te dijera mañana que tienen esta aplicación disponible para ti, ¿la usarías?

Bueno, siento que es muy personal para una empresa preguntarte esas cosas. Si nos ayudaran a pagar algo, dirías, OK. Pero siento que es muy personal. Muy personal, sí. O sea, no, en realidad no. Sí. A ver si esta herramienta, dentro de la herramienta, tuviera productos financieros, como consolidación de deudas, o tal vez préstamos con mejores tasas.

Creo que tal vez estaría dispuesta a eso.

¿Qué tipo de préstamos le estás haciendo a la empresa? Es externo. Fuera de la empresa, no sería la empresa como tal la que te da el dinero, sino la aplicación. Digamos, con algún tipo de cooperativa, como con mi copy. ¿Y qué tengo ahí?

¿Cuál es mi presupuesto? ¿Cuánto pago cada mes? Como, para poder obtener productos, como un préstamo, o algún tipo de consolidación de deudas. Creo que eso sería útil ahí.

Bueno, la verdad es que, bueno... Algunas personas preguntan cuánto es el costo de gastos que uno tiene, creo que es como un mes, ¿verdad? Siento que manejo bien mis finanzas. ¡Felicitaciones! Más del 50% de la población de Guatemala no conoce su presupuesto y gastos. ¡Muchas gracias! ¡De nada! ¡Buenas tardes!`
  },
  {
    id: 4,
    name: "Francisco",
    role: "Colaborador",
    company: "Aceros de Guatemala",
    quote: "Sería para ver dónde hay una fuga, dónde está el problema.",
    sentiment: "positive",
    tags: ["Diagnóstico", "Respaldo"],
    keyInsight: "Interés en diagnóstico de fugas financieras y respaldo de la empresa.",
    fullTranscript: `¿Puedo hacerte un par de preguntas? ¿Te importaría si transcribo la entrevista? Claro. ¿Actualmente usas alguna herramienta para manejar tu presupuesto y gastos? No. No. ¿Lo tienes en mente? Sí, todo el tiempo. Ok. ¿Y sientes algún estrés financiero? Digamos porque no sabes si vas a llegar a fin de mes.

¿Crees que una herramienta digital te ayudaría a manejar mejor tu presupuesto? Podría hacerlo. ¿Lo has intentado? Todavía no. ¿Todavía no? ¿Para qué empresa trabajas? Aceros de Guatemala. Si Aceros de Guatemala te ofreciera una aplicación gratuita para mejorar tus hábitos financieros y manejar tu presupuesto, ¿la usarías?

¿Estarías dispuesto a probarla? Sí. ¿Qué te gustaría saber antes de probarla? ¿Qué te haría estar más dispuesto a usarla?

Es para ver dónde hay una fuga, dónde está el problema, para que el tema no aparezca. Digamos, si esta herramienta también te ofreciera productos financieros de terceros, como cooperativas, reconciliación de deudas, o préstamos a una mejor tasa, también sentirías que sería una buena propuesta de valor.

Sí, también.

Al final, la herramienta que estamos desarrollando en esta cooperativa es para ofrecerla a las empresas para que las empresas puedan ofrecerla a sus empleados para mejorar su bienestar financiero. Tener un mejor orden, para que al final, el bienestar financiero se traduzca en bienestar personal.

Si las personas no están estresadas en el trabajo por sus finanzas, creemos que podrán desarrollarse mejor en el trabajo. ¿Te parece que tiene sentido? Sí, porque es como si una empresa tuviera una cooperativa. Eso te da la oportunidad de que la empresa tenga ciertos beneficios. Tanto en términos de ahorros como de préstamos. Es similar a eso, pero en una plataforma. ¿Te parece?

Digamos que una empresa ofreciera esta aplicación de manera gratuita.`
  },
  {
    id: 5,
    name: "Maribi",
    role: "Administración",
    company: "NOVA",
    quote: "Poder tomarle fotos a las facturas y registrarlas así.",
    sentiment: "positive",
    tags: ["OCR", "Usabilidad"],
    keyInsight: "Primera entrevista en la calle. Necesidad de baja fricción (fotos).",
    fullTranscript: `Estoy haciendo una investigación con una cooperativa para entender mejor los hábitos financieros personales de los guatemaltecos. ¿Puedo hacerte algunas preguntas? ¿Actualmente usas una herramienta como tu cuaderno o Excel para manejar tus gastos? Está en el teléfono. ¿En el teléfono? ¿Lo escribes manualmente? Sí. Ok. ¿Y nunca has explorado dónde poner tu presupuesto y dónde poner tus gastos? No.

¿Para qué empresa trabajas? Trabajo para NOVA. ¿A qué te dedicas? Trabajo en administración. Si NOVA te ofreciera una herramienta para tus gastos, ¿la usarías? Sí. ¿Qué te gustaría saber? ¿Qué herramienta te gustaría tener para dejar de usar tus notas y usar la herramienta?

No entiendo la pregunta. A ver... ¿Qué necesitarías... Si quieres cambiar... ¿Qué necesitarías que tuviera esta herramienta para que funcione mejor que tu voz?

Sí, poder tomar fotos de las facturas y registrarlas así. Del 1 al 10, ¿qué tan disciplinada te consideras con tu presupuesto? Si llegas con estrés, digamos, a fin de mes, o a principio de mes, o casi no. Casi no. Oh, qué bueno. Felicitaciones. Sí. Y, digamos, si esta herramienta pudiera ofrecerte, aparte de planificar como un presupuesto, también productos financieros como préstamos o consolidaciones de deudas, ¿crees que sería útil?

En este momento, siento que no lo usaría. Si la empresa te diera esta aplicación, ¿qué tipo de miedos tendrías? ¿Tendrías alguna pregunta o te gustaría que la empresa te respondiera antes de empezar a usarla?

La idea de esta herramienta que la cooperativa quiere desarrollar es ayudar a los empleados a tener mejores hábitos financieros y de esta manera también tener un mejor bienestar personal. El bienestar viene primero de las finanzas. Si uno se estresa en el trabajo, No funcionará de la misma manera si sabes que tus finanzas están bien y puedes pagar lo que necesitas. Entonces esta herramienta es...

La empresa se la daría a sus empleados de forma gratuita, con la idea de mejorar sus hábitos financieros. Maribel, ¿cuántos años tienes?`
  },
  {
    id: 6,
    name: "Ricardo",
    role: "Bancario (21 años)",
    company: "Banco Promerica",
    quote: "Que mi información esté segura. Tendría que ver mucho la seguridad, si está encriptada tu información.",
    sentiment: "positive",
    tags: ["Seguridad", "Respaldo Institucional"],
    keyInsight: "Confianza derivada del respaldo bancario/empresarial.",
    fullTranscript: `Estoy aquí en nombre de una cooperativa para investigar los hábitos financieros personales de los guatemaltecos. ¿Puedo hacerte algunas preguntas? Claro. ¿Te importa si transcribo la conversación? No. ¿Tienes una herramienta o tienes algo para rastrear tu presupuesto o tus gastos?

Un cuaderno. ¿Tu cuaderno? Un cuaderno, sí. ¿Alguna vez has explorado herramientas digitales, como tomar notas? Solo en un Excel. En un Excel, nada más. Pero normalmente, estoy acostumbrado a cómo lo hacen mis padres en un cuaderno. Así me enseñaron. Oh, ¿te enseñaron a tomar notas?

Sí, me enseñaron a tomar notas. ¿Crees que el hecho de que te enseñaran... Te facilitó tener ese hábito. Sí, lo hace mucho más fácil. ¿Estarías dispuesto a usar una herramienta que te lo facilitara? Por ejemplo, poder tomar fotos de tus facturas y tener un registro de tus gastos.

Sí, podría ser. Depende de qué aplicaciones use. ¿Qué miedos tendrías sobre la aplicación o qué objeciones tendrías? Más que nada, prevención. Que puedan...

Eso sería más que toda mi información. Sí, tendrías que ver mucho sobre la seguridad, si tu información está encriptada. Sí. ¿Dónde trabajas? ¿Proamerica? Proamerica. Proamerica te dice, mira esta aplicación, está respaldada por nosotros. No es de Proamerica, pero Proamerica contrata el servicio de la aplicación y te lo da gratis.

Como una cooperativa. Y que esta herramienta también te da acceso a productos financieros. ¿Estarías abierto a usarla? Sí, sí, sí. Sí, sí, sí. Si Proamerica lo valida. No hay problema con ninguna entidad bancaria que sea oficial. Ok. Tendría que ser... Banco, Industrial, Proamerica, JT, PAC.

¿Como un respaldo bancario? Un respaldo bancario que me digan. Lo verificamos. ¿Cuántos años tenés? 21.`
  }
];

export const INSIGHTS: InsightPoint[] = [
  {
    category: 'Green',
    title: "El Respaldo Institucional",
    description: "La marca del empleador o banco transfiere confianza crítica para la adopción.",
    evidence: ["Ricardo (Promerica): Lo usaría si el banco lo avala.", "Francisco (Aceros): Ve valor en que la empresa ofrezca beneficios tipo cooperativa."]
  },
  {
    category: 'Green',
    title: "Consolidación de Deuda",
    description: "El verdadero gancho emocional. Convierte a detractores en usuarios interesados.",
    evidence: ["Susanna: Cambió de 'No' a 'Sí' al mencionar préstamos externos.", "Abdel: Desea una plataforma central para pagar tarjetas."]
  },
  {
    category: 'Yellow',
    title: "La Pereza Manual",
    description: "El ingreso manual de gastos es la principal fricción. Si no es automático, no se usa.",
    evidence: ["Rodrigo: 'Odio Expensify porque no es automática'.", "Maribi: Quiere tomar fotos a facturas (OCR)."]
  },
  {
    category: 'Red',
    title: "Barrera de Privacidad",
    description: "Miedo profundo a que el empleador fiscalice la vida personal a través de la data.",
    evidence: ["Susanna: 'Es muy personal que una empresa te pregunte eso'.", "Rodrigo: Exige garantía de que la empresa no tenga acceso."]
  }
];

export const PROPOSALS: Proposal[] = [
  {
    id: 1,
    title: "Tecnología \"Snap & Track\" (OCR)",
    problem: "La fricción de ingreso manual es la causa #1 de abandono.",
    solution: "Integrar reconocimiento de facturas por cámara (OCR). Que el usuario no digite, solo fotografíe.",
    feature: "Smart Camera Input",
    icon: "camera",
    evidence: [
      "Maribi (NOVA): \"¿Qué necesitaría? Poder tomar fotos de las facturas y registrarlas así.\"",
      "Rodrigo (MiniCooper): \"Uso Expensify, pero la odio porque no es automática.\""
    ],
    impact: "Aumenta la retención de uso diario del colaborador, justificando la inversión de la empresa."
  },
  {
    id: 2,
    title: "Cooperativa Digital (Consolidación)",
    problem: "El \"Bienestar Financiero\" es visto como un \"nice to have\", pero la consolidación de deuda es un \"Must have\".",
    solution: "Posicionar Finny como plataforma de beneficios y liquidez. El botón principal no debe ser \"Ahorrar\", sino \"Consolidar Deuda\".",
    feature: "Debt Relief Hub",
    icon: "percent",
    evidence: [
      "Susanna (Centro de Diagnóstico): \"Creo que tal vez estaría dispuesta a eso... para poder obtener productos, como un préstamo.\"",
      "Francisco (Aceros): \"Es como si una empresa tuviera una cooperativa... Eso te da la oportunidad de que la empresa tenga ciertos beneficios.\""
    ],
    impact: "Convierte a detractores en usuarios interesados al ofrecer valor tangible inmediato."
  },
  {
    id: 3,
    title: "\"Bóveda Ciega\" (Privacidad)",
    problem: "El miedo a que el empleador fiscalice el estilo de vida del empleado es una barrera absoluta.",
    solution: "Crear un \"Modo Privado Certificado\". Un sello visual en la app que garantice que la data está encriptada y excluida de reportes.",
    feature: "Privacy Shield Toggle",
    icon: "shield",
    evidence: [
      "Rodrigo: \"Que aseguran que no la información no va a tener terceros acceso a ella.\"",
      "Susanna: \"Siento que es muy personal para una empresa preguntarte esas cosas.\"",
      "Ricardo: \"Tendrías que ver mucho sobre la seguridad, si tu información está encriptada.\""
    ],
    impact: "Argumento de venta clave para RRHH: 'Tus empleados la usarán porque les garantizamos que no ves sus datos'."
  }
];

export const BEHAVIORAL_PATTERNS: BehavioralPattern[] = [
  {
    id: 1,
    title: "Privacidad vs. Valor Percibido",
    caseStudy: "El Caso Susanna",
    finding: "Inicialmente, hubo un rechazo rotundo por privacidad (\"Es muy personal\"). Sin embargo, la postura cambió radicalmente a un \"SÍ\" cuando se mencionó el acceso a créditos y consolidación.",
    insight: "La privacidad no es una barrera absoluta, es un tema de costo-beneficio. El usuario corporativo no entregará sus datos a cambio de reportes (bajo valor), pero sí está dispuesto a hacerlo a cambio de beneficios financieros tangibles (tasas preferenciales).",
    strategy: "El onboarding no debe pedir permisos, debe ofrecer valor. No decir \"Conecta tu cuenta\", sino \"Conecta para evaluar si aplicas a una mejor tasa\"."
  },
  {
    id: 2,
    title: "El Respaldo Institucional es la Clave",
    caseStudy: "El Caso Ricardo",
    finding: "Tanto en banca (Ricardo) como en industria (Francisco), la respuesta fue consistente: \"Si mi empresa o mi banco lo respalda, lo uso con confianza\".",
    insight: "Finny es una marca nueva y genera incertidumbre natural. La confianza del usuario no se gana de inmediato, se transfiere de la institución que ya paga su nómina.",
    strategy: "El producto debe sentirse como una extensión de la empresa. La interfaz debe permitir personalización (Co-branding) para que el usuario sienta que está en un entorno seguro avalado por su empleador."
  },
  {
    id: 3,
    title: "Hábito Cultural vs. Digitalización",
    caseStudy: "El Caso Ricardo",
    finding: "Un usuario joven (21 años) prefiere usar cuaderno físico porque \"así le enseñaron sus papás\".",
    insight: "En Guatemala, llevar el control financiero es un hábito cultural de responsabilidad, no solo administrativo. La automatización total puede generar la sensación de \"perder el control\" o romper esa disciplina heredada.",
    strategy: "Digitalizar el hábito sin eliminarlo. La App necesita un \"Resumen Semanal\" (push notification los domingos) que le dé al usuario la satisfacción de revisar sus cuentas, respetando la rutina que ya trae."
  },
  {
    id: 4,
    title: "Percepción de Control: Eficiencia vs. Incertidumbre",
    caseStudy: "Análisis General",
    finding: "En la muestra, las mujeres (Maribi, Susanna) reportaron bajo estrés y buscan hacer lo mismo pero más rápido. Los hombres (Francisco) admitieron mayor incertidumbre y la necesidad de encontrar \"fugas\".",
    insight: "El dolor no es el mismo para todos. Unos buscan agilidad operativa y otros buscan diagnóstico.",
    strategy: "La comunicación interna debe atacar ambos frentes:\nEnfoque A (Eficiencia): \"Reduce el tiempo que dedicas a tus gastos con lectura automática\".\nEnfoque B (Control): \"Detecta fugas de dinero y toma el control total\"."
  }
];

export const STRATEGIC_CONCLUSION = {
  text: "La validación confirma que no vendemos \"Bienestar\" (un concepto abstracto). Vendemos Liquidez, Automatización y Respaldo. El presupuesto es el medio, pero el producto real es la salud crediticia."
};
