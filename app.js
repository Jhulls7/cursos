(() => {
  'use strict';

  const STORAGE_KEY = 'ruta-18-dias-progress-v1';
  const courseColors = { metodologia: '#22d3ee', riesgos: '#f59e0b', modelado: '#a3e635' };

  const courses = {
    metodologia: {
      id: 'metodologia', code: 'IS-481', name: 'Metodología de la Investigación Científica', short: 'Metodología', color: courseColors.metodologia,
      exam: 'Examen final + anteproyecto', weight: 'EF 30% · TS 40%',
      summary: 'Defender una investigación de principio a fin: problema, objetivos, marco teórico, diseño, análisis y redacción científica.',
      localNote: 'Sílabo 2026-I incluido en el RAR. La secuencia del curso se conserva y se comprime para examen.',
      fit: [
        ['01', 'Fundamentos y método', 'Ciencia, ontología, gnoseología, epistemología, lógica, ética y métodos cualitativo/cuantitativo.'],
        ['02', 'Problema y objetivos', 'Elección del tema, relevancia, factibilidad, pregunta general/específicas, objetivos y justificación.'],
        ['03', 'Marco y variables', 'Fuentes, estado del arte, marco teórico, hipótesis, variables y operacionalización.'],
        ['04', 'Diseño y muestra', 'Experimental/no experimental, población, muestra, muestreo, técnicas, instrumentos, validez y confiabilidad.'],
        ['05', 'Cierre científico', 'Procesamiento, análisis, aspectos administrativos, DSR, SLR, investigación-acción, redacción, resultados e integridad.']
      ],
      checklist: [
        'Explico la diferencia entre conocimiento científico, ciencia, método y metodología con un ejemplo en Ingeniería de Sistemas.',
        'Convierto un tema amplio en problema general, problemas específicos y objetivos alineados.',
        'Defiendo la justificación teórica, práctica, metodológica y social sin repetir frases vacías.',
        'Relaciono tipo, nivel, enfoque, diseño, población, muestra, técnica e instrumento.',
        'Construyo una matriz de operacionalización: variable, dimensión, indicador, ítem y escala.',
        'Distingo validez de confiabilidad y propongo cómo evidenciar ambas.',
        'Comparo DSR, SLR, estudio de caso e investigación-acción y sé cuándo conviene cada una.',
        'Interpreto resultados, redacto conclusiones y reconozco limitaciones sin inventar datos.'
      ],
      materials: [
        ['Sílabo IS481 2026-I', 'materiales/metodologia/Silabo_IS481_Final.pdf', 'PDF local'],
        ['Semanas 01–03 · bases', 'materiales/metodologia/Semana01.pdf', 'PDF local'],
        ['Semanas 04–06 · perfil', 'materiales/metodologia/Semana04_Eleccion_del_tema.pdf', 'PDF local'],
        ['Semana 07 y 09 · diseño e instrumentos', 'materiales/metodologia/Semana07_Diseno_Poblacion_Muestra.pdf', 'PDF local'],
        ['Semanas 10–12 · análisis y redacción', 'materiales/metodologia/Semana10_Procesamiento_analisis_admin.pdf', 'PDF local']
      ],
      videos: [
        ['Planteamiento del problema', 'Explicación práctica para formular problema y objetivos.', 'https://www.youtube.com/watch?v=3RxG9f-nE90'],
        ['Búsqueda por tema: hipótesis y variables', 'Usa esta búsqueda solo para resolver la duda puntual y vuelve a tu matriz.', 'https://www.youtube.com/results?search_query=hip%C3%B3tesis+variables+metodolog%C3%ADa+de+la+investigaci%C3%B3n']
      ]
    },
    riesgos: {
      id: 'riesgos', code: 'IS-487', name: 'Gestión de Riesgos y Seguridad TI', short: 'Gestión de riesgos', color: courseColors.riesgos,
      exam: 'EP1 25% · EF 30% · PL 20% · TF 25%', weight: '4 unidades · teoría + laboratorio',
      summary: 'Pasar de principios de seguridad a un plan integral: riesgo, controles, inteligencia, vulnerabilidades, pentesting y respuesta.',
      localNote: 'Sílabo 2026 con docente sin completar en el documento. El enfoque de laboratorio exige practicar solo en entornos propios o autorizados.',
      fit: [
        ['01', 'Fundamentos, gobierno y normativa', 'CIA, amenazas actuales, Zero Trust, IAM, NIST CSF 2.0, CIS Controls, Ley 29733 e ISO/IEC 27001:2022.'],
        ['02', 'Riesgo, OSINT y amenazas', 'ISO 31000, matrices, MAGERIT/OCTAVE/FAIR, tratamiento, MITRE ATT&CK, OSINT y ciberdelitos con IA.'],
        ['03', 'Redes, cloud y aplicaciones', 'Firewall, DMZ, IDS/IPS, TLS/VPN/PKI, OWASP Top 10, APIs, responsabilidad compartida y DevSecOps.'],
        ['04', 'Pentesting y respuesta', 'PTES/OWASP Testing, reconocimiento, enumeración, explotación, Wazuh/SIEM, IRP, BCP/DRP e IA defensiva.']
      ],
      checklist: [
        'Explico CIA y conecto cada pilar con una amenaza, un control y una evidencia.',
        'Comparo ISO 27001, NIST CSF 2.0 y CIS Controls sin tratarlos como sinónimos.',
        'Construyo una matriz con activo, amenaza, vulnerabilidad, probabilidad, impacto, nivel y tratamiento.',
        'Uso el ciclo de Threat Intelligence y mapeo una conducta a táctica/técnica de MITRE ATT&CK.',
        'Diferencio firewall, IDS/IPS, honeypot, SIEM, XDR, SAST, DAST y SCA.',
        'Reconozco A01, A02, A03, A05, A07, A08, A09 y A10 de OWASP Top 10 con un ejemplo.',
        'Describo un pentest por fases y redacto hallazgo, evidencia, impacto, severidad y remediación.',
        'Esquematizo detección, contención, erradicación, recuperación y lecciones aprendidas.'
      ],
      materials: [
        ['Sílabo IS487 2026', 'materiales/riesgos/SILABO-IS487-2026.docx', 'DOCX local'],
        ['Capítulos 1–5 · base de gestión', 'materiales/riesgos/Capitulo1_Riesgos.pdf', 'PDF local'],
        ['Semana 6 · era cuantitativa', 'materiales/riesgos/Capitulo6_Cuantitativa.pdf', 'PDF local'],
        ['Semana 7 · MITRE ATT&CK', 'materiales/riesgos/MITRE-SEM7.pdf', 'PDF local'],
        ['Laboratorios 6–8', 'materiales/riesgos/Laboratorio6.pdf', 'PDF local']
      ],
      videos: [
        ['NIST CSF 2.0', 'Visión general en español. Úsalo para ordenar Govern, Identify, Protect, Detect, Respond y Recover.', 'https://www.youtube.com/watch?v=gC_JicANGDg'],
        ['OWASP Top 10 con Juice Shop', 'Práctica guiada en entorno vulnerable; no lo uses contra sistemas ajenos.', 'https://www.youtube.com/watch?v=TS5B19dg1ak']
      ],
      securityNote: 'Pentesting, escaneo y explotación solo dentro de Kali/Metasploitable, Juice Shop, DVWA u otros laboratorios propios y con autorización explícita.'
    },
    modelado: {
      id: 'modelado', code: 'IS-381', name: 'Modelamiento de Datos', short: 'Modelado de datos', color: courseColors.modelado,
      exam: 'DER + modelo relacional + normalización + SQL', weight: 'Ruta reconstruida desde prácticas',
      summary: 'Resolver un enunciado a mano: identificar entidades, cardinalidades, tablas, PK/FK, dependencias, 3FN, álgebra y consultas SQL.',
      localNote: 'No aparece un sílabo formal dentro del RAR. Esta ficha se apoya en semanas, prácticas, exámenes y el currículo 2018 de la UNSCH.',
      fit: [
        ['01', 'Base conceptual', 'Dato, información, modelo, BD, SGBD, modelo conceptual/lógico/físico, esquema e instancia.'],
        ['02', 'DER y cardinalidades', 'Entidad, atributo, relación, atributos compuestos/multivaluados/derivados, binarias, recursivas, ternarias e ISA.'],
        ['03', 'Paso a tablas', 'Reglas para 1:1, 1:N, N:M, relaciones ternarias, especialización y claves primarias/foráneas.'],
        ['04', 'Normalización', 'Dependencias funcionales, dependencia transitiva, 1FN, 2FN, 3FN, integridad y justificación de cada separación.'],
        ['05', 'Álgebra y SQL', 'Selección, proyección, unión, diferencia, producto cartesiano, join, división, SELECT, WHERE, JOIN y ORDER BY.']
      ],
      checklist: [
        'Distingo dato, información, modelo, esquema, instancia, BD y SGBD con ejemplos.',
        'Extraigo entidades, atributos y relaciones desde un enunciado sin convertir cada sustantivo en tabla.',
        'Determino cardinalidad y participación y explico la regla de negocio que la sustenta.',
        'Transformo 1:1, 1:N, N:M, ternaria y generalización/especialización a tablas.',
        'Marco PK, FK, claves compuestas e integridad referencial en el esquema resultante.',
        'Normalizo una relación hasta 3FN y escribo por qué cada dependencia deja de estar mal ubicada.',
        'Resuelvo selección, proyección, unión, diferencia, producto cartesiano y join en álgebra relacional.',
        'Paso la expresión a SQL y resuelvo consultas con SELECT, WHERE, JOIN, ORDER BY y cálculos.'
      ],
      materials: [
        ['Semana 01 · fundamentos', 'materiales/modelado/Semana01.pdf', 'PDF local'],
        ['Semana 02–03 · DER', 'materiales/modelado/Semana02.docx', 'DOCX local'],
        ['Semana 04 · mapeo a tablas', 'materiales/modelado/Semana04.pdf', 'PDF local'],
        ['Práctica · normalización', 'materiales/modelado/Practica_Normalizacion.pdf', 'PDF local'],
        ['Semana 07 · álgebra relacional', 'materiales/modelado/Semana07_Algebra_Relacional.pdf', 'PDF local'],
        ['Examen parcial · tipo de preguntas', 'materiales/modelado/Primer_Examen_A.pdf', 'PDF local']
      ],
      videos: [
        ['Del entidad-relación al modelo relacional', 'Ejemplo completo para practicar el paso del diagrama a tablas.', 'https://www.youtube.com/watch?v=i5c6oREVRFo'],
        ['Normalización 1FN, 2FN y 3FN', 'Úsalo después de entender PK, dependencias funcionales y claves compuestas.', 'https://www.youtube.com/watch?v=m7kpSO6kqY8'],
        ['Álgebra relacional: selección y proyección', 'Primer video para dominar la lógica de las consultas antes de SQL.', 'https://www.youtube.com/watch?v=4xKbMxZaJHw']
      ]
    }
  };

  const route = [
    ['01', 'metodologia', 'Mapa del examen', 'Lee el sílabo y arma una hoja con método, tipos, niveles, problema, diseño y cierre.', 'Resumen de una página'],
    ['02', 'metodologia', 'Problema y objetivos', 'Redacta un tema acotado, pregunta general, 3 específicas y objetivos alineados.', 'Perfil mínimo'],
    ['03', 'metodologia', 'Marco, hipótesis y variables', 'Construye una matriz de variables con dimensiones, indicadores e instrumentos.', 'Matriz de operacionalización'],
    ['04', 'metodologia', 'Diseño y muestra', 'Resuelve 4 casos: enfoque, diseño, población, muestra y técnica.', 'Tabla de decisiones'],
    ['05', 'metodologia', 'Instrumentos y metodologías IS', 'Compara validez/confiabilidad y DSR, SLR, estudio de caso e investigación-acción.', 'Cuadro comparativo'],
    ['06', 'metodologia', 'Simulacro de metodología', 'Responde sin material y corrige por alineación, precisión, ética y redacción.', 'Simulacro corregido'],
    ['07', 'riesgos', 'CIA, gobierno y Zero Trust', 'Explica los pilares, IAM, MFA, gobierno y el principio nunca confiar, siempre verificar.', 'Mapa conceptual'],
    ['08', 'riesgos', 'NIST, ISO y CIS', 'Compara función, propósito y evidencia de NIST CSF 2.0, ISO 27001 y CIS Controls.', 'Matriz de marcos'],
    ['09', 'riesgos', 'Matriz y tratamiento de riesgos', 'Identifica activos, amenazas, vulnerabilidades, probabilidad, impacto y tratamiento.', 'Registro de riesgos'],
    ['10', 'riesgos', 'Threat Intelligence y MITRE', 'Usa OSINT con alcance limitado y traduce la conducta a táctica/técnica ATT&CK.', 'Ficha de amenaza'],
    ['11', 'riesgos', 'Redes, cloud y OWASP', 'Une firewall, IDS/IPS, TLS, responsabilidad compartida y OWASP Top 10.', 'Diagrama de arquitectura'],
    ['12', 'riesgos', 'Pentest, DevSecOps y SIEM', 'Ordena PTES, SAST/DAST/SCA, Wazuh y hallazgo técnico.', 'Reporte de hallazgo'],
    ['13', 'riesgos', 'Simulacro integral', 'Presenta un plan con riesgo, amenaza, control, evidencia y respuesta a incidente.', 'Plan integral'],
    ['14', 'modelado', 'Fundamentos y DER', 'Extrae entidades, atributos, relaciones y reglas de negocio desde un enunciado.', 'DER comentado'],
    ['15', 'modelado', 'Cardinalidades y tablas', 'Convierte 1:1, 1:N, N:M, ternarias e ISA; marca PK y FK.', 'Modelo relacional'],
    ['16', 'modelado', 'Normalización a 3FN', 'Resuelve factura, matrícula o video club y justifica cada separación.', 'Tablas en 3FN'],
    ['17', 'modelado', 'Álgebra y SQL', 'Practica selección, proyección, join y sus equivalentes SELECT/WHERE/JOIN.', 'Banco de consultas'],
    ['18', 'mixto', 'Tres mini-exámenes', '40 min por curso, corrección inmediata y última hoja de errores antes de rendir.', 'Hoja final de errores']
  ];

  /*
   * Esta capa es la diferencia entre una agenda y una tutoría. Cada sesión
   * traduce el sílabo/material local en una acción observable y separa:
   *  - syllabús: qué aparece en el documento entregado;
   *  - read/watch: apoyo local o fuente pública contrastada;
   *  - practice: qué debe producir el estudiante;
   *  - questions: recuperación activa, no lectura pasiva.
   */
  const lessonDays = [
    {
      day: '01', course: 'metodologia', title: 'Qué significa investigar',
      syllabus: 'Metodología · semanas 1–3: conocimiento, ciencia, método, enfoques, tipos y niveles.',
      objective: 'Distinguir conocimiento científico, método y metodología; luego clasificar una investigación de Sistemas.',
      teach: 'Investigar no es reunir datos al azar. Es formular una pregunta que pueda responderse con un camino justificable. La ciencia aporta conocimiento contrastable; el método es la secuencia de decisiones; la metodología explica por qué ese camino es adecuado. En un proyecto de software, “hacer una app” es una solución, no un problema de investigación. “¿Cómo cambia el tiempo de atención cuando se usa una app de recordatorios?” sí puede estudiarse.',
      watch: [['Fundamentos de metodología · problema y objetivos', 'https://www.youtube.com/watch?v=3RxG9f-nE90', 'Mira solo la parte que conecte tema, problema y objetivo; vuelve a clasificar tu caso.']],
      read: [['Sílabo IS481 2026-I', 'materiales/metodologia/Silabo_IS481_Final.pdf', 'Documento base local']],
      practice: 'Elige un tema de Ingeniería de Sistemas y escribe: fenómeno, población, variable principal, enfoque probable, tipo y nivel. Justifica cada elección en una línea.',
      deliverable: 'Ficha de clasificación de una investigación',
      questions: [
        { q: '¿Cuál es la diferencia más útil entre método y metodología?', options: ['El método es la secuencia; la metodología justifica y organiza las decisiones', 'Son palabras idénticas sin diferencia académica', 'La metodología es solo una lista de herramientas'], correct: 0, why: 'La metodología explica la lógica de las decisiones; el método es el camino operativo.' },
        { q: '¿Cuál es un problema de investigación mejor formulado?', options: ['Construir un sistema moderno', '¿Qué relación existe entre usabilidad y abandono en estudiantes de primer ciclo?', 'Usar inteligencia artificial porque es tendencia'], correct: 1, why: 'Tiene fenómeno, variables y población delimitables.' }
      ],
      prompt: 'Tómame el Día 01 de Metodología. Pídeme clasificar un tema de Ingeniería de Sistemas por enfoque, tipo, nivel y método. No me des la respuesta hasta que justifique cada decisión.'
    },
    {
      day: '02', course: 'metodologia', title: 'Problema, preguntas y objetivos',
      syllabus: 'Metodología · semanas 4–5: elección del tema, problema, preguntas, objetivos, justificación y delimitación.',
      objective: 'Convertir un tema amplio en una cadena alineada: problema → pregunta → objetivo → producto.',
      teach: 'La alineación evita que el proyecto diga una cosa y mida otra. La pregunta general debe expresar el problema; el objetivo general empieza con un verbo observable y responde a esa pregunta; los objetivos específicos son pasos necesarios, no una lista de actividades. Delimitar tiempo, espacio y población reduce promesas imposibles.',
      watch: [['Planteamiento del problema y objetivos', 'https://www.youtube.com/watch?v=3RxG9f-nE90', 'Contrasta el ejemplo del video con tu redacción, no lo copies.']],
      read: [['Semana 04 · elección del tema', 'materiales/metodologia/Semana04_Eleccion_del_tema.pdf', 'Guía local para pasar de tema a problema']],
      practice: 'Reescribe “sistema de inventario para mejorar la empresa” en una pregunta general, tres preguntas específicas, objetivo general, tres objetivos específicos y cuatro delimitaciones.',
      deliverable: 'Perfil mínimo de investigación alineado',
      questions: [
        { q: '¿Qué debe hacer un objetivo específico?', options: ['Ser un paso necesario para responder la pregunta general', 'Repetir el objetivo general con otras palabras', 'Describir únicamente el presupuesto'], correct: 0, why: 'Los objetivos específicos operacionalizan el objetivo general.' },
        { q: '¿Qué delimitación mejora más la viabilidad?', options: ['“Para todos los usuarios del mundo”', '“Estudiantes de primer ciclo de la escuela X durante 2026-I”', '“Un sistema muy completo”'], correct: 1, why: 'Una población, periodo y contexto concretos hacen verificable el estudio.' }
      ],
      prompt: 'Actúa como jurado del Día 02. Dame un tema amplio y evalúa mi problema, pregunta, objetivos, justificación y delimitaciones con una rúbrica de alineación.'
    },
    {
      day: '03', course: 'metodologia', title: 'Marco teórico, hipótesis y variables',
      syllabus: 'Metodología · semana 6: búsqueda académica, estado del arte, marco teórico, hipótesis y operacionalización.',
      objective: 'Pasar de leer fuentes a construir una matriz de variables que pueda medirse.',
      teach: 'El estado del arte no es un resumen de enlaces: compara qué se estudió, cómo se estudió y qué vacío queda. Una variable es una propiedad que puede tomar valores; una dimensión la organiza y un indicador la vuelve observable. La hipótesis propone una relación que luego debe contrastarse. Si la variable es “satisfacción”, un indicador puede ser la puntuación de una escala validada.',
      watch: [['Búsqueda sugerida: hipótesis y variables', 'https://www.youtube.com/results?search_query=hip%C3%B3tesis+variables+metodolog%C3%ADa+de+la+investigaci%C3%B3n', 'Elige una explicación breve y verifica términos contra tu sílabo.']],
      read: [['Sílabo · literatura y operacionalización', 'materiales/metodologia/Silabo_IS481_Final.pdf', 'Ubica semana 6 antes de trabajar']],
      practice: 'Construye una matriz con 2 variables, 2 dimensiones por variable, 2 indicadores por dimensión, técnica, instrumento y escala. Marca qué fuente respalda cada definición.',
      deliverable: 'Matriz de operacionalización',
      questions: [
        { q: '¿Qué convierte una variable en medible?', options: ['Un indicador observable y una forma de recoger evidencia', 'Un nombre atractivo', 'Una cita bibliográfica sin definición'], correct: 0, why: 'La operacionalización conecta el concepto con evidencia y medición.' },
        { q: '¿Qué diferencia al estado del arte?', options: ['Enumera enlaces sin compararlos', 'Analiza antecedentes y muestra un vacío o justificación', 'Solo contiene definiciones de diccionario'], correct: 1, why: 'Su valor está en comparar antecedentes y ubicar la contribución.' }
      ],
      prompt: 'Examina mi matriz del Día 03. Revisa si variables, dimensiones, indicadores, técnica, instrumento e hipótesis están alineados y hazme tres repreguntas.'
    },
    {
      day: '04', course: 'metodologia', title: 'Diseño, población, muestra e instrumentos',
      syllabus: 'Metodología · semanas 7 y 9: diseño, población, muestra, técnicas, instrumentos, validez y confiabilidad.',
      objective: 'Elegir el diseño y la evidencia sin confundir población, muestra, técnica e instrumento.',
      teach: 'La población es el conjunto al que quieres referirte; la muestra es la parte observada. La técnica es el modo de recoger datos, por ejemplo encuesta u observación; el instrumento es el artefacto concreto, como cuestionario o guía. Validez pregunta si mides lo que dices medir; confiabilidad, si la medición es consistente.',
      watch: [['Búsqueda sugerida: validez y confiabilidad', 'https://www.youtube.com/results?search_query=validez+y+confiabilidad+instrumentos+investigaci%C3%B3n', 'Usa el video para aclarar la diferencia y vuelve a los casos.']],
      read: [['Semana 07 · diseño, población y muestra', 'materiales/metodologia/Semana07_Diseno_Poblacion_Muestra.pdf', 'Material local priorizado']],
      practice: 'Resuelve cuatro casos en una tabla: enfoque, diseño, población, muestra, técnica, instrumento, evidencia de validez y evidencia de confiabilidad.',
      deliverable: 'Tabla de decisiones metodológicas',
      questions: [
        { q: '¿Qué es una muestra?', options: ['La totalidad del universo', 'Un subconjunto seleccionado de la población', 'El instrumento de encuesta'], correct: 1, why: 'La muestra representa la parte observada de la población definida.' },
        { q: '¿Qué pregunta responde la validez?', options: ['¿El instrumento mide el constructo que afirma medir?', '¿Cuánto cuesta imprimirlo?', '¿Qué tan rápido se llena?'], correct: 0, why: 'Validez es correspondencia entre constructo y medición.' }
      ],
      prompt: 'Hazme cuatro casos de diseño y muestreo como examen. Cambia la población y el objetivo en cada caso; corrige mis decisiones con precisión.'
    },
    {
      day: '05', course: 'metodologia', title: 'Metodologías de Sistemas y escritura',
      syllabus: 'Metodología · semanas 10–15: análisis, DSR, investigación-acción, estudio de caso, SLR, resultados, ética y publicación.',
      objective: 'Elegir una metodología propia de Sistemas y cerrar un argumento científico sin inventar resultados.',
      teach: 'Design Science Research crea y evalúa un artefacto para resolver un problema; un estudio de caso analiza un fenómeno situado; una SLR sintetiza evidencia publicada con un protocolo; investigación-acción interviene y aprende con los participantes. No son etiquetas decorativas: cada una exige preguntas, evidencia y criterios de evaluación diferentes. Resultados reporta hallazgos; discusión los interpreta; conclusión responde objetivos; limitaciones acotan lo que puede afirmarse.',
      watch: [['Búsqueda sugerida: Design Science Research y revisión sistemática', 'https://www.youtube.com/results?search_query=Design+Science+Research+revisi%C3%B3n+sistem%C3%A1tica+literatura', 'Elige una introducción y compárala con el sílabo.']],
      read: [['Semana 10 · procesamiento, análisis y administración', 'materiales/metodologia/Semana10_Procesamiento_analisis_admin.pdf', 'Material local para el cierre del proyecto']],
      practice: 'Compara DSR, estudio de caso, SLR e investigación-acción en una tabla con propósito, unidad de análisis, evidencia, producto y riesgo de error.',
      deliverable: 'Cuadro comparativo + párrafo de discusión',
      questions: [
        { q: '¿Qué metodología encaja mejor si construyes y evalúas un prototipo?', options: ['DSR', 'SLR pura', 'Solo una encuesta descriptiva'], correct: 0, why: 'DSR se centra en diseñar y evaluar un artefacto.' },
        { q: '¿Qué debe hacer una conclusión?', options: ['Responder objetivos con base en resultados', 'Agregar datos que nunca se recogieron', 'Repetir todo el marco teórico'], correct: 0, why: 'Una conclusión debe ser trazable a evidencia y objetivos.' }
      ],
      prompt: 'Evalúa mi cuadro del Día 05 como docente. Pídeme defender la metodología elegida y detectar una afirmación que exceda mis datos.'
    },
    {
      day: '06', course: 'metodologia', title: 'Mini-examen de metodología',
      syllabus: 'Metodología · examen parcial/final: fundamentos, diseño, análisis y redacción científica.',
      objective: 'Resolver sin apuntes y localizar el error que más puntos te costaría.',
      teach: 'Hoy no se estudia contenido nuevo. Se simula el razonamiento del examen: delimitar un problema, alinear objetivos, elegir diseño/evidencia y defender la metodología. Una respuesta completa siempre incluye decisión, justificación y consecuencia práctica.',
      watch: [['Sílabo IS481 2026-I', 'materiales/metodologia/Silabo_IS481_Final.pdf', 'Usa el documento como lista de verificación, no como lectura lineal.']],
      read: [['Semanas 01–12 de Metodología', 'materiales/metodologia/Semana01.pdf', 'Repaso local de fundamentos']],
      practice: 'En 45 minutos: resuelve un caso completo en una hoja. En 15 minutos: marca cada afirmación sin evidencia, cada objetivo desalineado y cada término usado como sinónimo.',
      deliverable: 'Simulacro corregido con hoja de errores',
      questions: [
        { q: 'Ante una respuesta dudosa, ¿qué debes añadir?', options: ['La justificación y la evidencia que la respalda', 'Más adjetivos', 'Una cita aleatoria'], correct: 0, why: 'El examen valora el razonamiento trazable, no la extensión.' },
        { q: '¿Qué debe guiar la corrección?', options: ['Alineación problema-pregunta-objetivos-método-evidencia', 'La cantidad de páginas', 'El número de colores del esquema'], correct: 0, why: 'La alineación es el hilo conductor del sílabo.' }
      ],
      prompt: 'Adminístrame un mini-examen de Metodología de 5 preguntas. No me ayudes durante la respuesta; al final dame nota, errores por categoría y una repregunta de recuperación.'
    },
    {
      day: '07', course: 'riesgos', title: 'CIA, gobierno, IAM y Zero Trust',
      syllabus: 'Riesgos · unidad 1: confidencialidad, integridad, disponibilidad, amenazas, Zero Trust e IAM.',
      objective: 'Traducir cada pilar de seguridad a una amenaza, control y evidencia.',
      teach: 'Confidencialidad evita acceso no autorizado; integridad evita cambios indebidos; disponibilidad mantiene el servicio utilizable. Un mismo incidente puede afectar los tres. IAM controla quién puede hacer qué; MFA agrega evidencia de identidad; Zero Trust no asume confianza por estar dentro de la red: verifica identidad, dispositivo, contexto y mínimo privilegio en cada acceso.',
      watch: [['Búsqueda sugerida: CIA triad e IAM', 'https://www.youtube.com/results?search_query=CIA+triad+IAM+Zero+Trust+espa%C3%B1ol', 'Usa un video introductorio y vuelve al caso de la tabla.']],
      read: [['Sílabo IS487 2026', 'materiales/riesgos/SILABO-IS487-2026.docx', 'Unidades y resultados esperados']],
      practice: 'Para un sistema de notas universitarias, registra 5 activos y por cada uno: pilar afectado, amenaza, control preventivo/detectivo y evidencia verificable.',
      deliverable: 'Mapa CIA → riesgo → control',
      questions: [
        { q: '¿Qué principio expresa Zero Trust?', options: ['Verificar explícitamente y usar mínimo privilegio', 'Confiar en todo usuario interno', 'Eliminar todos los controles'], correct: 0, why: 'Zero Trust reemplaza confianza implícita por verificación continua.' },
        { q: 'Un cambio no autorizado en una nota afecta principalmente a…', options: ['Integridad', 'Disponibilidad', 'Solo usabilidad'], correct: 0, why: 'El dato fue alterado de forma indebida.' }
      ],
      prompt: 'Examíname en CIA, IAM y Zero Trust. Dame un activo y exige que proponga amenaza, control, evidencia y residual risk.'
    },
    {
      day: '08', course: 'riesgos', title: 'NIST CSF, ISO 27001 y CIS Controls',
      syllabus: 'Riesgos · unidad 1: NIST CSF 2.0, CIS Controls, ISO/IEC 27001:2022 y normativa.',
      objective: 'Comparar marcos por propósito y no memorizar sus nombres como si fueran equivalentes.',
      teach: 'NIST CSF 2.0 organiza resultados de ciberseguridad en Govern, Identify, Protect, Detect, Respond y Recover. ISO/IEC 27001 define requisitos para un sistema de gestión certificable; CIS Controls ofrece salvaguardas priorizadas y accionables. Puedes alinearlos, pero no son el mismo producto. En examen, di qué pregunta responde cada marco y qué evidencia producirías.',
      watch: [['NIST CSF 2.0 en español', 'https://www.youtube.com/watch?v=gC_JicANGDg', 'Observa cómo se ordenan las seis funciones y toma notas de su uso.']],
      read: [['Guía oficial NIST CSF 2.0 en español', 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-resource-overview-guide-spanish-translation', 'Fuente primaria vigente']],
      practice: 'Construye una matriz de 6 filas: una función NIST, un requisito de gobierno/SGSI, un control CIS equivalente aproximado y una evidencia que pedirías en auditoría.',
      deliverable: 'Matriz comparativa de marcos',
      questions: [
        { q: '¿Qué distingue mejor a NIST CSF de ISO 27001?', options: ['CSF organiza resultados; ISO define requisitos de un SGSI', 'NIST es una base de datos y ISO un firewall', 'Son exactamente la misma norma'], correct: 0, why: 'Pueden alinearse, pero tienen propósito y estructura diferentes.' },
        { q: '¿Qué función NIST contiene recuperación del servicio?', options: ['Recover', 'Protect', 'Govern'], correct: 0, why: 'Recover reúne actividades para restaurar capacidades y comunicar la recuperación.' }
      ],
      prompt: 'Hazme comparar NIST CSF 2.0, ISO 27001 y CIS Controls con un caso de auditoría. Penaliza si los trato como sinónimos.'
    },
    {
      day: '09', course: 'riesgos', title: 'Matriz, tratamiento y riesgo residual',
      syllabus: 'Riesgos · unidad 2: ISO 31000, matrices, MAGERIT/OCTAVE/FAIR y tratamiento.',
      objective: 'Construir un registro de riesgos defendible y elegir tratamiento con criterio.',
      teach: 'Riesgo no es la amenaza sola: combina la posibilidad de que un evento ocurra con su impacto sobre objetivos. Un registro útil separa activo, amenaza, vulnerabilidad, causa, consecuencia, probabilidad, impacto, nivel inherente, control y riesgo residual. Tratar significa evitar, reducir, transferir o aceptar conscientemente, dejando responsable y fecha.',
      watch: [['Búsqueda sugerida: ISO 31000 matriz de riesgos', 'https://www.youtube.com/results?search_query=ISO+31000+matriz+de+riesgos+probabilidad+impacto', 'Usa un ejemplo y comprueba que el criterio de escala sea explícito.']],
      read: [['Capítulos de gestión de riesgos', 'materiales/riesgos/Capitulo1_Riesgos.pdf', 'Base local para conceptos y registro']],
      practice: 'Elabora 6 riesgos para una API de pagos. Define escalas 1–5, calcula nivel, propone tratamiento, control, dueño, evidencia y riesgo residual.',
      deliverable: 'Registro de riesgos priorizado',
      questions: [
        { q: '¿Qué es riesgo residual?', options: ['El que queda después de aplicar controles', 'La amenaza antes de identificarla', 'El costo del proyecto'], correct: 0, why: 'El riesgo residual permite decidir si el tratamiento fue suficiente.' },
        { q: '¿Qué falta si un registro solo tiene amenaza e impacto?', options: ['Probabilidad, vulnerabilidad, control y tratamiento', 'Más colores', 'El nombre de la empresa únicamente'], correct: 0, why: 'Sin esos campos no puedes priorizar ni gestionar el riesgo.' }
      ],
      prompt: 'Dame un escenario y pídeme construir una matriz de riesgos. Revisa mis escalas, cálculos, tratamiento y riesgo residual como si fueras auditor.'
    },
    {
      day: '10', course: 'riesgos', title: 'OSINT, Threat Intelligence y MITRE',
      syllabus: 'Riesgos · unidad 2: OSINT, MITRE ATT&CK, ciberdelitos con IA y análisis de amenazas.',
      objective: 'Separar inteligencia útil de una colección de enlaces y mapear conducta a ATT&CK.',
      teach: 'OSINT es información públicamente disponible convertida en inteligencia mediante una pregunta, alcance, validación y análisis. MITRE ATT&CK ayuda a describir el comportamiento adversario: táctica explica el objetivo, técnica explica cómo se logra. No confundas indicador con conclusión. Registra fuente, fecha, confiabilidad y qué decisión habilita.',
      watch: [['OSINT Framework', 'https://osintframework.com/', 'Explora el árbol como índice; no recolectes datos personales ni salgas del alcance autorizado.']],
      read: [['MITRE ATT&CK · tácticas Enterprise', 'https://attack.mitre.org/tactics/enterprise/', 'Fuente primaria para clasificar la conducta']],
      practice: 'Usa un dominio de laboratorio o una organización ficticia. Documenta 5 fuentes públicas, valida 2 hallazgos y mapea una conducta a táctica y técnica MITRE. No hagas escaneo.',
      deliverable: 'Ficha de inteligencia con trazabilidad',
      questions: [
        { q: '¿Qué agrega valor a un resultado OSINT?', options: ['Pregunta, alcance, validación, fuente y decisión', 'Una lista larga de buscadores', 'Publicar datos personales'], correct: 0, why: 'La inteligencia debe ser reproducible y útil para una decisión.' },
        { q: 'En ATT&CK, una táctica responde principalmente a…', options: ['Qué objetivo persigue el adversario', 'Qué color tiene el reporte', 'Qué lenguaje de programación usa'], correct: 0, why: 'La táctica expresa el objetivo táctico; la técnica describe el método.' }
      ],
      prompt: 'Evalúa mi ficha OSINT del Día 10. Mantén el ejercicio en un dominio propio/ficticio y pregúntame por alcance, fuente, confiabilidad, táctica y técnica.'
    },
    {
      day: '11', course: 'riesgos', title: 'Redes, cloud y OWASP',
      syllabus: 'Riesgos · unidad 3: firewall, DMZ, IDS/IPS, TLS/VPN/PKI, OWASP Top 10, APIs y cloud.',
      objective: 'Diseñar una arquitectura mínima y conectar vulnerabilidad con control y evidencia.',
      teach: 'Un firewall controla flujos; una DMZ separa servicios expuestos; IDS alerta e IPS puede bloquear; TLS protege comunicación y PKI sostiene confianza mediante certificados. En cloud, la responsabilidad se comparte: el proveedor protege parte de la infraestructura y tú configuras identidades, datos y aplicaciones según el servicio. OWASP Top 10 sirve para razonar riesgos web, no para marcar casillas sin evidencia.',
      watch: [['OWASP Juice Shop · práctica guiada', 'https://www.youtube.com/watch?v=TS5B19dg1ak', 'Solo en Juice Shop local o autorizado; mira cómo se documenta el hallazgo.']],
      read: [['OWASP Top 10:2021', 'https://owasp.org/Top10/2021/', 'Lista oficial del sílabo']],
      practice: 'Dibuja una arquitectura con internet, firewall, DMZ, API, base de datos, IDS/IPS y backup. Añade dos riesgos OWASP y su control/evidencia.',
      deliverable: 'Diagrama de arquitectura defendida',
      questions: [
        { q: '¿Qué diferencia básica hay entre IDS e IPS?', options: ['IDS detecta/alerta; IPS puede prevenir o bloquear en línea', 'IDS cifra y IPS hace copias', 'Son idénticos por definición'], correct: 0, why: 'La prevención/bloqueo en línea distingue al IPS.' },
        { q: 'En un servicio cloud, ¿quién configura generalmente IAM de la aplicación?', options: ['El cliente según el modelo de servicio', 'Siempre el proveedor sin excepción', 'Nadie'], correct: 0, why: 'La responsabilidad se comparte y el cliente conserva configuraciones críticas.' }
      ],
      prompt: 'Actúa como revisor de arquitectura del Día 11. Pregúntame por cada componente, el riesgo que cubre y la evidencia de que el control funciona.'
    },
    {
      day: '12', course: 'riesgos', title: 'Pentest, DevSecOps, SIEM y respuesta',
      syllabus: 'Riesgos · unidad 4: PTES/OWASP Testing, reconocimiento, reporte, SAST/DAST/SCA, SIEM/SOAR/XDR e IRP.',
      objective: 'Ordenar una evaluación autorizada y redactar un hallazgo accionable.',
      teach: 'Un pentest profesional empieza con autorización y alcance, continúa con reconocimiento, análisis, validación controlada y reporte; no es “probar herramientas” sin permiso. SAST analiza código, DAST el sistema en ejecución y SCA dependencias. SIEM centraliza y correlaciona eventos; SOAR automatiza respuestas; un IRP coordina detección, contención, erradicación, recuperación y lecciones aprendidas.',
      watch: [['OWASP Juice Shop · reporte de hallazgo', 'https://www.youtube.com/watch?v=TS5B19dg1ak', 'Úsalo únicamente en laboratorio propio y observa la evidencia.']],
      read: [['Laboratorios 6–8', 'materiales/riesgos/Laboratorio6.pdf', 'Material local para la parte práctica']],
      practice: 'Redacta un hallazgo ficticio de Juice Shop: título, activo, evidencia no destructiva, impacto, severidad, reproducción segura, remediación y retest.',
      deliverable: 'Reporte técnico de un hallazgo',
      questions: [
        { q: '¿Cuál es el primer requisito de un pentest?', options: ['Autorización, alcance y reglas de compromiso', 'Escanear cualquier IP pública', 'Borrar evidencia'], correct: 0, why: 'Sin autorización y alcance, la actividad no es una práctica legítima.' },
        { q: '¿Qué hace SCA?', options: ['Analiza dependencias y sus vulnerabilidades/licencias', 'Prueba solo la interfaz visual', 'Reemplaza el SIEM'], correct: 0, why: 'SCA se enfoca en componentes de terceros.' }
      ],
      prompt: 'Corrige mi hallazgo del Día 12 con una rúbrica de severidad, evidencia, impacto, reproducibilidad, remediación y seguridad del laboratorio.'
    },
    {
      day: '13', course: 'riesgos', title: 'Mini-examen integral de riesgos',
      syllabus: 'Riesgos · unidades 1–4: gobierno, riesgo, controles, seguridad técnica y respuesta.',
      objective: 'Integrar una cadena completa: activo → amenaza → riesgo → control → evidencia → respuesta.',
      teach: 'Una respuesta madura no enumera tecnologías aisladas. Explica el contexto, prioriza el riesgo, elige controles proporcionales y define cómo sabrás que funcionan. Para un incidente, separa detección, contención, erradicación, recuperación y lecciones aprendidas; para continuidad, relaciona BCP/DRP con objetivos de negocio.',
      watch: [['NIST CSF 2.0 · guía oficial en español', 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-resource-overview-guide-spanish-translation', 'Úsala para ordenar la respuesta y recuperación.']],
      read: [['Sílabo IS487 2026', 'materiales/riesgos/SILABO-IS487-2026.docx', 'Revisa las cuatro unidades y su evaluación']],
      practice: 'En 50 minutos resuelve un caso de ransomware en una pyme: matriz, controles, evidencia, plan de incidente, continuidad y comunicación ejecutiva.',
      deliverable: 'Plan integral de riesgos y respuesta',
      questions: [
        { q: '¿Qué diferencia hay entre contención y erradicación?', options: ['Contener limita el daño; erradicar elimina la causa/persistencia', 'Son sinónimos exactos', 'Contener es publicar el informe'], correct: 0, why: 'Primero se limita el impacto; después se elimina la causa y se limpia el entorno.' },
        { q: '¿Qué hace fuerte una respuesta de seguridad?', options: ['Conecta riesgo, control, evidencia y decisión', 'Menciona muchas herramientas sin contexto', 'Oculta las limitaciones'], correct: 0, why: 'La trazabilidad permite priorizar y verificar.' }
      ],
      prompt: 'Adminístrame el mini-examen del Día 13 con un caso de ransomware. Exige que justifique cada control y luego califica como docente de Gestión de Riesgos.'
    },
    {
      day: '14', course: 'modelado', title: 'Fundamentos y diagrama entidad-relación',
      syllabus: 'Modelado · semanas 1–3 reconstruidas: dato, BD, SGBD, modelo conceptual, entidades, atributos y relaciones.',
      objective: 'Leer un enunciado y separar entidad, atributo, relación y regla de negocio.',
      teach: 'Una entidad es algo distinguible del dominio; un atributo describe esa entidad; una relación conecta ocurrencias y tiene cardinalidad. No todo sustantivo merece tabla: “fecha de préstamo” puede ser atributo de una relación, mientras “Libro” y “Socio” tienen identidad propia. Empieza por reglas: un socio puede realizar muchos préstamos; cada préstamo pertenece a un socio.',
      watch: [['Del entidad-relación al modelo relacional', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'Mira el ejemplo completo después de intentar tu DER.']],
      read: [['Semana 02–03 · DER', 'materiales/modelado/Semana02.docx', 'Material local de entidades y relaciones']],
      practice: 'Caso biblioteca: socios, libros, autores, ejemplares y préstamos. Lista entidades, atributos, identificadores, relaciones, cardinalidades y dos reglas que el diagrama debe expresar.',
      deliverable: 'DER comentado a mano o digital',
      questions: [
        { q: 'En una biblioteca, ¿qué suele ser entidad?', options: ['Libro o Socio, porque tiene identidad y atributos propios', 'La palabra “muchos”', 'Cada adjetivo del enunciado'], correct: 0, why: 'Una entidad representa un objeto distinguible del dominio.' },
        { q: '¿Qué debes decidir antes de dibujar cardinalidades?', options: ['La regla de negocio que limita las ocurrencias', 'El color del diagrama', 'El motor SQL'], correct: 0, why: 'La cardinalidad se justifica por la regla del dominio.' }
      ],
      prompt: 'Examíname con un enunciado de biblioteca. No aceptes que convierta cada sustantivo en tabla; exige entidades, atributos, relaciones y cardinalidades justificadas.'
    },
    {
      day: '15', course: 'modelado', title: 'Cardinalidades, claves y tablas',
      syllabus: 'Modelado · semanas 3–4: binarias, recursivas, ternarias, ISA y conversión ER a relacional.',
      objective: 'Transformar el DER a tablas sin perder reglas ni integridad referencial.',
      teach: 'En 1:N, la FK suele ir en el lado N. En N:M necesitas una tabla asociativa cuya PK puede ser compuesta por ambas FKs y que además puede guardar atributos de la relación. En 1:1 eliges dónde ubicar la FK considerando participación y dependencia. Una relación ternaria no siempre se reemplaza por tres binarias: la combinación de las tres entidades puede ser la regla que importa.',
      watch: [['Del entidad-relación al modelo relacional', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'Pausa antes de cada transformación y hazla tú primero.']],
      read: [['Semana 04 · mapeo a tablas', 'materiales/modelado/Semana04.pdf', 'Reglas locales de conversión']],
      practice: 'Transforma un sistema de cursos: estudiante–matrícula–curso N:M, docente–curso 1:N y requisito recursivo curso–curso. Escribe tablas, PK, FK y restricciones.',
      deliverable: 'Modelo relacional con PK/FK',
      questions: [
        { q: '¿Cómo se representa normalmente una relación N:M?', options: ['Con una tabla asociativa con FKs de ambas entidades', 'Poniendo todas las filas en una sola columna', 'Eliminando una de las entidades'], correct: 0, why: 'La tabla asociativa resuelve la multiplicidad y conserva la relación.' },
        { q: 'En una relación 1:N, la FK suele ubicarse…', options: ['En el lado N', 'Siempre en el lado 1', 'En una tabla sin relación'], correct: 0, why: 'Cada fila del lado N referencia a una fila del lado 1.' }
      ],
      prompt: 'Dame un DER textual y evalúa mi transformación a tablas. Pregunta por PK, FK, N:M, relación recursiva y la restricción que se perdería si lo modelo mal.'
    },
    {
      day: '16', course: 'modelado', title: 'Dependencias y normalización hasta 3FN',
      syllabus: 'Modelado · semanas 5–6 reconstruidas: dependencias funcionales, 1FN, 2FN, 3FN e integridad.',
      objective: 'Detectar anomalías y descomponer una relación justificando cada paso.',
      teach: 'Una dependencia funcional X → Y significa que el valor de X determina un único Y. 1FN exige valores atómicos y sin grupos repetidos. 2FN elimina dependencias parciales de una clave compuesta. 3FN elimina dependencias transitivas de una clave. Ejemplo: DETALLE_FACTURA(nroFactura, codProducto, nombreProducto, cantidad). Si codProducto → nombreProducto, el nombre depende solo de parte de la clave compuesta; se separa PRODUCTO y DETALLE_FACTURA.',
      watch: [['Normalización 1FN, 2FN y 3FN', 'https://www.youtube.com/watch?v=m7kpSO6kqY8', 'Mira el procedimiento después de marcar dependencias en tu caso.']],
      read: [['Práctica de normalización', 'materiales/modelado/Practica_Normalizacion.pdf', 'Ejercicios locales priorizados']],
      practice: 'Normaliza hasta 3FN una relación VENTA(idVenta, fecha, idCliente, nombreCliente, idProducto, nombreProducto, precio, cantidad). Escribe dependencias, clave candidata, anomalías y tablas resultantes.',
      deliverable: 'Descomposición justificada a 3FN',
      questions: [
        { q: '¿Qué elimina principalmente la 2FN?', options: ['Dependencias parciales respecto de una clave compuesta', 'Todos los valores nulos', 'La necesidad de PK'], correct: 0, why: '2FN evita que un atributo no clave dependa solo de una parte de la clave.' },
        { q: 'Si idCliente → nombreCliente y una venta usa idCliente, el nombre es…', options: ['Dependencia transitiva si está junto a atributos determinados por idVenta', 'Una relación N:M', 'Una clave foránea obligatoria en toda tabla'], correct: 0, why: 'La determinación indirecta produce dependencia transitiva.' }
      ],
      prompt: 'Examíname en normalización con una tabla de ventas. Pídeme identificar claves y dependencias, detectar anomalías y justificar 1FN, 2FN y 3FN paso por paso.'
    },
    {
      day: '17', course: 'modelado', title: 'Álgebra relacional y SQL',
      syllabus: 'Modelado · semanas 7 y laboratorio: selección, proyección, joins, división y SELECT/WHERE/JOIN/ORDER BY.',
      objective: 'Pensar la consulta en álgebra y luego traducirla a SQL sin perder filas ni condiciones.',
      teach: 'La selección σ filtra filas; la proyección π elige columnas; el join combina relaciones según una condición. Una consulta debe leerse como una pregunta: “¿qué columnas necesito?, ¿de qué tablas?, ¿qué filas cumplen?, ¿cómo ordeno?”. En SQL: SELECT columnas FROM tablas JOIN ... ON ... WHERE ... ORDER BY ... . WHERE filtra antes de agrupar; no uses JOIN sin condición salvo que realmente quieras un producto cartesiano.',
      watch: [['SQL SELECT, WHERE, GROUP BY, HAVING, ORDER BY y JOIN', 'https://www.youtube.com/watch?v=IkWjLBIolso', 'Mira los ejemplos y reescríbelos con las tablas de tu práctica.'], ['Álgebra relacional: selección y proyección', 'https://www.youtube.com/watch?v=4xKbMxZaJHw', 'Consolida la lógica antes de memorizar sintaxis SQL.']],
      read: [['Semana 07 · álgebra relacional', 'materiales/modelado/Semana07_Algebra_Relacional.pdf', 'Material local de operadores']],
      practice: 'Con CLIENTE(id, nombre, ciudad), PEDIDO(id, cliente_id, fecha, total), escribe: (1) álgebra y SQL de pedidos mayores a 100, (2) clientes con pedidos, (3) clientes sin pedidos y (4) pedidos ordenados por total descendente.',
      deliverable: 'Banco de 8 consultas con álgebra + SQL',
      questions: [
        { q: '¿Qué operador corresponde a filtrar filas?', options: ['Selección σ', 'Proyección π', 'Renombramiento ρ únicamente'], correct: 0, why: 'La selección conserva filas que cumplen una condición.' },
        { q: '¿Qué evita un JOIN incorrecto?', options: ['Definir la condición ON que relaciona las claves', 'Quitar siempre el WHERE', 'Ordenar antes de leer las tablas'], correct: 0, why: 'La condición ON evita combinaciones espurias.' }
      ],
      prompt: 'Sé mi examinador de SQL del Día 17. Dame un esquema pequeño y 6 preguntas: expresa cada una en álgebra relacional y SQL; incluye JOIN, ausencia de registros y ordenamiento. Corrige resultado y razonamiento.'
    },
    {
      day: '18', course: 'mixto', title: 'Tres mini-exámenes y hoja final de errores',
      syllabus: 'Cierre estratégico: integra los productos observables de los tres cursos y prioriza fallos.',
      objective: 'Llegar al examen con un diagnóstico, no con la ilusión de haber leído suficiente.',
      teach: 'El último día es de transferencia. La memoria se prueba cuando cambia el caso, no cuando reconoces la definición. Haz tres bloques cronometrados: metodología exige alineación; riesgos exige priorización y controles; modelado exige diagrama, normalización y consulta. Corrige con una hoja de errores: concepto, por qué fallé, regla correcta y ejercicio de recuperación.',
      watch: [['NIST CSF 2.0 · repaso', 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', 'Usa la fuente oficial solo para corregir terminología.'], ['Currículo UNSCH · modelamiento de datos', 'https://enlinea2.unsch.edu.pe/wp-content/uploads/2023/05/27_P35_CURRICULO-INGENIERIA-DE-SISTEMAS.pdf', 'Contrasta el alcance público de Modelado con tus materiales locales.']],
      read: [['Examen parcial de Modelado', 'materiales/modelado/Primer_Examen_A.pdf', 'Tipo de preguntas locales']],
      practice: 'Bloque 1: 40 min de metodología. Bloque 2: 40 min de riesgos. Bloque 3: 60 min de modelado. Corrige cada bloque y repite solo los errores, no todo el temario.',
      deliverable: 'Hoja final de errores + plan de repaso de 24 horas',
      questions: [
        { q: '¿Qué debe ocupar el último repaso?', options: ['Errores reales y reglas que los corrigen', 'Volver a leer todo sin practicar', 'Solo los temas que ya dominas'], correct: 0, why: 'El diagnóstico convierte el tiempo final en puntos recuperables.' },
        { q: 'En Modelado, ¿qué evidencia muestra mejor dominio?', options: ['Resolver un caso nuevo con DER, 3FN y SQL coherentes', 'Repetir definiciones de memoria', 'Ver otro video sin escribir consultas'], correct: 0, why: 'El examen exige transferir el procedimiento a un caso.' }
      ],
      prompt: 'Adminístrame los tres mini-exámenes del Día 18 en turnos. Cronometra cada bloque, no me des pistas, califica por rúbrica y termina con mis 5 errores de mayor impacto y un repaso final.'
    }
  ];

  const resources = [
    ['riesgos', 'NIST CSF 2.0 · guía oficial en español', 'Fuente primaria para Govern, Identify, Protect, Detect, Respond y Recover.', 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-resource-overview-guide-spanish-translation', 'Oficial'],
    ['riesgos', 'MITRE ATT&CK · tácticas Enterprise', 'Usa las tácticas para responder el “por qué” de la acción adversaria y luego baja a técnica.', 'https://attack.mitre.org/tactics/enterprise/', 'Oficial'],
    ['riesgos', 'OWASP Top 10:2021', 'Lista base del sílabo para reconocer riesgos web y conectarlos con evidencias.', 'https://owasp.org/Top10/2021/', 'Oficial'],
    ['riesgos', 'OSINT Framework', 'Árbol de recursos gratuitos. Úsalo como índice y revisa si el recurso requiere registro.', 'https://osintframework.com/', 'Índice'],
    ['modelado', 'Currículo 2018 · Ingeniería de Sistemas UNSCH', 'Referencia pública que incluye modelo conceptual, ER, relacional, normalización y SQL.', 'https://enlinea2.unsch.edu.pe/wp-content/uploads/2023/05/27_P35_CURRICULO-INGENIERIA-DE-SISTEMAS.pdf', 'UNSCH'],
    ['metodologia', 'Metodología · problema y objetivos', 'Video de apoyo para destrabar la formulación del problema. Ver y volver a redactar.', 'https://www.youtube.com/watch?v=3RxG9f-nE90', 'YouTube'],
    ['modelado', 'Modelado ER → relacional', 'Ejemplo guiado del paso del diagrama entidad-relación a tablas.', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'YouTube'],
    ['modelado', 'Álgebra relacional', 'Selección y proyección explicadas paso a paso.', 'https://www.youtube.com/watch?v=4xKbMxZaJHw', 'YouTube'],
    ['modelado', 'SQL: SELECT, WHERE, GROUP BY, HAVING, ORDER BY y JOIN', 'Video para traducir la lógica de álgebra relacional a consultas SQL.', 'https://www.youtube.com/watch?v=IkWjLBIolso', 'YouTube'],
    ['riesgos', 'OWASP Juice Shop · nivel 1', 'Práctica de aplicación vulnerable dentro de un entorno autorizado.', 'https://www.youtube.com/watch?v=TS5B19dg1ak', 'YouTube']
  ];

  let state = loadState();
  let currentCourse = null;
  let currentDay = null;

  function loadState() {
    const fallback = { route: {}, checks: {}, lessons: {} };
    try { return { ...fallback, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; } catch (error) { return fallback; }
  }
  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateProgress(); renderMentor(); }
  function esc(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
  function courseFor(id) { return courses[id] || { id, short: 'Repaso mixto', code: 'MIX', color: '#22d3ee' }; }
  function lessonFor(day) { return lessonDays.find((lesson) => lesson.day === String(day)); }
  function lessonDone(day) { return Boolean(state.lessons[day] || state.route[day]); }
  function pendingLesson() { return lessonDays.find((lesson) => !lessonDone(lesson.day)) || lessonDays[lessonDays.length - 1]; }
  function checkedCount() { return Object.values(state.route).filter(Boolean).length + Object.values(state.checks).filter(Boolean).length; }
  function totalCount() { return route.length + Object.values(courses).reduce((sum, course) => sum + course.checklist.length, 0); }
  function updateProgress() {
    const percent = Math.round((checkedCount() / totalCount()) * 100);
    document.querySelector('#progress-chip').textContent = `${percent}% completado`;
    document.querySelector('#overview-progress').textContent = `${percent}%`;
    document.querySelector('#route-progress-number').textContent = `${Object.values(state.route).filter(Boolean).length} / 18`;
    document.querySelector('#route-progress-bar').style.width = `${Math.round((Object.values(state.route).filter(Boolean).length / 18) * 100)}%`;
    if (currentCourse) updateDetailProgress(currentCourse);
  }
  function showToast(message) {
    const toast = document.querySelector('#toast');
    toast.textContent = message; toast.classList.add('is-visible');
    clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }
  function setView(view) {
    document.querySelectorAll('[data-view-panel]').forEach((panel) => { const visible = panel.dataset.viewPanel === view; panel.classList.toggle('is-visible', visible); panel.hidden = !visible; });
    document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function openCourse(id) {
    currentCourse = id; renderCourseDetail(id); setView('curso');
    history.replaceState(null, '', `#curso/${id}`);
  }
  function openLesson(day) {
    const lesson = lessonFor(day); if (!lesson) return;
    currentDay = lesson.day;
    renderLesson(lesson);
    setView('dia');
    history.replaceState(null, '', '#dia/' + lesson.day);
  }
  function renderMentor() {
    const lesson = pendingLesson();
    const course = courseFor(lesson.course);
    const label = document.querySelector('#mentor-day-label');
    const status = document.querySelector('#mentor-day-status');
    const title = document.querySelector('#mentor-next-title');
    const copy = document.querySelector('#mentor-next-copy');
    const button = document.querySelector('#open-next-lesson');
    if (!label || !status || !title || !copy || !button) return;
    label.textContent = 'Día ' + lesson.day;
    status.textContent = course.short + ' · ' + (lessonDone(lesson.day) ? 'ruta completa' : 'siguiente sesión');
    title.textContent = lesson.title;
    copy.textContent = lesson.syllabus + ' La sesión incluye explicación, recurso, práctica y mini-quiz.';
    button.dataset.dayTarget = lesson.day;
    button.innerHTML = lessonDone(lesson.day) ? 'Revisar sesión <span>→</span>' : 'Abrir sesión <span>→</span>';
  }
  function renderExamCards() {
    document.querySelector('#exam-grid').innerHTML = Object.values(courses).map((course) => `
      <article class="exam-card fade-up" style="--course-color:${course.color}; --delay:${Object.keys(courses).indexOf(course.id) * 70}ms">
        <div><span class="course-kicker">${course.code} · examen</span><h3>${course.short}</h3><p>${course.summary}</p></div>
        <div class="exam-footer"><span class="exam-weight">${course.weight}</span><button class="mini-arrow" data-course-target="${course.id}" type="button" aria-label="Abrir ${esc(course.name)}">↗</button></div>
      </article>`).join('');
  }
  function renderRoute() {
    document.querySelector('#route-grid').innerHTML = route.map(([day, courseId, title, detail, deliverable]) => {
      const course = courseFor(courseId); const done = Boolean(state.route[day]);
      return `<article class="route-card ${done ? 'is-done' : ''}" style="--course-color:${course.color}">
        <div class="route-card-top"><div><span class="day-index">Día ${day}</span><h3>${title}</h3></div><span class="route-course-tag">${course.short || 'Repaso mixto'}</span></div>
        <p>${detail}</p><small>Entrega: ${deliverable}</small>
        <div class="route-card-footer"><span class="muted-label">${courseId === 'mixto' ? 'Cierre' : course.code}</span><label class="check-control"><input type="checkbox" data-route-check="${day}" ${done ? 'checked' : ''} /> Día cerrado</label></div>
      </article>`;
    }).join('');
  }
  function decorateRouteCards() {
    document.querySelectorAll('[data-route-check]').forEach((input) => {
      const footer = input.closest('.route-card-footer');
      if (!footer || footer.querySelector('.session-button')) return;
      const button = document.createElement('button');
      button.className = 'session-button';
      button.type = 'button';
      button.dataset.dayTarget = input.dataset.routeCheck;
      button.textContent = 'Abrir sesión →';
      const label = input.closest('.check-control');
      footer.insertBefore(button, label);
    });
  }
  function renderCourseList() {
    document.querySelector('#course-list').innerHTML = Object.values(courses).map((course) => `
      <article class="course-list-card" style="--course-color:${course.color}">
        <div><span class="course-kicker">${course.code}</span><h2>${course.name}</h2><span class="muted-label">${course.weight}</span></div>
        <p>${course.summary}</p><button class="button" data-course-target="${course.id}" type="button">Abrir guía <span>↗</span></button>
      </article>`).join('');
  }
  function updateDetailProgress(id) {
    const course = courses[id]; if (!course) return;
    const done = course.checklist.filter((_, index) => state.checks[`${id}-${index}`]).length;
    const percent = Math.round((done / course.checklist.length) * 100);
    const number = document.querySelector('#detail-progress-number'); const bar = document.querySelector('#detail-progress-bar');
    if (number) number.textContent = `${percent}%`; if (bar) bar.style.width = `${percent}%`;
  }
  function renderCourseDetail(id) {
    const course = courses[id]; if (!course) return;
    const detail = document.querySelector('#course-detail');
    detail.innerHTML = `<div class="detail-hero" style="--course-color:${course.color}">
      <article class="detail-lead"><span class="course-kicker">${course.code} · ruta de examen</span><h1>${course.name}</h1><p>${course.summary}</p><p class="card-note">${course.localNote}</p></article>
      <article class="detail-side panel"><span class="eyebrow">Checklist del curso</span><strong id="detail-progress-number">0%</strong><p>Marca solo lo que puedes resolver sin mirar tus apuntes.</p><div class="detail-progress"><span id="detail-progress-bar"></span></div></article>
    </div>
    <div class="detail-grid" style="--course-color:${course.color}">
      <article class="detail-section panel"><h2>Lo que debe entrar en el examen</h2><div class="fit-list">${course.fit.map(([number, title, text]) => `<div class="fit-item"><b>${number}</b><div><strong>${title}</strong><span>${text}</span></div></div>`).join('')}</div></article>
      <article class="detail-section panel"><h2>Prueba de dominio</h2><div class="detail-checklist">${course.checklist.map((item, index) => `<label><input type="checkbox" data-course-check="${id}-${index}" ${state.checks[`${id}-${index}`] ? 'checked' : ''} /><span>${item}</span></label>`).join('')}</div>${course.securityNote ? `<div class="security-note">${course.securityNote}</div>` : ''}</article>
      <article class="detail-section panel"><h2>Material local priorizado</h2><div class="material-list">${course.materials.map(([label, href, type]) => `<a href="${href}" target="_blank" rel="noopener"><span>${label}</span><span>${type} ↗</span></a>`).join('')}</div></article>
      <article class="detail-section panel"><h2>Videos y apoyos</h2><div class="material-list">${course.videos.map(([label, text, href]) => `<a href="${href}" target="_blank" rel="noopener"><span><strong>${label}</strong><small>${text}</small></span><span>Ver ↗</span></a>`).join('')}</div><h3>Orden recomendado</h3><ul><li>Primero resuelve un caso de tus prácticas.</li><li>Después mira solo la explicación del punto donde fallaste.</li><li>Vuelve a resolverlo con una variante y anota el error.</li></ul></article>
    </div>`;
    updateDetailProgress(id);
  }
  function renderLesson(lesson) {
    const course = courseFor(lesson.course);
    const watch = (lesson.watch || []).map((item) => '<a class="lesson-source" href="' + esc(item[1]) + '" target="_blank" rel="noopener"><span><strong>' + esc(item[0]) + '</strong><small>' + esc(item[2]) + '</small></span><span>Ver ↗</span></a>').join('');
    const read = (lesson.read || []).map((item) => '<a class="lesson-source" href="' + esc(item[1]) + '" target="_blank" rel="noopener"><span><strong>' + esc(item[0]) + '</strong><small>' + esc(item[2]) + '</small></span><span>Abrir ↗</span></a>').join('');
    const quiz = lesson.questions.map((question, questionIndex) => {
      const options = question.options.map((option, optionIndex) => '<button class="quiz-option" type="button" data-quiz-option data-day="' + lesson.day + '" data-question="' + questionIndex + '" data-option="' + optionIndex + '" data-correct="' + (optionIndex === question.correct) + '">' + esc(option) + '</button>').join('');
      return '<div class="quiz-question" data-quiz-question="' + lesson.day + '-' + questionIndex + '"><strong>' + (questionIndex + 1) + '. ' + esc(question.q) + '</strong><div class="quiz-options">' + options + '</div><p class="quiz-feedback" data-quiz-feedback="' + lesson.day + '-' + questionIndex + '"></p><span class="quiz-why" data-quiz-why="' + lesson.day + '-' + questionIndex + '" data-explanation="' + esc(question.why) + '"></span></div>';
    }).join('');
    const prompt = lesson.prompt;
    document.querySelector('#lesson-detail').innerHTML =
      '<div class="lesson-hero" style="--course-color:' + course.color + '">' +
        '<div class="lesson-hero-copy"><span class="course-kicker">' + esc(course.code) + ' · Día ' + esc(lesson.day) + ' · sesión mentor</span><h1>' + esc(lesson.title) + '</h1><p>' + esc(lesson.objective) + '</p></div>' +
        '<div class="lesson-syllabus"><span class="eyebrow">Alineación con el sílabo</span><strong>' + esc(course.short) + '</strong><span>' + esc(lesson.syllabus) + '</span></div>' +
      '</div>' +
      '<div class="lesson-flow panel"><div><span class="flow-number">01</span><strong>Entiende</strong><span>Microclase</span></div><div><span class="flow-number">02</span><strong>Contrasta</strong><span>Fuente guiada</span></div><div><span class="flow-number">03</span><strong>Produce</strong><span>Entrega</span></div><div><span class="flow-number">04</span><strong>Comprueba</strong><span>Mini-quiz</span></div></div>' +
      '<div class="lesson-grid">' +
        '<article class="lesson-card lesson-teach panel"><div class="card-topline"><div><p class="eyebrow">Microclase</p><h2>La idea que debes poder explicar</h2></div><span class="signal-mark">✦</span></div><p>' + esc(lesson.teach) + '</p><div class="mentor-callout"><strong>Regla de mentor</strong><span>Antes de abrir el recurso, intenta explicar el concepto con tu propio ejemplo.</span></div></article>' +
        '<article class="lesson-card panel"><p class="eyebrow">Mira / lee con propósito</p><h2>Apoyo exacto para este bloque</h2><div class="lesson-sources">' + watch + read + '</div><p class="source-footnote">El enlace acompaña la sesión; la evidencia de aprendizaje será tu entrega.</p></article>' +
        '<article class="lesson-card lesson-task panel"><p class="eyebrow">Práctica guiada</p><h2>Ahora haz esto</h2><p>' + esc(lesson.practice) + '</p><div class="task-deliverable"><span>Entrega del día</span><strong>' + esc(lesson.deliverable) + '</strong></div><label class="lesson-check"><input type="checkbox" data-lesson-check="' + lesson.day + '" ' + (lessonDone(lesson.day) ? 'checked' : '') + ' /><span>Ya produje la entrega y puedo defenderla.</span></label></article>' +
        '<article class="lesson-card lesson-quiz panel"><div class="card-topline"><div><p class="eyebrow">Recuperación activa</p><h2>Mini-quiz con feedback</h2></div><span class="quiz-score" data-quiz-score="' + lesson.day + '">0 / ' + lesson.questions.length + '</span></div><p class="quiz-intro">Responde sin volver arriba. Después de cada opción verás por qué.</p><div class="quiz-list">' + quiz + '</div></article>' +
      '</div>' +
      '<article class="mentor-prompt panel"><div><p class="eyebrow">Siguiente movimiento</p><h2>Tráeme tu respuesta al chat</h2><p>Este prompt convierte la sesión en un examen adaptativo. Copia, pégalo en este chat y responde sin consultar tus apuntes.</p></div><div class="prompt-box"><textarea readonly aria-label="Prompt para el mentor">' + esc(prompt) + '</textarea><button class="button button-primary" data-copy-prompt="' + esc(prompt) + '" type="button">Copiar prompt</button></div></article>';
  }
  function renderResources() {
    document.querySelector('#resources-grid').innerHTML = resources.map(([courseId, title, text, href, tag]) => {
      const course = courseFor(courseId); return `<article class="resource-card" data-resource-search="${esc(`${title} ${text} ${course.short}`.toLowerCase())}" style="--resource-color:${course.color}"><div class="source-head"><span class="resource-course">${course.short}</span><span>${tag}</span></div><h3>${title}</h3><p>${text}</p><a class="resource-link" href="${href}" target="_blank" rel="noopener">Abrir recurso <span>↗</span></a></article>`;
    }).join('');
  }
  function copyText(value) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(value);
    const helper = document.createElement('textarea'); helper.value = value; document.body.appendChild(helper); helper.select(); document.execCommand('copy'); helper.remove();
    return Promise.resolve();
  }
  function bindEvents() {
    document.addEventListener('click', (event) => {
      const nav = event.target.closest('.nav-item'); if (nav) { setView(nav.dataset.view); history.replaceState(null, '', `#${nav.dataset.view}`); return; }
      const targetView = event.target.closest('[data-view-target]'); if (targetView) { setView(targetView.dataset.viewTarget); history.replaceState(null, '', `#${targetView.dataset.viewTarget}`); return; }
      const dayTarget = event.target.closest('[data-day-target]'); if (dayTarget) { openLesson(dayTarget.dataset.dayTarget); return; }
      const copyButton = event.target.closest('[data-copy-prompt]'); if (copyButton) { copyText(copyButton.dataset.copyPrompt).then(() => showToast('Prompt copiado. Pégalo en este chat para comenzar.')); return; }
      const quizOption = event.target.closest('[data-quiz-option]'); if (quizOption) {
        const question = quizOption.closest('.quiz-question');
        const feedback = question.querySelector('.quiz-feedback');
        const explanation = question.querySelector('.quiz-why');
        question.querySelectorAll('[data-quiz-option]').forEach((button) => { button.classList.remove('is-correct', 'is-wrong'); button.disabled = true; });
        const correct = quizOption.dataset.correct === 'true';
        quizOption.classList.add(correct ? 'is-correct' : 'is-wrong');
        feedback.textContent = correct ? 'Correcto.' : 'Aún no. Revisa la respuesta correcta y explica por qué.';
        feedback.classList.add('is-visible', correct ? 'is-good' : 'is-bad');
        explanation.textContent = explanation.dataset.explanation;
        explanation.classList.add('is-visible');
        const quizRoot = quizOption.closest('.lesson-quiz');
        const total = quizRoot.querySelectorAll('.quiz-question').length;
        const score = quizRoot.querySelectorAll('.quiz-option.is-correct').length;
        quizRoot.querySelector('.quiz-score').textContent = score + ' / ' + total;
        return;
      }
      const courseTarget = event.target.closest('[data-course-target]'); if (courseTarget) { openCourse(courseTarget.dataset.courseTarget); return; }
    });
    document.addEventListener('change', (event) => {
      const routeCheck = event.target.closest('[data-route-check]'); if (routeCheck) { state.route[routeCheck.dataset.routeCheck] = routeCheck.checked; state.lessons[routeCheck.dataset.routeCheck] = routeCheck.checked; saveState(); renderRoute(); decorateRouteCards(); showToast(routeCheck.checked ? 'Día cerrado. Mañana empieza con repaso.' : 'Día reabierto.'); return; }
      const courseCheck = event.target.closest('[data-course-check]'); if (courseCheck) { state.checks[courseCheck.dataset.courseCheck] = courseCheck.checked; saveState(); updateDetailProgress(currentCourse); showToast(courseCheck.checked ? 'Dominio registrado.' : 'Dominio pendiente.'); }
      const lessonCheck = event.target.closest('[data-lesson-check]'); if (lessonCheck) { state.lessons[lessonCheck.dataset.lessonCheck] = lessonCheck.checked; state.route[lessonCheck.dataset.lessonCheck] = lessonCheck.checked; saveState(); renderRoute(); decorateRouteCards(); showToast(lessonCheck.checked ? 'Sesión cerrada: ahora puedes avanzar.' : 'Sesión reabierta.'); }
    });
    document.querySelector('#reset-progress').addEventListener('click', () => { if (window.confirm('¿Reiniciar todos los checks de la ruta?')) { state = { route: {}, checks: {}, lessons: {} }; saveState(); renderRoute(); decorateRouteCards(); if (currentCourse) renderCourseDetail(currentCourse); if (currentDay) renderLesson(lessonFor(currentDay)); showToast('Progreso reiniciado.'); } });
    document.querySelector('#global-search').addEventListener('input', (event) => { const query = event.target.value.trim().toLowerCase(); document.querySelectorAll('[data-resource-search]').forEach((card) => card.classList.toggle('is-hidden', Boolean(query) && !card.dataset.resourceSearch.includes(query))); if (query) { setView('recursos'); history.replaceState(null, '', '#recursos'); } });
  }
  function hydrateFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('curso/')) openCourse(hash.split('/')[1]);
    else if (hash.startsWith('dia/')) openLesson(hash.split('/')[1]);
    else if (['mentor', 'inicio', 'ruta', 'cursos', 'recursos'].includes(hash)) setView(hash);
    else setView('mentor');
  }
  renderExamCards(); renderRoute(); decorateRouteCards(); renderCourseList(); renderResources(); bindEvents(); updateProgress(); renderMentor(); hydrateFromHash();
})();
