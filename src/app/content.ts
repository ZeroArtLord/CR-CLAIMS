export type Language = "en" | "es";

export const contentByLang = {
  en: {
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Claim Types", href: "#services" },
      { label: "Our Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
    headerCta: "Start Your Free Inspection Now",
    hero: {
      title: "Florida Licensed Public Adjusters",
      subtitle: "We handle residential & commercial property claims faster with less hassle.",
      body:
        "We represent Homeowners & Business Owners, Not the Insurance company. We manage inspections, documentation, and negotiations to protect the full value of your residential or commercial insurance claim -- with no upfront fees.",
      license: "License W963358",
      ctaPrimary: "Start Your Free Inspection Now!",
      ctaSecondary: "Call (407) 358-4589",
      imageAlt: "Beautifully restored luxury home",
    },
    trust: {
      stats: [
        { value: "24/7", label: "Emergency Response" },
        { value: "Maximized", label: "Insurance Settlement" },
        { value: "No Fees", label: "Unless You Get Paid" },
        { value: "Licensed", label: "Public Adjusters (Florida)" },
      ],
    },
    services: {
      title: "Claims We Handle",
      subtitle: "Comprehensive property insurance claim support across Florida",
      learnMore: "Learn More",
      items: [
        {
          title: "Water Damage",
          description:
            "Water damage doesn't wait -- and neither should you. From burst pipes and appliance leaks to roof failures, water can cause serious damage fast and lead to mold or structural issues if not addressed correctly. Whether your claim is new or already in progress, CR Claims Resolution specializes in water damage insurance claims across Florida, ensuring nothing is overlooked and your compensation reflects the true cost of repairs.",
        },
        {
          title: "Storm & Hurricane Damage",
          description:
            "Florida storms can be relentless. Hurricanes, tropical storms, high winds, and heavy rain often cause roof damage, interior leaks, and hidden structural problems that insurance companies may downplay. Our certified public adjusters have extensive experience handling storm and hurricane insurance claims in Florida, making sure every detail is documented and properly claimed. Don't settle for less after the storm passes.",
        },
        {
          title: "Fire Damage",
          description:
            "A fire can turn your life upside down in a matter of minutes. Beyond the visible destruction, fire damage often includes smoke, soot, and structural issues that insurance companies tend to undervalue. At CR Claims Resolution, our licensed public adjusters handle your fire insurance claim from start to finish, protecting your rights and fighting to maximize your settlement. You focus on rebuilding -- we handle the claim.",
        },
        {
          title: "Flood Damage",
          description:
            "Flooding is one of the most destructive and stressful losses a property owner can face in Florida. Whether caused by heavy rain, storm surge, or rising water levels, flood damage can impact foundations, electrical systems, and personal property. CR Claims Resolution helps you navigate complex flood insurance claims, working diligently to secure the compensation you need to recover and rebuild with confidence.",
        },
      ],
    },
    process: {
      title: "Our Claim Process",
      subtitle: "Clear steps that reduce stress and keep your claim organized from day one.",
      steps: [
        { title: "Free Property Inspection", description: "We assess visible and hidden damages" },
        { title: "Detailed Policy Analysis", description: "We review coverage and requirements" },
        { title: "Comprehensive Documentation", description: "Photos, measurements, estimates" },
        { title: "Claim Preparation & Submission", description: "We submit a complete claim file" },
        { title: "Direct Negotiation", description: "We negotiate with the insurer" },
        { title: "Resolution & Payment", description: "We work to secure a fair settlement and ensure payment" },
      ],
    },
    reassurance: {
      title: "What a Public Adjuster Does -- and How We Help You",
      lead: "A licensed public adjuster represents only the property owner during the insurance claim process.",
      body:
        "While the insurance company works to protect its own interests, we work to protect yours. Our role is to ensure your claim is accurately documented, properly presented, and fairly negotiated.",
      items: [
        "Damage evaluation",
        "Policy review",
        "Claim documentation",
        "Claim submission",
        "Negotiation with the insurance company",
      ],
    },
    cta: {
      title: "Ready to Maximize Your Insurance Claim Settlement?",
      body:
        "Avoid missed damages and underpaid claims after property loss. CR Claims Resolution represents property owners -- not insurance companies -- handling your claim from inspection to negotiation to help you secure the full compensation your policy allows.",
      body2: "Schedule your free inspection today and get expert guidance every step of the way.",
      button: "Request Your Free Inspection",
    },
    reviews: {
      badge: "Google Reviews",
      title: "Trusted by Florida Homeowners",
      subtitle: "Real experiences from property owners who relied on our public adjusters.",
      averageLabel: "Average Rating",
      basedOn: "Based on verified local reviews",
      metrics: ["Professionalism", "Communication", "Outcome"],
      readMore: "Read More Success Stories",
      testimonials: [
        {
          name: "Maria L.",
          location: "Orlando, FL",
          role: "Homeowner",
          quote:
            "After a water loss, I felt completely overwhelmed dealing with the insurance company. CR Claims Resolution took over the process, explained everything clearly, and made sure no damage was missed. The final settlement was much higher than the initial offer.",
        },
        {
          name: "James R.",
          location: "Kissimmee, FL",
          role: "Homeowner",
          quote:
            "Our storm damage claim was moving slowly and we weren't getting answers. Once CR Claims Resolution got involved, communication improved immediately. They handled the documentation and negotiations professionally and kept us informed every step of the way.",
        },
        {
          name: "Peter P.",
          location: "Winter Park, FL",
          role: "Homeowner",
          quote:
            "CR Claims Resolution truly works for the homeowner. They found damages we didn't even know to look for and helped us understand our policy. The process was smooth and stress-free, with no upfront costs.",
        },
        {
          name: "Carla M.",
          location: "Davenport, FL",
          role: "Homeowner",
          quote:
            "After a fire loss, the insurance process was confusing and frustrating. CR Claims Resolution guided us from inspection to settlement and made sure the claim was handled correctly. Their experience and attention to detail made a real difference.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle:
        "Get answers to common questions about public adjusting and how we can help maximize your insurance claim settlement.",
      ctaTitle: "Still have questions?",
      ctaBody: "Our team of licensed public adjusters is ready to answer any questions you have about your insurance claim.",
      ctaPrimary: "Schedule Free Inspection",
      ctaSecondary: "Call Now: +1 (407) 358-4589",
      items: [
        {
          question: "What is a public adjuster?",
          answer:
            "A public adjuster is a licensed professional who represents the property owner -- not the insurance company -- during the insurance claim process. Our job is to prepare, document, and negotiate your claim to help ensure a fair settlement.",
        },
        {
          question: "When should I hire a public adjuster?",
          answer:
            "You can hire a public adjuster at any stage of the claim -- before filing, after filing, or even if your claim was denied or underpaid. The sooner we get involved, the better we can protect your interests.",
        },
        {
          question: "Does CR Claims Resolution work for the insurance company?",
          answer:
            "No. CR Claims Resolution works exclusively for the policyholder. We do not represent insurance companies in any capacity.",
        },
        {
          question: "What types of claims do you handle?",
          answer:
            "We handle property damage claims related to water damage, fire and smoke damage, storm and hurricane damage, flood damage (when covered under applicable policies), and residential and commercial property losses.",
        },
        {
          question: "How much does it cost to hire a public adjuster?",
          answer:
            "There are no upfront fees. Our fee is a percentage of the settlement we help recover, and we only get paid if you get paid.",
        },
        {
          question: "Will hiring a public adjuster delay my claim?",
          answer:
            "No. In most cases, having a public adjuster helps avoid delays by ensuring the claim is properly documented and submitted from the start, reducing back-and-forth with the insurance company.",
        },
        {
          question: "Can you help if my claim was denied or underpaid?",
          answer:
            "Yes. We regularly assist property owners with denied, delayed, or underpaid claims by reviewing the policy and damages to determine if additional compensation is owed.",
        },
        {
          question: "Do I need a public adjuster for small claims?",
          answer:
            "Not necessarily. However, even smaller claims can be underpaid if damages are missed. A professional review can help you understand whether the settlement offered is fair.",
        },
        {
          question: "How long does the claims process take?",
          answer:
            "Each claim is different and depends on the type of loss, policy coverage, and insurance company response. Our goal is always to move the claim forward as efficiently as possible while protecting your rights.",
        },
        {
          question: "Do you serve all of Florida?",
          answer:
            "Yes. CR Claims Resolution serves residential and commercial property owners throughout the State of Florida.",
        },
        {
          question: "How do I get started?",
          answer:
            "Simply request a free property inspection or contact us directly. One of our claim specialists will review your situation and explain the next steps.",
        },
      ],
    },
    contact: {
      intro:
        "Recovering after a property loss doesn't have to be overwhelming. CR Claims Resolution helps Florida property owners navigate insurance claims after fire, storm, water, or flood damage. Our licensed public adjusters handle inspections, documentation, and negotiations -- working only for you -- to secure a fair and timely settlement so you can rebuild with confidence.",
      title: "Schedule Your Free Property Inspection",
      subtitle: "Speak directly with a licensed public adjuster. We'll review your situation and explain your options clearly.",
      directContact: "Direct Contact",
      callFreeNow: "Call free now",
      emailLabel: "Email",
      serving: "Serving Orlando & Central Florida",
      appointmentOnly: "By appointment only",
      whyChoose: "Why Choose CR Claims Resolution",
      bullet1: "No obligation",
      bullet2: "No upfront fees",
      bullet3: "Fast response",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      propertyType: "Property Type",
      damageType: "Damage Type",
      placeholderFirst: "First Name / Nombre",
      placeholderLast: "Last Name / Apellido",
      placeholderPhone: "Phone",
      placeholderEmail: "Email Address",
      placeholderMessage: "Briefly describe your damage / Describa su daño",
      placeholderPropertyType: "Select property type",
      placeholderDamageType: "Select damage type",
      propertyTypes: [
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
        { value: "condo", label: "Condo/Apartment" },
        { value: "vacation", label: "Vacation Home" },
        { value: "other", label: "Other" },
      ],
      damageTypes: [
        { value: "water", label: "Water Damage" },
        { value: "storm", label: "Storm/Hurricane" },
        { value: "fire", label: "Fire/Smoke" },
        { value: "flood", label: "Flood" },
        { value: "mold", label: "Mold" },
        { value: "wind", label: "Wind Damage" },
        { value: "hail", label: "Hail Damage" },
        { value: "other", label: "Other Damage" },
      ],
      submit: "Get My Free Inspection",
      sending: "Sending...",
      privacy:
        "Your information is protected with enterprise-grade encryption. We adhere to strict confidentiality standards and never share your details.",
      success: "Thanks! Your request has been sent. We'll be in touch shortly.",
      error: "Something went wrong. Please call +1 (407) 358-4589 or email info@crclaimsflorida.com.",
    },
    footer: {
      ctaTitle: "Ready to Get Started?",
      ctaBody:
        "CR Claims Resolution helps you navigate your insurance claim with confidence. We proudly serve homeowners across Florida. Contact us today to schedule your free inspection.",
      ctaButton: "Start Your Free Inspection Now!",
      about:
        "Florida's trusted public adjusters helping property owners recover the full value of their claims.",
      claims: "Claims",
      services: "Services",
      contact: "Contact Us",
      startClaim: "Start a claim",
      servingState: "Serving property owners throughout the State of Florida",
      servingLocal: "Serving Orlando & Central Florida by appointment only",
      copyright: "(c) 2026 Claims Resolution, LLC. All rights reserved. License W963358",
      legal:
        "Public adjuster services are subject to Florida law, including restrictions on solicitation and emergency fee caps. If a state of emergency is declared, additional consumer protections may apply.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
    emergency: {
      text: "Emergency Response Available - 24/7 Service",
    },
    floating: {
      callNow: "Call Now: +1 (407) 358-4589",
    },
    scrollTop: "Back to top",
  },
  es: {
    navLinks: [
      { label: "Inicio", href: "#home" },
      { label: "Tipos de Reclamo", href: "#services" },
      { label: "Proceso", href: "#process" },
      { label: "Acerca de", href: "#about" },
      { label: "Preguntas", href: "#faq" },
      { label: "Reseñas", href: "#reviews" },
      { label: "Contacto", href: "#contact" },
    ],
    headerCta: "Agenda tu inspección gratis",
    hero: {
      title: "Ajustadores Públicos con Licencia en Florida",
      subtitle: "Manejamos reclamos residenciales y comerciales más rápido y con menos estrés.",
      body:
        "Representamos a propietarios de viviendas y negocios, no a la aseguradora. Gestionamos inspecciones, documentación y negociaciones para proteger el valor total de tu reclamo residencial o comercial, sin costos por adelantado.",
      license: "Licencia W963358",
      ctaPrimary: "Agenda tu inspección gratis",
      ctaSecondary: "Llama al (407) 358-4589",
      imageAlt: "Hogar restaurado con lujo",
    },
    trust: {
      stats: [
        { value: "24/7", label: "Respuesta de emergencia" },
        { value: "Máximo", label: "Acuerdo de seguro" },
        { value: "Sin cargos", label: "Solo si cobras" },
        { value: "Licenciados", label: "Ajustadores públicos (Florida)" },
      ],
    },
    services: {
      title: "Reclamos que atendemos",
      subtitle: "Soporte completo en reclamos de propiedad en Florida",
      learnMore: "Ver más",
      items: [
        {
          title: "Daños por agua",
          description:
            "El daño por agua no espera — y tú tampoco deberías. Desde tuberías rotas y fugas de electrodomésticos hasta fallas en el techo, el agua puede causar daños graves rápidamente y provocar moho o problemas estructurales. Ya sea un reclamo nuevo o en curso, CR Claims Resolution se especializa en reclamos por agua en Florida, asegurando que nada se pase por alto y que la compensación refleje el costo real de las reparaciones.",
        },
        {
          title: "Tormentas y huracanes",
          description:
            "Las tormentas en Florida pueden ser intensas. Huracanes, tormentas tropicales, vientos fuertes y lluvias pesadas suelen causar daños en techos, filtraciones y problemas estructurales ocultos que las aseguradoras pueden minimizar. Nuestros ajustadores certificados tienen amplia experiencia en reclamos por tormentas y huracanes en Florida, documentando cada detalle para reclamar lo correcto. No te conformes con menos.",
        },
        {
          title: "Daños por incendio",
          description:
            "Un incendio puede cambiar tu vida en minutos. Además del daño visible, suele haber humo, hollín y problemas estructurales que las aseguradoras subestiman. En CR Claims Resolution, nuestros ajustadores licenciados manejan tu reclamo de principio a fin, protegiendo tus derechos y maximizando tu acuerdo. Tú reconstruyes — nosotros gestionamos el reclamo.",
        },
        {
          title: "Daños por inundación",
          description:
            "Las inundaciones son de las pérdidas más destructivas y estresantes para un propietario en Florida. Ya sea por lluvia fuerte, marejada o aumento del nivel del agua, puede afectar cimientos, sistemas eléctricos y pertenencias. CR Claims Resolution te guía en reclamos complejos de inundación y trabaja para asegurar la compensación que necesitas para recuperarte.",
        },
      ],
    },
    process: {
      title: "Nuestro proceso de reclamo",
      subtitle: "Pasos claros que reducen el estrés y mantienen tu reclamo organizado desde el día uno.",
      steps: [
        { title: "Inspección gratuita", description: "Evaluamos daños visibles y ocultos" },
        { title: "Análisis de póliza", description: "Revisamos cobertura y requisitos" },
        { title: "Documentación completa", description: "Fotos, mediciones, estimados" },
        { title: "Preparación y envío", description: "Enviamos un expediente completo" },
        { title: "Negociación directa", description: "Negociamos con la aseguradora" },
        { title: "Resolución y pago", description: "Buscamos un acuerdo justo y el pago correspondiente" },
      ],
    },
    reassurance: {
      title: "Qué hace un ajustador público y cómo te ayudamos",
      lead: "Un ajustador público con licencia representa únicamente al propietario durante el proceso del reclamo.",
      body:
        "Mientras la aseguradora protege sus intereses, nosotros protegemos los tuyos. Nuestro rol es asegurar que el reclamo se documente, presente y negocie de manera justa.",
      items: [
        "Evaluación de daños",
        "Revisión de póliza",
        "Documentación del reclamo",
        "Envío del reclamo",
        "Negociación con la aseguradora",
      ],
    },
    cta: {
      title: "¿Listo para maximizar tu acuerdo de seguro?",
      body:
        "Evita daños omitidos y reclamos subpagados. CR Claims Resolution representa a propietarios — no a aseguradoras — gestionando tu reclamo desde la inspección hasta la negociación para obtener la compensación completa.",
      body2: "Agenda tu inspección gratis y recibe guía experta en cada paso.",
      button: "Solicitar inspección gratis",
    },
    reviews: {
      badge: "Reseñas de Google",
      title: "La confianza de propietarios en Florida",
      subtitle: "Experiencias reales de quienes confiaron en nuestros ajustadores.",
      averageLabel: "Calificación promedio",
      basedOn: "Basado en reseñas locales verificadas",
      metrics: ["Profesionalismo", "Comunicación", "Resultado"],
      readMore: "Ver más historias de éxito",
      testimonials: [
        {
          name: "Maria L.",
          location: "Orlando, FL",
          role: "Propietaria",
          quote:
            "Después de un daño por agua me sentía abrumada con la aseguradora. CR Claims Resolution se encargó del proceso, explicó todo claramente y se aseguró de que no faltara nada. El acuerdo final fue mucho mayor que la oferta inicial.",
        },
        {
          name: "James R.",
          location: "Kissimmee, FL",
          role: "Propietario",
          quote:
            "Nuestro reclamo por tormenta iba muy lento y no recibíamos respuestas. Cuando CR Claims Resolution intervino, la comunicación mejoró de inmediato. Manejan la documentación y negociación con profesionalismo.",
        },
        {
          name: "Peter P.",
          location: "Winter Park, FL",
          role: "Propietario",
          quote:
            "CR Claims Resolution trabaja para el propietario. Encontraron daños que ni conocíamos y nos ayudaron a entender la póliza. El proceso fue fluido y sin costos por adelantado.",
        },
        {
          name: "Carla M.",
          location: "Davenport, FL",
          role: "Propietaria",
          quote:
            "Después de un incendio el proceso fue confuso. CR Claims Resolution nos guió desde la inspección hasta el acuerdo y se aseguró de que todo se manejara correctamente. Su experiencia marcó la diferencia.",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle:
        "Respuestas a dudas comunes sobre el ajuste público y cómo maximizamos tu reclamo.",
      ctaTitle: "¿Aún tienes preguntas?",
      ctaBody: "Nuestro equipo de ajustadores licenciados está listo para ayudarte.",
      ctaPrimary: "Agenda inspección gratis",
      ctaSecondary: "Llama: +1 (407) 358-4589",
      items: [
        {
          question: "¿Qué es un ajustador público?",
          answer:
            "Es un profesional con licencia que representa al propietario, no a la aseguradora, durante el reclamo. Nuestro trabajo es preparar, documentar y negociar para lograr un acuerdo justo.",
        },
        {
          question: "¿Cuándo debo contratar un ajustador público?",
          answer:
            "Puedes contratarlo en cualquier etapa: antes de presentar, después de presentar o si fue negado/subpagado. Mientras antes intervengamos, mejor protegemos tus intereses.",
        },
        {
          question: "¿CR Claims Resolution trabaja para la aseguradora?",
          answer:
            "No. Trabajamos exclusivamente para el asegurado.",
        },
        {
          question: "¿Qué tipos de reclamos manejan?",
          answer:
            "Agua, incendio y humo, tormentas y huracanes, inundación (cuando aplica), y pérdidas residenciales y comerciales.",
        },
        {
          question: "¿Cuánto cuesta contratar un ajustador público?",
          answer:
            "No hay costos por adelantado. Nuestro honorario es un porcentaje del acuerdo y solo cobramos si tú cobras.",
        },
        {
          question: "¿Contratar un ajustador retrasa el reclamo?",
          answer:
            "No. En la mayoría de casos ayuda a evitar retrasos porque el reclamo se documenta correctamente desde el inicio.",
        },
        {
          question: "¿Ayudan si el reclamo fue negado o subpagado?",
          answer:
            "Sí. Revisamos la póliza y los daños para determinar si corresponde una compensación adicional.",
        },
        {
          question: "¿Necesito un ajustador para reclamos pequeños?",
          answer:
            "No siempre, pero incluso reclamos pequeños pueden ser subpagados si se omiten daños. Una revisión profesional ayuda.",
        },
        {
          question: "¿Cuánto tarda el proceso?",
          answer:
            "Cada reclamo es distinto y depende del tipo de pérdida, cobertura y respuesta de la aseguradora. Buscamos avanzar lo más rápido posible protegiendo tus derechos.",
        },
        {
          question: "¿Atienden todo Florida?",
          answer:
            "Sí. Atendemos propietarios residenciales y comerciales en todo el estado.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Solicita una inspección gratuita o contáctanos directamente. Un especialista revisará tu situación y los siguientes pasos.",
        },
      ],
    },
    contact: {
      intro:
        "Recuperarte de una pérdida de propiedad no tiene que ser abrumador. CR Claims Resolution ayuda a propietarios en Florida con reclamos por incendio, tormenta, agua o inundación. Nuestros ajustadores licenciados manejan inspecciones, documentación y negociación — trabajando solo para ti — para lograr un acuerdo justo y a tiempo.",
      title: "Agenda tu inspección gratuita",
      subtitle: "Habla directamente con un ajustador licenciado. Revisaremos tu caso y opciones con claridad.",
      directContact: "Contacto directo",
      callFreeNow: "Llama ahora",
      emailLabel: "Correo",
      serving: "Orlando y Florida Central",
      appointmentOnly: "Solo con cita",
      whyChoose: "Por qué elegir CR Claims Resolution",
      bullet1: "Sin compromiso",
      bullet2: "Sin costo por adelantado",
      bullet3: "Respuesta rápida",
      firstName: "Nombre",
      lastName: "Apellido",
      phone: "Teléfono",
      email: "Correo",
      message: "Mensaje",
      propertyType: "Tipo de propiedad",
      damageType: "Tipo de daño",
      placeholderFirst: "Nombre",
      placeholderLast: "Apellido",
      placeholderPhone: "Teléfono",
      placeholderEmail: "Correo electrónico",
      placeholderMessage: "Describe tu daño",
      placeholderPropertyType: "Selecciona tipo de propiedad",
      placeholderDamageType: "Selecciona tipo de daño",
      propertyTypes: [
        { value: "residential", label: "Residencial" },
        { value: "commercial", label: "Comercial" },
        { value: "condo", label: "Condominio/Apartamento" },
        { value: "vacation", label: "Casa de vacaciones" },
        { value: "other", label: "Otro" },
      ],
      damageTypes: [
        { value: "water", label: "Daños por agua" },
        { value: "storm", label: "Tormenta/Huracán" },
        { value: "fire", label: "Incendio/Humo" },
        { value: "flood", label: "Inundación" },
        { value: "mold", label: "Moho" },
        { value: "wind", label: "Daños por viento" },
        { value: "hail", label: "Daños por granizo" },
        { value: "other", label: "Otro daño" },
      ],
      submit: "Solicitar inspección",
      sending: "Enviando...",
      privacy:
        "Tu información está protegida con estándares de seguridad. No compartimos tus datos.",
      success: "¡Gracias! Tu solicitud fue enviada. Te contactaremos pronto.",
      error: "Ocurrió un error. Llama al +1 (407) 358-4589 o escribe a info@crclaimsflorida.com.",
    },
    footer: {
      ctaTitle: "¿Listo para comenzar?",
      ctaBody:
        "CR Claims Resolution te ayuda a manejar tu reclamo con confianza. Atendemos a propietarios en Florida. Contáctanos para tu inspección gratuita.",
      ctaButton: "Agenda tu inspección gratis",
      about:
        "Ajustadores públicos de confianza en Florida que ayudan a propietarios a recuperar el valor total de sus reclamos.",
      claims: "Reclamos",
      services: "Servicios",
      contact: "Contacto",
      startClaim: "Iniciar reclamo",
      servingState: "Atendemos propietarios en todo Florida",
      servingLocal: "Orlando y Florida Central con cita previa",
      copyright: "(c) 2026 Claims Resolution, LLC. Todos los derechos reservados. Licencia W963358",
      legal:
        "Los servicios de ajustador público están sujetos a la ley de Florida, incluyendo restricciones de solicitud y límites de honorarios en emergencias.",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
    },
    emergency: {
      text: "Respuesta de emergencia disponible - servicio 24/7",
    },
    floating: {
      callNow: "Llama ahora: +1 (407) 358-4589",
    },
    scrollTop: "Volver arriba",
  },
} as const;
