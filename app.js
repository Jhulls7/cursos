(() => {
  'use strict';

  const STORAGE_KEY = 'ruta-18-dias-progress-v2';
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

  // La secuencia prioriza la dificultad estimada para que el estudiante use
  // los primeros días —cuando todavía tiene más energía— en la parte técnica.
  // No mezcla materias: cada bloque se cierra antes de abrir el siguiente.
  const courseOrder = ['modelado', 'riesgos', 'metodologia'];
  const courseStrategy = {
    modelado: { difficulty: 'Más exigente', block: 'Bloque 01 · días 01–06', focus: 'Resolver: DER · 3FN · álgebra · SQL' },
    riesgos: { difficulty: 'Exigencia media-alta', block: 'Bloque 02 · días 07–12', focus: 'Analizar: riesgo · controles · respuesta' },
    metodologia: { difficulty: 'Más conceptual', block: 'Bloque 03 · días 13–18', focus: 'Argumentar: problema · diseño · evidencia' }
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
    ['13', 'modelado', 'Base de datos y modelo', 'Distingue dato, información, BD, SGBD y niveles conceptual, lógico y físico.', 'Mapa de conceptos'],
    ['14', 'modelado', 'DER y reglas de negocio', 'Extrae entidades, atributos, relaciones y cardinalidades desde un enunciado.', 'DER comentado'],
    ['15', 'modelado', 'Conversión a tablas', 'Convierte 1:1, 1:N, N:M, ternarias e ISA; marca PK y FK.', 'Modelo relacional'],
    ['16', 'modelado', 'Normalización a 3FN', 'Resuelve una relación con dependencias y justifica cada separación.', 'Tablas en 3FN'],
    ['17', 'modelado', 'Álgebra relacional y SQL', 'Traduce selección, proyección, join y agrupación a consultas SQL.', 'Banco de consultas'],
    ['18', 'modelado', 'Simulacro de Modelado', 'Resuelve un caso completo: DER, modelo relacional, 3FN, álgebra y SQL.', 'Examen corregido']
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
      day: '13', course: 'modelado', title: 'Base de datos y modelo',
      syllabus: 'Modelado · semanas 1–2: dato, información, BD, SGBD, modelo conceptual, lógico y físico.',
      objective: 'Construir el mapa mental que permite entender por qué existe un modelo de datos.',
      teach: 'Un dato aislado no explica nada; la información aparece cuando los datos se interpretan en un contexto. Una base de datos organiza datos relacionados y un SGBD permite definir, consultar, proteger y mantener esa información. El modelo conceptual habla del dominio; el lógico lo convierte en relaciones y claves; el físico decide cómo se implementa en un motor.',
      watch: [['SQLBolt · introducción a bases relacionales', 'https://sqlbolt.com/', 'Lee la introducción y completa la primera lección interactiva.']],
      read: [['Semana 01 · fundamentos', 'materiales/modelado/Semana01.pdf', 'Material local para conceptos base']],
      practice: 'Para una universidad, clasifica 10 elementos como dato, información, entidad, atributo, relación, BD o SGBD. Después dibuja el paso conceptual → lógico → físico.',
      deliverable: 'Mapa de conceptos de base de datos',
      questions: [
        { q: '¿Qué describe mejor un modelo conceptual?', options: ['El dominio y sus reglas sin depender de un motor', 'Los índices y archivos del servidor', 'La contraseña del usuario'], correct: 0, why: 'El modelo conceptual representa el significado del dominio.' },
        { q: '¿Qué función corresponde a un SGBD?', options: ['Definir, consultar y administrar datos', 'Solo dibujar interfaces', 'Reemplazar las reglas del negocio'], correct: 0, why: 'El SGBD gestiona el ciclo de vida y acceso a la base de datos.' }
      ],
      prompt: 'Examíname en el Día 13 de Modelado. Dame ejemplos y exige que diferencie dato, información, BD, SGBD y los tres niveles de modelado.'
    },
    {
      day: '14', course: 'modelado', title: 'DER: entidades, atributos y relaciones',
      syllabus: 'Modelado · semanas 2–3: modelo entidad-relación, entidades, atributos, relaciones y reglas.',
      objective: 'Leer un enunciado y separar entidad, atributo, relación y regla de negocio.',
      teach: 'Una entidad es algo distinguible del dominio; un atributo describe esa entidad; una relación conecta ocurrencias. No todo sustantivo merece tabla: “fecha de préstamo” puede ser atributo de la relación, mientras “Libro” y “Socio” tienen identidad propia. Primero escribe reglas en lenguaje natural y luego conviértelas en el diagrama.',
      watch: [['Del entidad-relación al modelo relacional', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'Mira el ejemplo completo después de intentar tu DER.']],
      read: [['Semana 02–03 · DER', 'materiales/modelado/Semana02.docx', 'Material local de entidades y relaciones']],
      practice: 'Caso biblioteca: socios, libros, autores, ejemplares y préstamos. Lista entidades, atributos, identificadores, relaciones y cardinalidades.',
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
      teach: 'En 1:N, la FK suele ir en el lado N. En N:M necesitas una tabla asociativa cuya PK puede ser compuesta por ambas FKs y que puede guardar atributos de la relación. En 1:1 eliges dónde ubicar la FK considerando participación y dependencia.',
      watch: [['Del entidad-relación al modelo relacional', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'Pausa antes de cada transformación y hazla tú primero.']],
      read: [['Semana 04 · mapeo a tablas', 'materiales/modelado/Semana04.pdf', 'Reglas locales de conversión']],
      practice: 'Transforma estudiante–matrícula–curso N:M, docente–curso 1:N y requisito curso–curso recursivo. Escribe tablas, PK, FK y restricciones.',
      deliverable: 'Modelo relacional con PK/FK',
      questions: [
        { q: '¿Cómo se representa normalmente una relación N:M?', options: ['Con una tabla asociativa con FKs de ambas entidades', 'Poniendo todas las filas en una sola columna', 'Eliminando una de las entidades'], correct: 0, why: 'La tabla asociativa resuelve la multiplicidad y conserva la relación.' },
        { q: 'En una relación 1:N, la FK suele ubicarse…', options: ['En el lado N', 'Siempre en el lado 1', 'En una tabla sin relación'], correct: 0, why: 'Cada fila del lado N referencia a una fila del lado 1.' }
      ],
      prompt: 'Dame un DER textual y evalúa mi transformación a tablas. Pregunta por PK, FK, N:M, relación recursiva y la restricción que se perdería si lo modelo mal.'
    },
    {
      day: '16', course: 'modelado', title: 'Dependencias y normalización hasta 3FN',
      syllabus: 'Modelado · semanas 5–6: dependencias funcionales, 1FN, 2FN, 3FN e integridad.',
      objective: 'Detectar anomalías y descomponer una relación justificando cada paso.',
      teach: 'Una dependencia funcional X → Y significa que X determina un único Y. 1FN exige valores atómicos. 2FN elimina dependencias parciales de una clave compuesta. 3FN elimina dependencias transitivas. La pregunta no es “¿cómo parto la tabla?”, sino “¿qué hecho depende de qué clave?”.',
      watch: [['Normalización 1FN, 2FN y 3FN', 'https://www.youtube.com/watch?v=GFQaEYEc8_8', 'Mira el procedimiento después de marcar dependencias en tu caso.']],
      read: [['Práctica de normalización', 'materiales/modelado/Practica_Normalizacion.pdf', 'Ejercicios locales priorizados']],
      practice: 'Normaliza VENTA(idVenta, fecha, idCliente, nombreCliente, idProducto, nombreProducto, precio, cantidad). Escribe dependencias, clave candidata, anomalías y tablas resultantes.',
      deliverable: 'Descomposición justificada a 3FN',
      questions: [
        { q: '¿Qué elimina principalmente la 2FN?', options: ['Dependencias parciales respecto de una clave compuesta', 'Todos los valores nulos', 'La necesidad de PK'], correct: 0, why: '2FN evita que un atributo no clave dependa solo de una parte de la clave.' },
        { q: 'Si idCliente → nombreCliente y una venta usa idCliente, el nombre es…', options: ['Dependencia transitiva si está junto a atributos determinados por idVenta', 'Una relación N:M', 'Una clave foránea obligatoria en toda tabla'], correct: 0, why: 'La determinación indirecta produce dependencia transitiva.' }
      ],
      prompt: 'Examíname en normalización con una tabla de ventas. Pídeme identificar claves y dependencias, detectar anomalías y justificar 1FN, 2FN y 3FN paso por paso.'
    },
    {
      day: '17', course: 'modelado', title: 'Álgebra relacional y SQL',
      syllabus: 'Modelado · semana 7 y laboratorio: selección, proyección, joins, agrupación y consultas.',
      objective: 'Pensar la consulta en álgebra y luego traducirla a SQL sin perder filas ni condiciones.',
      teach: 'La selección σ filtra filas; la proyección π elige columnas; el join combina relaciones según una condición. En SQL: SELECT columnas FROM tablas JOIN ... ON ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... . Primero entiende la pregunta, luego decide tablas, condición y resultado.',
      watch: [['SQLBolt · lecciones interactivas', 'https://sqlbolt.com/', 'Completa SELECT, filtros, ordenamiento, agregaciones y JOIN.'], ['Relational Playground', 'https://cs.rit.edu/~dataunitylab/project/relational-playground/', 'Explora la relación entre álgebra y SQL.']],
      read: [['Semana 07 · álgebra relacional', 'materiales/modelado/Semana07_Algebra_Relacional.pdf', 'Material local de operadores'], ['PostgreSQL · tutorial SQL', 'https://www.postgresql.org/docs/current/tutorial-sql.html', 'Referencia técnica de SELECT, JOIN y agregaciones']],
      practice: 'Con CLIENTE(id, nombre, ciudad) y PEDIDO(id, cliente_id, fecha, total), escribe álgebra y SQL para filtrar, unir, agrupar, ordenar y encontrar clientes sin pedidos.',
      deliverable: 'Banco de 8 consultas con álgebra + SQL',
      questions: [
        { q: '¿Qué operador corresponde a filtrar filas?', options: ['Selección σ', 'Proyección π', 'Renombramiento ρ únicamente'], correct: 0, why: 'La selección conserva filas que cumplen una condición.' },
        { q: '¿Qué evita un JOIN incorrecto?', options: ['Definir la condición ON que relaciona las claves', 'Quitar siempre el WHERE', 'Ordenar antes de leer las tablas'], correct: 0, why: 'La condición ON evita combinaciones espurias.' }
      ],
      prompt: 'Sé mi examinador de SQL del Día 17. Dame un esquema pequeño y 6 preguntas: expresa cada una en álgebra relacional y SQL; incluye JOIN, ausencia de registros, GROUP BY y ordenamiento.'
    },
    {
      day: '18', course: 'modelado', title: 'Simulacro de Modelado',
      syllabus: 'Cierre de Modelado: DER, modelo relacional, normalización, álgebra relacional y SQL.',
      objective: 'Resolver un caso nuevo y defender cada decisión como si fuera el examen.',
      teach: 'El examen no comprueba si reconoces palabras: comprueba si puedes pasar de un enunciado a una estructura coherente y luego consultarla. Trabaja en orden: reglas → DER → tablas/PK/FK → dependencias/3FN → álgebra → SQL. Si una etapa cambia, revisa las siguientes.',
      watch: [['Examen parcial de Modelado', 'materiales/modelado/Primer_Examen_A.pdf', 'Resuelve primero sin mirar y usa el documento para comparar el tipo de pregunta.']],
      read: [['Currículo público UNSCH · Modelamiento de Datos', 'https://enlinea2.unsch.edu.pe/wp-content/uploads/2023/05/27_P35_CURRICULO-INGENIERIA-DE-SISTEMAS.pdf', 'Referencia pública de alcance; no sustituye el material local']],
      practice: 'En 60 minutos resuelve un caso completo de matrícula: DER, esquema relacional, 1FN–3FN, dos expresiones de álgebra y seis consultas SQL. Corrige con una hoja de errores.',
      deliverable: 'Examen corregido + hoja de errores',
      questions: [
        { q: '¿Qué evidencia muestra mejor dominio?', options: ['Resolver un caso nuevo con DER, 3FN y SQL coherentes', 'Repetir definiciones de memoria', 'Ver otro video sin escribir consultas'], correct: 0, why: 'El examen exige transferir el procedimiento a un caso.' },
        { q: '¿Qué orden reduce errores?', options: ['Reglas → DER → tablas → normalización → consultas', 'SQL → colores → entidades', 'Normalizar sin conocer las claves'], correct: 0, why: 'Cada etapa depende de la anterior.' }
      ],
      prompt: 'Adminístrame el simulacro final de Modelado en turnos: DER, modelo relacional, 3FN, álgebra y SQL. No me des pistas; califica coherencia, claves, dependencias y resultados.'
    }
  ];

  // Reindexamos la agenda sin duplicar todo el contenido de las lecciones.
  // Así el orden de dificultad queda centralizado y es fácil ajustarlo cuando
  // llegue el sílabo oficial.
  const studyRoute = courseOrder.flatMap((courseId) => route.filter((item) => item[1] === courseId)).map((item, index) => [
    String(index + 1).padStart(2, '0'), item[1], item[2], item[3], item[4]
  ]);
  const studyLessons = courseOrder.flatMap((courseId) => lessonDays.filter((lesson) => lesson.course === courseId)).map((lesson, index) => {
    const newDay = String(index + 1).padStart(2, '0');
    return { ...lesson, day: newDay, prompt: (lesson.prompt || '').replace(/Día \d{2}/g, 'Día ' + newDay) };
  });

  // Una lectura principal no basta para un tema difícil. Estas rutas
  // complementarias dan una segunda explicación, práctica o referencia
  // oficial sin obligar a buscar enlaces a ciegas.
  const topicResourcePacks = {
    modelado: [
      ['SQLBolt · práctica interactiva', 'https://sqlbolt.com/', 'Ejercicios breves de SELECT, filtros, agregaciones y JOIN.'],
      ['PostgreSQL · tutorial SQL', 'https://www.postgresql.org/docs/current/tutorial-sql.html', 'Referencia oficial para sintaxis y consultas.'],
      ['Relational Playground', 'https://cs.rit.edu/~dataunitylab/project/relational-playground/', 'Relaciona álgebra relacional con SQL.'],
      ['Berkeley · normalización', 'https://courses.ischool.berkeley.edu/i202/f97/Lecture8/Lecture8.html', 'Lectura universitaria para dependencias y formas normales.'],
      ['ER → modelo relacional', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'Ejemplo visual del paso del diagrama a tablas.']
    ],
    riesgos: [
      ['NIST CSF 2.0', 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', 'Marco oficial para ordenar resultados de seguridad.'],
      ['NIST CSF 2.0 · español', 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-resource-overview-guide-spanish-translation', 'Apoyo de lectura en español.'],
      ['MITRE ATT&CK · Enterprise', 'https://attack.mitre.org/tactics/enterprise/', 'Tácticas y técnicas para contextualizar amenazas.'],
      ['OWASP Top 10', 'https://owasp.org/Top10/2021/', 'Riesgos web para reconocer controles y evidencias.'],
      ['OWASP Juice Shop', 'https://owasp.org/www-project-juice-shop/', 'Laboratorio vulnerable para practicar con autorización.']
    ],
    metodologia: [
      ['Proceso de investigación · UNAM', 'https://sites.google.com/fa.unam.mx/taller-investigacin-2025-2/4-el-proceso-de-investigacion', 'Secuencia universitaria del proceso de investigación.'],
      ['Objetivos · Universidad Veracruzana', 'https://innovarua.uv.mx/portal/recursos/ficha/15342/como-redactar-un-objetivo', 'Ayuda para escribir objetivos observables.'],
      ['Metodología · UNED', 'https://uned.ac.cr/ece/noticias/ya-esta-disponible-la-serie-didactica-animada-metodologia-de-investigacion', 'Serie didáctica para repasar conceptos clave.'],
      ['Proceso de investigación científica', 'https://www.youtube.com/watch?v=BU7MTV9imJg', 'Recorrido completo para ordenar problema, diseño y análisis.'],
      ['Problema y objetivos', 'https://www.youtube.com/watch?v=3RxG9f-nE90', 'Apoyo audiovisual para formular y delimitar.']
    ]
  };

  const coursePlans = {
    metodologia: {
      parts: [
        { id: 'met-1', number: '01', title: 'Fundamentos y método', summary: 'Aprende qué significa conocer, investigar y justificar un método.', topics: [
          { id: 'met-1-1', title: 'Ciencia y conocimiento', explain: 'El conocimiento científico busca explicaciones ordenadas, públicas y contrastables. No todo lo que sabemos es ciencia: la diferencia está en cómo se obtiene, se argumenta y se somete a revisión.', example: 'Decir “los usuarios abandonan la app porque es lenta” es una sospecha. Medir tiempos, registrar abandonos y contrastar la relación convierte la sospecha en una pregunta investigable.', task: 'Escribe una afirmación cotidiana sobre tecnología y conviértela en una pregunta que pueda responderse con evidencia.', resource: ['Proceso de investigación científica', 'https://www.youtube.com/watch?v=BU7MTV9imJg', 'Video con recorrido por problema, objetivos, diseño y variables.'], question: '¿Qué convierte una afirmación en investigable?', options: ['Que pueda contrastarse con un procedimiento y evidencia', 'Que tenga muchas palabras técnicas', 'Que coincida con mi opinión'], correct: 0, why: 'La investigación necesita una pregunta observable y un camino justificable.' },
          { id: 'met-1-2', title: 'Método, metodología y enfoque', explain: 'El método es el camino operativo; la metodología explica por qué ese camino es adecuado; el enfoque orienta el tipo de evidencia: cualitativa, cuantitativa o mixta.', example: 'Entrevistar estudiantes para comprender experiencias es distinto de medir 300 respuestas en una escala. Ambos pueden estudiar usabilidad, pero no producen la misma evidencia.', task: 'Clasifica tres preguntas de Sistemas como cualitativas, cuantitativas o mixtas y explica qué dato recogerías.', resource: ['Método científico y tipos de investigación', 'https://tuprepaenvideos.sep.gob.mx/es/tuprepaenvideos/Metodo_cientifico_y_tipos_de_investigacion', 'Recurso educativo para comparar métodos y tipos.'], question: '¿Qué describe mejor la metodología?', options: ['La justificación del conjunto de decisiones de investigación', 'El nombre del software usado', 'El formato de portada'], correct: 0, why: 'La metodología da coherencia y justificación al método.' }
        ] },
        { id: 'met-2', number: '02', title: 'Problema y objetivos', summary: 'Delimita el problema y alinea preguntas, objetivos y justificación.', topics: [
          { id: 'met-2-1', title: 'Tema, situación y problema', explain: 'Un tema es amplio; una situación describe qué ocurre; un problema de investigación expresa una brecha que puede estudiarse. Delimitar población, espacio y tiempo evita prometer más de lo que puedes observar.', example: 'Tema: plataformas educativas. Problema: no se sabe si la baja finalización de cursos se relaciona con la usabilidad en estudiantes de primer ciclo durante 2026-I.', task: 'Convierte un tema de tu carrera en una situación problemática con población y periodo definidos.', resource: ['Planteamiento del problema', 'https://www.youtube.com/watch?v=3RxG9f-nE90', 'Video de apoyo para formular problema y objetivos.'], question: '¿Qué diferencia un tema de un problema?', options: ['El problema delimita una situación investigable y una brecha', 'El tema siempre contiene una hipótesis', 'El problema es solo el título'], correct: 0, why: 'Un problema permite formular preguntas y recoger evidencia.' },
          { id: 'met-2-2', title: 'Preguntas y objetivos alineados', explain: 'La pregunta general y el objetivo general deben hablar del mismo fenómeno. Los objetivos específicos son pasos necesarios para responder, no una lista de actividades administrativas.', example: 'Pregunta: ¿Cómo influye la usabilidad en el abandono? Objetivo: determinar la influencia de la usabilidad en el abandono, mediante una medición aplicada a estudiantes.', task: 'Redacta una pregunta general, tres específicas, un objetivo general y tres específicos. Comprueba que cada objetivo responda una pregunta.', resource: ['Cómo redactar un objetivo · Universidad Veracruzana', 'https://innovarua.uv.mx/portal/recursos/ficha/15342/como-redactar-un-objetivo', 'Video educativo con explicación breve y clara.'], question: '¿Cuál es un buen objetivo específico?', options: ['Un paso necesario y observable para responder la pregunta general', 'Una actividad como “hacer diapositivas”', 'Una repetición decorativa del título'], correct: 0, why: 'El objetivo específico debe aportar evidencia a la respuesta.' }
        ] },
        { id: 'met-3', number: '03', title: 'Marco, hipótesis y variables', summary: 'Construye un marco que sirva para decidir qué observar y cómo medirlo.', topics: [
          { id: 'met-3-1', title: 'Antecedentes y marco teórico', explain: 'Un antecedente resume qué se estudió, con qué método, qué resultado obtuvo y qué deja pendiente. El marco teórico define los conceptos que usarás y evita que las variables sean palabras vacías.', example: 'No basta citar cinco artículos sobre chatbots. Compara población, diseño, métrica de satisfacción y resultado para detectar qué falta estudiar en tu contexto.', task: 'Haz una ficha de dos antecedentes: problema, muestra, método, resultado y vacío que dejan.', resource: ['Taller UNAM · proceso de investigación', 'https://sites.google.com/fa.unam.mx/taller-investigacin-2025-2/4-el-proceso-de-investigacion', 'Material educativo sobre problema, variables y proceso.'], question: '¿Qué hace útil a un antecedente?', options: ['Permite comparar método, evidencia y vacío con tu estudio', 'Solo tiene una cita larga', 'Usa una fuente sin fecha'], correct: 0, why: 'La comparación de antecedentes justifica el nuevo estudio.' },
          { id: 'met-3-2', title: 'Hipótesis y operacionalización', explain: 'Una hipótesis propone una relación contrastable. Operacionalizar significa pasar de un concepto a dimensiones, indicadores, ítems y escala. La matriz es el puente entre teoría y datos.', example: 'Variable satisfacción → dimensión facilidad de uso → indicador puntuación SUS → instrumento cuestionario → escala de 1 a 5.', task: 'Construye una fila de matriz para dos variables de un sistema que conozcas.', resource: ['Dimensiones de las variables', 'https://www.youtube.com/watch?v=1Cp2uXSzClY', 'Video de apoyo para dimensiones y operacionalización.'], question: '¿Qué hace medible a una variable?', options: ['Un indicador observable y un instrumento adecuado', 'Un nombre en mayúsculas', 'Una definición sin evidencia'], correct: 0, why: 'La operacionalización conecta el constructo con una medición.' }
        ] },
        { id: 'met-4', number: '04', title: 'Diseño y evidencia', summary: 'Elige diseño, población, muestra, técnica e instrumento sin confundirlos.', topics: [
          { id: 'met-4-1', title: 'Diseño, población y muestra', explain: 'El diseño organiza cómo observarás el fenómeno. La población es el conjunto al que quieres referirte; la muestra es la parte que realmente observarás. La selección debe ser coherente con el objetivo.', example: 'Si quieres describir satisfacción de todos los estudiantes de primer ciclo, no puedes concluir sobre toda la universidad si solo encuestaste a un salón.', task: 'Resuelve cuatro casos decidiendo enfoque, diseño, población y muestra; escribe la razón de cada elección.', resource: ['Semana 07 · diseño, población y muestra', 'materiales/metodologia/Semana07_Diseno_Poblacion_Muestra.pdf', 'Material local del curso.'], question: '¿Qué es una muestra?', options: ['Un subconjunto seleccionado de la población', 'La totalidad de personas del país', 'El cuestionario'], correct: 0, why: 'La muestra es la parte observada del universo definido.' },
          { id: 'met-4-2', title: 'Técnicas, instrumentos, validez y confiabilidad', explain: 'La técnica es el modo de recoger datos; el instrumento es el artefacto concreto. Validez pregunta si mides lo que dices medir; confiabilidad, si la medición es consistente.', example: 'Técnica: encuesta. Instrumento: cuestionario de usabilidad. Validez: revisión de expertos. Confiabilidad: consistencia interna o aplicación piloto.', task: 'Diseña cinco ítems para una variable y explica cómo probarías validez y confiabilidad.', resource: ['Búsqueda guiada: validez y confiabilidad', 'https://www.youtube.com/results?search_query=validez+y+confiabilidad+instrumentos+investigaci%C3%B3n', 'Apoyo audiovisual para aclarar la diferencia.'], question: '¿Qué pregunta responde la validez?', options: ['¿El instrumento mide el constructo que afirma medir?', '¿Cuántas hojas tiene?', '¿Qué color tiene?'], correct: 0, why: 'Validez es correspondencia entre concepto y medición.' }
        ] },
        { id: 'met-5', number: '05', title: 'Análisis y comunicación científica', summary: 'Cierra el estudio: análisis, resultados, discusión, conclusiones e integridad.', topics: [
          { id: 'met-5-1', title: 'Resultados, discusión y conclusiones', explain: 'Resultados muestra lo que encontraste; discusión interpreta qué significa y lo compara con antecedentes; conclusión responde los objetivos; limitaciones indican hasta dónde puedes generalizar.', example: '“El promedio fue 3.8” es resultado. “La baja satisfacción coincide con X, aunque la muestra limita la generalización” es discusión responsable.', task: 'Toma una tabla ficticia y escribe un párrafo de resultados, otro de discusión y una conclusión trazable.', resource: ['Procesamiento, análisis y administración', 'materiales/metodologia/Semana10_Procesamiento_analisis_admin.pdf', 'Material local para el cierre.'], question: '¿Qué debe hacer una conclusión?', options: ['Responder objetivos con base en resultados', 'Agregar datos no recogidos', 'Repetir el marco completo'], correct: 0, why: 'La conclusión debe ser trazable a evidencia y objetivos.' },
          { id: 'met-5-2', title: 'DSR, SLR, caso y ética', explain: 'DSR diseña y evalúa artefactos; SLR sintetiza estudios con protocolo; estudio de caso analiza un fenómeno situado; investigación-acción interviene y aprende con participantes. La ética protege personas, datos e integridad académica.', example: 'Construir y evaluar un prototipo con criterios definidos se acerca a DSR; comparar sistemáticamente investigaciones previas se acerca a SLR.', task: 'Elige una metodología para tu tema y defiéndela con propósito, evidencia, producto y riesgo ético.', resource: ['Serie UNED de metodología', 'https://uned.ac.cr/ece/noticias/ya-esta-disponible-la-serie-didactica-animada-metodologia-de-investigacion', 'Serie didáctica con episodios sobre problema e hipótesis.'], question: '¿Qué caracteriza a DSR?', options: ['Diseñar y evaluar un artefacto', 'Solo copiar antecedentes', 'Hacer una encuesta sin intervención'], correct: 0, why: 'DSR vincula problema, artefacto y evaluación.' }
        ] }
      ]
    },
    riesgos: {
      parts: [
        { id: 'risk-1', number: '01', title: 'Fundamentos de seguridad', summary: 'Comprende qué protege la seguridad y contra quién.', topics: [
          { id: 'risk-1-1', title: 'CIA: confidencialidad, integridad y disponibilidad', explain: 'Confidencialidad limita accesos; integridad evita cambios indebidos; disponibilidad mantiene el servicio utilizable. Un incidente puede afectar varios pilares a la vez.', example: 'Cambiar una nota sin permiso afecta integridad; publicar el historial afecta confidencialidad; tumbar el sistema afecta disponibilidad.', task: 'Crea una tabla con cinco activos, pilar afectado, amenaza, control y evidencia.', resource: ['NIST CSF 2.0', 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', 'Marco oficial para ordenar resultados de ciberseguridad.'], question: '¿Qué pilar afecta un cambio no autorizado?', options: ['Integridad', 'Disponibilidad', 'Solo diseño'], correct: 0, why: 'El dato fue alterado indebidamente.' },
          { id: 'risk-1-2', title: 'Amenazas, vulnerabilidades y controles', explain: 'Una amenaza es una causa potencial; una vulnerabilidad es una debilidad; el riesgo combina posibilidad e impacto. El control reduce probabilidad, impacto o ambos.', example: 'Phishing es amenaza; falta de MFA es vulnerabilidad; robo de cuenta es evento; MFA y capacitación son controles.', task: 'Separa amenaza, vulnerabilidad, evento y control en seis escenarios.', resource: ['Búsqueda: threat, vulnerability, risk', 'https://www.youtube.com/results?search_query=amenaza+vulnerabilidad+riesgo+seguridad+informaci%C3%B3n', 'Apoyo introductorio.'], question: '¿Qué es una vulnerabilidad?', options: ['Una debilidad aprovechable', 'El impacto final', 'Un control preventivo'], correct: 0, why: 'La vulnerabilidad abre una posibilidad de explotación.' }
        ] },
        { id: 'risk-2', number: '02', title: 'Gobierno y marcos', summary: 'Compara NIST, ISO, CIS y privacidad sin tratarlos como sinónimos.', topics: [
          { id: 'risk-2-1', title: 'NIST CSF 2.0', explain: 'NIST CSF 2.0 organiza resultados en Govern, Identify, Protect, Detect, Respond y Recover. Sirve para ordenar el programa y conversar sobre resultados, no para reemplazar todo control técnico.', example: 'Un inventario de activos cae en Identify; una política de acceso en Govern; restaurar backups en Recover.', task: 'Relaciona diez actividades de una empresa con las seis funciones NIST.', resource: ['Guía NIST CSF 2.0 en español', 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-resource-overview-guide-spanish-translation', 'Fuente primaria en español.'], question: '¿Qué función ordena políticas y estrategia?', options: ['Govern', 'Detect', 'Recover'], correct: 0, why: 'Govern establece estrategia, expectativas y política.' },
          { id: 'risk-2-2', title: 'ISO 27001, CIS y Ley 29733', explain: 'ISO 27001 define requisitos para un SGSI; CIS Controls ofrece salvaguardas priorizadas; la Ley 29733 orienta la protección de datos personales en Perú. Se pueden alinear, pero responden preguntas distintas.', example: 'ISO ayuda a gobernar el sistema; CIS sugiere controles accionables; privacidad limita cómo recolectas y tratas datos personales.', task: 'Construye una matriz con marco, propósito, evidencia y ejemplo de control.', resource: ['NIST CSF 2.0 · recursos', 'https://www.nist.gov/cyberframework', 'Punto de partida para contrastar marcos.'], question: '¿Qué diferencia mejor a ISO 27001?', options: ['Define requisitos de un sistema de gestión', 'Es una lista de ataques', 'Es un firewall'], correct: 0, why: 'ISO 27001 se centra en un SGSI auditable.' }
        ] },
        { id: 'risk-3', number: '03', title: 'Riesgo e inteligencia', summary: 'Valora, trata y contextualiza riesgos con evidencia.', topics: [
          { id: 'risk-3-1', title: 'Matriz y tratamiento del riesgo', explain: 'Un registro separa activo, amenaza, vulnerabilidad, probabilidad, impacto, riesgo inherente, control y residual. Tratar es evitar, reducir, transferir o aceptar con responsable y fecha.', example: 'API de pagos: alta probabilidad y alto impacto; reducir con MFA, límites, monitoreo y pruebas, dejando riesgo residual documentado.', task: 'Elabora seis riesgos con escala 1–5, nivel, tratamiento, dueño y evidencia.', resource: ['Búsqueda: ISO 31000 y matriz', 'https://www.youtube.com/results?search_query=ISO+31000+matriz+de+riesgos+probabilidad+impacto', 'Apoyo para practicar escalas.'], question: '¿Qué queda después de aplicar controles?', options: ['Riesgo residual', 'La amenaza original sin cambios', 'El presupuesto'], correct: 0, why: 'El residual permite decidir si el tratamiento fue suficiente.' },
          { id: 'risk-3-2', title: 'OSINT y MITRE ATT&CK', explain: 'OSINT convierte información pública en inteligencia mediante pregunta, alcance, validación y análisis. En ATT&CK, táctica expresa objetivo y técnica expresa cómo se logra.', example: 'Una página de login falsa puede mapearse a una táctica de Credential Access y una técnica concreta, siempre dentro de un análisis autorizado.', task: 'Documenta cinco fuentes públicas de un dominio propio o ficticio y mapea una conducta a táctica y técnica.', resource: ['MITRE ATT&CK · tácticas Enterprise', 'https://attack.mitre.org/tactics/enterprise/', 'Fuente oficial para clasificar conducta adversaria.'], question: '¿Qué agrega valor a OSINT?', options: ['Alcance, validación, fuente y decisión', 'Recolectar datos personales sin límite', 'Una lista larga de enlaces'], correct: 0, why: 'La inteligencia debe ser trazable y útil para decidir.' }
        ] },
        { id: 'risk-4', number: '04', title: 'Controles técnicos', summary: 'Conecta arquitectura, aplicaciones, cloud y DevSecOps.', topics: [
          { id: 'risk-4-1', title: 'Redes, DMZ, IDS/IPS y TLS', explain: 'Firewall controla flujos; DMZ separa servicios expuestos; IDS detecta; IPS puede bloquear; TLS protege comunicación y PKI sostiene confianza mediante certificados.', example: 'Una API pública puede estar en DMZ, con TLS, reglas de firewall, IDS y acceso restringido a la base de datos.', task: 'Dibuja una arquitectura mínima y anota el riesgo que cubre cada control.', resource: ['Búsqueda: firewall, DMZ, IDS e IPS', 'https://www.youtube.com/results?search_query=firewall+DMZ+IDS+IPS+TLS+espa%C3%B1ol', 'Video de apoyo técnico.'], question: '¿Qué diferencia básica hay entre IDS e IPS?', options: ['IDS alerta; IPS puede prevenir o bloquear', 'IDS cifra; IPS hace backups', 'No hay diferencia'], correct: 0, why: 'La prevención en línea distingue al IPS.' },
          { id: 'risk-4-2', title: 'OWASP, cloud y DevSecOps', explain: 'OWASP Top 10 ayuda a reconocer riesgos web; en cloud la responsabilidad se comparte; DevSecOps incorpora SAST, DAST, SCA y controles desde el ciclo de desarrollo.', example: 'SAST revisa código, DAST prueba la app en ejecución y SCA analiza dependencias de terceros.', task: 'Relaciona cuatro riesgos OWASP con control, evidencia y etapa del pipeline.', resource: ['OWASP Top 10:2021', 'https://owasp.org/Top10/2021/', 'Lista oficial para riesgos web.'], question: '¿Qué analiza SCA?', options: ['Dependencias y vulnerabilidades/licencias', 'Solo colores de la interfaz', 'El tráfico físico'], correct: 0, why: 'SCA se enfoca en componentes de terceros.' }
        ] },
        { id: 'risk-5', number: '05', title: 'Pentest y respuesta', summary: 'Evalúa, reporta y responde sin salir del alcance autorizado.', topics: [
          { id: 'risk-5-1', title: 'Pentest responsable', explain: 'Un pentest empieza por autorización, alcance y reglas de compromiso. Luego reconoce, enumera, valida de forma controlada, documenta y reporta; no es ejecutar herramientas contra cualquier IP.', example: 'En Juice Shop local puedes validar una vulnerabilidad y documentar evidencia; contra un sitio ajeno no tienes autorización.', task: 'Redacta un hallazgo con activo, evidencia segura, impacto, severidad, remediación y retest.', resource: ['OWASP Juice Shop', 'https://owasp.org/www-project-juice-shop/', 'Laboratorio vulnerable para practicar legalmente.'], question: '¿Qué debe existir antes del escaneo?', options: ['Autorización, alcance y reglas de compromiso', 'Una IP al azar', 'Un informe final'], correct: 0, why: 'La autorización define el límite legal y técnico.' },
          { id: 'risk-5-2', title: 'SIEM, SOAR, IRP y continuidad', explain: 'SIEM centraliza y correlaciona eventos; SOAR automatiza respuestas; el IRP coordina detección, contención, erradicación, recuperación y lecciones aprendidas; BCP/DRP conectan seguridad con continuidad.', example: 'Un alerta de login anómalo se correlaciona en SIEM, se bloquea con SOAR y se escala según el IRP.', task: 'Diseña el flujo de respuesta a ransomware y separa contención, erradicación, recuperación y comunicación.', resource: ['NIST SP 800-61 Rev. 3', 'https://csrc.nist.gov/pubs/sp/800/61/r3/final', 'Guía oficial de respuesta integrada con CSF 2.0.'], question: '¿Qué diferencia hay entre contención y erradicación?', options: ['Contener limita el daño; erradicar elimina causa y persistencia', 'Son sinónimos', 'Contener es publicar el informe'], correct: 0, why: 'Primero se limita el impacto y luego se elimina la causa.' }
        ] }
      ]
    },
    modelado: {
      parts: [
        { id: 'data-1', number: '01', title: 'Base y modelos', summary: 'Entiende qué modelas antes de dibujar tablas.', topics: [
          { id: 'data-1-1', title: 'Dato, información, BD y SGBD', explain: 'Un dato es un valor; la información es un dato interpretado en contexto; una base organiza datos relacionados; un SGBD permite definir, consultar, proteger y mantenerlos.', example: '“18” es dato; “18 estudiantes aprobaron” es información; la BD guarda estudiantes y notas; el SGBD ejecuta la consulta y controla accesos.', task: 'Clasifica diez elementos de una universidad como dato, información, BD o SGBD.', resource: ['SQLBolt · introducción', 'https://sqlbolt.com/', 'Curso interactivo para entrar desde el modelo relacional.'], question: '¿Qué hace un SGBD?', options: ['Administra la definición, consulta y seguridad de datos', 'Solo dibuja diagramas', 'Reemplaza las reglas del negocio'], correct: 0, why: 'El SGBD gestiona el ciclo de vida de la base de datos.' },
          { id: 'data-1-2', title: 'Modelo conceptual, lógico y físico', explain: 'El conceptual representa el dominio; el lógico lo convierte en relaciones, claves y restricciones; el físico decide tipos, índices y detalles del motor.', example: '“Un estudiante se matricula en muchos cursos” es conceptual; ESTUDIANTE, CURSO y MATRICULA es lógico; índices y tipos SQL son físicos.', task: 'Toma un sistema de matrícula y escribe una decisión para cada nivel.', resource: ['Currículo UNSCH · Modelamiento de Datos', 'https://enlinea2.unsch.edu.pe/wp-content/uploads/2023/05/27_P35_CURRICULO-INGENIERIA-DE-SISTEMAS.pdf', 'Referencia pública de alcance del curso.'], question: '¿En qué nivel aparecen PK y FK?', options: ['Modelo lógico/relacional', 'Solo modelo físico', 'Solo en el enunciado'], correct: 0, why: 'PK y FK describen la estructura lógica y sus relaciones.' }
        ] },
        { id: 'data-2', number: '02', title: 'DER y cardinalidades', summary: 'Lee reglas del negocio y dibuja un modelo que las exprese.', topics: [
          { id: 'data-2-1', title: 'Entidades y atributos', explain: 'Una entidad tiene identidad propia; un atributo describe una entidad; una clave identifica una ocurrencia. Un atributo compuesto puede dividirse y uno multivaluado puede requerir otra estructura.', example: 'ESTUDIANTE tiene id, nombre y correo. Un correo alternativo multivaluado no debe guardarse como “correo1, correo2”.', task: 'Extrae entidades, atributos, clave y posibles atributos compuestos de un enunciado de biblioteca.', resource: ['DER a modelo relacional', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'Video guiado con transformación de ejemplo.'], question: '¿Qué distingue a una entidad?', options: ['Tiene identidad y atributos propios dentro del dominio', 'Es cualquier palabra del texto', 'Siempre es una acción'], correct: 0, why: 'La identidad permite distinguir ocurrencias.' },
          { id: 'data-2-2', title: '1:1, 1:N y N:M', explain: 'La cardinalidad indica cuántas ocurrencias pueden relacionarse. En 1:N, una ocurrencia del lado 1 se asocia con muchas del lado N; en N:M se necesita una relación asociativa al pasar a tablas.', example: 'Un docente dicta muchos cursos: 1:N. Un estudiante lleva muchos cursos y un curso tiene muchos estudiantes: N:M.', task: 'Escribe la regla de negocio y cardinalidad de cinco relaciones antes de dibujarlas.', resource: ['Búsqueda guiada: ERD y cardinalidades', 'https://www.youtube.com/results?search_query=diagrama+entidad+relaci%C3%B3n+cardinalidad+1N+NM', 'Apoyo visual para practicar cardinalidades.'], question: '¿Qué requiere una relación N:M en el modelo relacional?', options: ['Una tabla asociativa', 'Una columna con muchos valores', 'Eliminar una entidad'], correct: 0, why: 'La tabla asociativa conserva ambas referencias y la relación.' }
        ] },
        { id: 'data-3', number: '03', title: 'Conversión a tablas', summary: 'Pasa del diagrama a un esquema relacional íntegro.', topics: [
          { id: 'data-3-1', title: 'Reglas de mapeo ER → relacional', explain: 'Cada entidad fuerte suele convertirse en tabla. Una relación 1:N coloca la FK en el lado N; una N:M genera tabla asociativa; una 1:1 se decide según participación y dependencia.', example: 'MATRICULA(estudiante_id, curso_id, fecha, nota) resuelve la relación N:M y puede usar PK compuesta.', task: 'Convierte un DER de matrícula a tablas y marca PK, FK y nulabilidad.', resource: ['Semana 04 · mapeo', 'materiales/modelado/Semana04.pdf', 'Material local de conversión.'], question: 'En 1:N, ¿dónde suele ir la FK?', options: ['En el lado N', 'Siempre en el lado 1', 'En una tabla aleatoria'], correct: 0, why: 'Cada fila del lado N referencia una fila del lado 1.' },
          { id: 'data-3-2', title: 'Ternarias, recursivas e ISA', explain: 'Las relaciones ternarias conectan tres entidades cuando la combinación completa expresa la regla; las recursivas conectan una entidad consigo misma; ISA representa generalización y especialización.', example: 'EMPLEADO supervisa EMPLEADO es recursiva. PERSONA puede especializarse en ESTUDIANTE y DOCENTE.', task: 'Modela una relación de proveedor, producto y proyecto; luego una jerarquía persona–estudiante/docente.', resource: ['Semana 02–03 · DER', 'materiales/modelado/Semana02.docx', 'Ejemplos locales de relaciones especiales.'], question: '¿Qué expresa una relación recursiva?', options: ['Una relación de una entidad consigo misma', 'Una tabla sin PK', 'Una relación solo N:M'], correct: 0, why: 'La misma entidad aparece en roles distintos.' }
        ] },
        { id: 'data-4', number: '04', title: 'Dependencias y normalización', summary: 'Reduce anomalías entendiendo qué atributo depende de qué clave.', topics: [
          { id: 'data-4-1', title: 'Dependencias funcionales y anomalías', explain: 'X → Y significa que X determina un único Y. Las anomalías de inserción, actualización y eliminación aparecen cuando hechos diferentes se mezclan en la misma relación.', example: 'Si idProducto → nombreProducto, guardar el nombre repetido en cada detalle permite inconsistencias.', task: 'Encuentra cuatro dependencias funcionales y tres anomalías en una tabla de ventas.', resource: ['Normalización en Berkeley', 'https://courses.ischool.berkeley.edu/i202/f97/Lecture8/Lecture8.html', 'Lectura universitaria con ejemplos.'], question: '¿Qué expresa idCliente → nombreCliente?', options: ['El cliente determina un único nombre', 'El nombre determina todos los clientes', 'Una cardinalidad N:M'], correct: 0, why: 'La flecha indica determinación funcional.' },
          { id: 'data-4-2', title: '1FN, 2FN y 3FN', explain: '1FN elimina grupos repetidos y exige valores atómicos. 2FN elimina dependencias parciales de una clave compuesta. 3FN elimina dependencias transitivas de la clave.', example: 'En DETALLE(nroFactura, codProducto, nombreProducto, cantidad), nombreProducto depende de codProducto; separar PRODUCTO evita dependencia parcial.', task: 'Normaliza VENTA hasta 3FN y justifica cada separación con la dependencia que corriges.', resource: ['Database normalization 1NF–3NF', 'https://www.youtube.com/watch?v=GFQaEYEc8_8', 'Video con recorrido paso a paso.'], question: '¿Qué corrige principalmente la 3FN?', options: ['Dependencias transitivas', 'La ausencia de una interfaz', 'Todos los duplicados posibles'], correct: 0, why: '3FN busca que los atributos no clave dependan directamente de la clave.' }
        ] },
        { id: 'data-5', number: '05', title: 'Álgebra y SQL', summary: 'Formula la pregunta, exprésala en álgebra y ejecútala en SQL.', topics: [
          { id: 'data-5-1', title: 'Selección, proyección y join', explain: 'Selección σ filtra filas; proyección π elige columnas; join combina relaciones con una condición. La expresión algebraica ayuda a razonar el resultado antes de escribir sintaxis.', example: 'σ total>100(PEDIDO) corresponde a SELECT * FROM PEDIDO WHERE total > 100;', task: 'Escribe cinco preguntas en álgebra relacional y tradúcelas a SELECT, WHERE y JOIN.', resource: ['Relational Playground', 'https://cs.rit.edu/~dataunitylab/project/relational-playground/', 'Herramienta para explorar álgebra y SQL.'], question: '¿Qué operador filtra filas?', options: ['Selección σ', 'Proyección π', 'Producto sin condición'], correct: 0, why: 'La selección conserva las tuplas que cumplen el predicado.' },
          { id: 'data-5-2', title: 'GROUP BY, HAVING y subconsultas', explain: 'GROUP BY crea grupos; las funciones COUNT, SUM o AVG calculan sobre ellos; HAVING filtra grupos. WHERE filtra filas antes de agrupar. Una subconsulta resuelve una pregunta intermedia.', example: 'SELECT ciudad, COUNT(*) FROM CLIENTE GROUP BY ciudad HAVING COUNT(*) > 2;', task: 'Resuelve consultas de conteo por ciudad, grupos con promedio alto y clientes sin pedidos.', resource: ['PostgreSQL · tutorial SQL', 'https://www.postgresql.org/docs/current/tutorial-sql.html', 'Referencia oficial para consultas, joins y agregaciones.'], question: '¿Qué cláusula filtra grupos ya agregados?', options: ['HAVING', 'WHERE', 'ON siempre'], correct: 0, why: 'HAVING se evalúa sobre grupos resultantes.' }
        ] }
      ]
    }
  };

  const resources = [
    ['riesgos', 'NIST CSF 2.0 · guía oficial en español', 'Fuente primaria para Govern, Identify, Protect, Detect, Respond y Recover.', 'https://www.nist.gov/publications/nist-cybersecurity-framework-20-resource-overview-guide-spanish-translation', 'Oficial'],
    ['riesgos', 'MITRE ATT&CK · tácticas Enterprise', 'Usa las tácticas para responder el “por qué” de la acción adversaria y luego baja a técnica.', 'https://attack.mitre.org/tactics/enterprise/', 'Oficial'],
    ['riesgos', 'OWASP Top 10:2021', 'Lista base del sílabo para reconocer riesgos web y conectarlos con evidencias.', 'https://owasp.org/Top10/2021/', 'Oficial'],
    ['riesgos', 'OSINT Framework', 'Árbol de recursos gratuitos. Úsalo como índice y revisa si el recurso requiere registro.', 'https://osintframework.com/', 'Índice'],
    ['modelado', 'Currículo 2018 · Ingeniería de Sistemas UNSCH', 'Referencia pública que incluye modelo conceptual, ER, relacional, normalización y SQL.', 'https://enlinea2.unsch.edu.pe/wp-content/uploads/2023/05/27_P35_CURRICULO-INGENIERIA-DE-SISTEMAS.pdf', 'UNSCH'],
    ['metodologia', 'Proceso de investigación científica', 'Video con recorrido por problema, objetivos, diseño, variables, instrumentos y errores frecuentes.', 'https://www.youtube.com/watch?v=BU7MTV9imJg', 'YouTube'],
    ['metodologia', 'Cómo redactar un objetivo · UV', 'Recurso educativo universitario para convertir una intención en un objetivo observable.', 'https://innovarua.uv.mx/portal/recursos/ficha/15342/como-redactar-un-objetivo', 'Universidad'],
    ['modelado', 'SQLBolt · curso interactivo', 'Practica SELECT, filtros, ordenamiento, agregaciones y JOIN directamente en el navegador.', 'https://sqlbolt.com/', 'Interactivo'],
    ['modelado', 'PostgreSQL · tutorial SQL', 'Referencia técnica para consultas, joins y funciones de agregación.', 'https://www.postgresql.org/docs/current/tutorial-sql.html', 'Oficial'],
    ['modelado', 'Relational Playground', 'Explora la relación entre expresiones de álgebra relacional y consultas SQL.', 'https://cs.rit.edu/~dataunitylab/project/relational-playground/', 'Interactivo'],
    ['metodologia', 'Metodología · problema y objetivos', 'Video de apoyo para destrabar la formulación del problema. Ver y volver a redactar.', 'https://www.youtube.com/watch?v=3RxG9f-nE90', 'YouTube'],
    ['modelado', 'Modelado ER → relacional', 'Ejemplo guiado del paso del diagrama entidad-relación a tablas.', 'https://www.youtube.com/watch?v=i5c6oREVRFo', 'YouTube'],
    ['modelado', 'Álgebra relacional', 'Selección y proyección explicadas paso a paso.', 'https://www.youtube.com/watch?v=4xKbMxZaJHw', 'YouTube'],
    ['modelado', 'SQL: SELECT, WHERE, GROUP BY, HAVING, ORDER BY y JOIN', 'Video para traducir la lógica de álgebra relacional a consultas SQL.', 'https://www.youtube.com/watch?v=IkWjLBIolso', 'YouTube'],
    ['riesgos', 'OWASP Juice Shop · nivel 1', 'Práctica de aplicación vulnerable dentro de un entorno autorizado.', 'https://www.youtube.com/watch?v=TS5B19dg1ak', 'YouTube']
  ];

  let state = loadState();
  let currentCourse = null;
  let currentDay = null;
  let currentPart = null;
  let currentTopic = null;

  function loadState() {
    const fallback = { route: {}, checks: {}, lessons: {}, topics: {} };
    try { return { ...fallback, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) }; } catch (error) { return fallback; }
  }
  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateProgress(); renderMentor(); }
  function esc(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }
  function courseFor(id) { return courses[id] || { id, short: 'Repaso mixto', code: 'MIX', color: '#22d3ee' }; }
  function lessonFor(day) { return studyLessons.find((lesson) => lesson.day === String(day)); }
  function planFor(id) { return coursePlans[id]; }
  function partFor(courseId, partId) { const plan = planFor(courseId); return plan ? plan.parts.find((part) => part.id === partId) : null; }
  function topicFor(courseId, partId, topicId) { const part = partFor(courseId, partId); return part ? part.topics.find((topic) => topic.id === topicId) : null; }
  function topicDone(topicId) { return Boolean(state.topics[topicId]); }
  function topicUnlocked(part, index) { return index === 0 || topicDone(part.topics[index - 1].id); }
  function lessonDone(day) { return Boolean(state.lessons[day] || state.route[day]); }
  function pendingLesson() { return studyLessons.find((lesson) => !lessonDone(lesson.day)) || studyLessons[studyLessons.length - 1]; }
  function planTopicTotal() { return Object.values(coursePlans).reduce((sum, plan) => sum + plan.parts.reduce((partSum, part) => partSum + part.topics.length, 0), 0); }
  function checkedCount() { return Object.values(state.route).filter(Boolean).length + Object.values(state.checks).filter(Boolean).length + Object.values(state.topics).filter(Boolean).length; }
  function totalCount() { return studyRoute.length + courseOrder.reduce((sum, id) => sum + courses[id].checklist.length, 0) + planTopicTotal(); }
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
    currentCourse = id; currentPart = planFor(id) ? planFor(id).parts[0].id : null; renderCourseDetail(id, currentPart); setView('curso');
    history.replaceState(null, '', `#curso/${id}`);
  }
  function openPart(courseId, partId) {
    currentCourse = courseId; currentPart = partId;
    renderCourseDetail(courseId, partId); setView('curso');
    history.replaceState(null, '', '#curso/' + courseId + '/parte/' + partId);
  }
  function openTopic(courseId, partId, topicId) {
    const topic = topicFor(courseId, partId, topicId); if (!topic) return;
    currentCourse = courseId; currentPart = partId; currentTopic = topicId;
    renderTopic(courseId, partId, topic); setView('tema');
    history.replaceState(null, '', '#tema/' + courseId + '/' + partId + '/' + topicId);
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
    document.querySelector('#exam-grid').innerHTML = courseOrder.map((courseId, index) => {
      const course = courses[courseId]; const strategy = courseStrategy[courseId];
      return `<article class="exam-card fade-up" style="--course-color:${course.color}; --delay:${index * 70}ms">
        <div><span class="course-kicker">${course.code} · ${strategy.difficulty}</span><h3>${course.short}</h3><p>${course.summary}</p></div>
        <div class="exam-footer"><span class="exam-weight">${course.weight}</span><button class="mini-arrow" data-course-target="${course.id}" type="button" aria-label="Abrir ${esc(course.name)}">↗</button></div>
      </article>`;
    }).join('');
  }
  function renderRoute() {
    let previousCourse = null;
    document.querySelector('#route-grid').innerHTML = studyRoute.map(([day, courseId, title, detail, deliverable]) => {
      const course = courseFor(courseId); const done = Boolean(state.route[day]);
      const strategy = courseStrategy[courseId];
      const blockHeading = previousCourse === courseId ? '' : `<div class="route-block-heading" style="--course-color:${course.color}"><span class="course-kicker">${strategy.block}</span><strong>${course.short}</strong><span>${strategy.focus}</span></div>`;
      previousCourse = courseId;
      return blockHeading + `<article class="route-card ${done ? 'is-done' : ''}" style="--course-color:${course.color}">
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
  function renderCourseListLegacy() {
    document.querySelector('#course-list').innerHTML = courseOrder.map((courseId) => { const course = courses[courseId]; return `
      <article class="course-list-card" style="--course-color:${course.color}">
        <div><span class="course-kicker">${course.code}</span><h2>${course.name}</h2><span class="muted-label">${course.weight}</span></div>
        <p>${course.summary}</p><button class="button" data-course-target="${course.id}" type="button">Abrir guía <span>↗</span></button>
      </article>`; }).join('');
  }
  function updateDetailProgress(id) {
    const course = courses[id]; if (!course) return;
    const done = course.checklist.filter((_, index) => state.checks[`${id}-${index}`]).length;
    const percent = Math.round((done / course.checklist.length) * 100);
    const number = document.querySelector('#detail-progress-number'); const bar = document.querySelector('#detail-progress-bar');
    if (number) number.textContent = `${percent}%`; if (bar) bar.style.width = `${percent}%`;
  }
  function renderCourseDetailLegacy(id) {
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
  function partDone(part) { return part.topics.every((topic) => topicDone(topic.id)); }
  function partUnlocked(plan, index) { return index === 0 || partDone(plan.parts[index - 1]); }
  function nextTopic(courseId, partId, topicId) {
    const part = partFor(courseId, partId); if (!part) return null;
    const index = part.topics.findIndex((topic) => topic.id === topicId);
    return index >= 0 && part.topics[index + 1] ? part.topics[index + 1] : null;
  }
  function resourcesForTopic(courseId, topic) {
    const candidates = [topic.resource, ...(topicResourcePacks[courseId] || [])].filter(Boolean);
    const seen = new Set();
    return candidates.filter((item) => {
      if (seen.has(item[1])) return false;
      seen.add(item[1]);
      return true;
    }).slice(0, 4);
  }
  function renderCourseDetail(id, partId) {
    const course = courses[id]; const plan = planFor(id); if (!course || !plan) return;
    const selected = partFor(id, partId) || plan.parts[0];
    currentCourse = id; currentPart = selected.id;
    const completed = plan.parts.reduce((sum, part) => sum + part.topics.filter((topic) => topicDone(topic.id)).length, 0);
    const total = plan.parts.reduce((sum, part) => sum + part.topics.length, 0);
    const parts = plan.parts.map((part, index) => {
      const unlocked = partUnlocked(plan, index); const done = partDone(part);
      return '<button class="plan-part ' + (part.id === selected.id ? 'is-selected ' : '') + (done ? 'is-done ' : '') + '" data-part-course="' + id + '" data-part-id="' + part.id + '" type="button" ' + (unlocked ? '' : 'disabled') + '><span class="plan-part-number">' + part.number + '</span><span><strong>' + esc(part.title) + '</strong><small>' + esc(part.summary) + '</small></span><b>' + (done ? '✓' : (unlocked ? '→' : '🔒')) + '</b></button>';
    }).join('');
    const topics = selected.topics.map((topic, index) => {
      const done = topicDone(topic.id); const unlocked = topicUnlocked(selected, index);
      return '<button class="topic-card ' + (done ? 'is-done ' : '') + (unlocked ? '' : 'is-locked') + '" data-topic-course="' + id + '" data-topic-part="' + selected.id + '" data-topic-id="' + topic.id + '" type="button" ' + (unlocked ? '' : 'disabled') + '><span class="topic-index">' + String(index + 1).padStart(2, '0') + '</span><span class="topic-card-copy"><strong>' + esc(topic.title) + '</strong><small>' + esc(topic.explain) + '</small><em>' + (done ? 'Completado · puedes repasar' : (unlocked ? 'Abrir subtema →' : 'Responde el subtema anterior para desbloquear')) + '</em></span><span class="topic-state">' + (done ? '✓' : (unlocked ? '↗' : '🔒')) + '</span></button>';
    }).join('');
    const checklist = course.checklist.map((item, index) => '<label><input type="checkbox" data-course-check="' + id + '-' + index + '" ' + (state.checks[id + '-' + index] ? 'checked' : '') + ' /><span>' + esc(item) + '</span></label>').join('');
    document.querySelector('#course-detail').innerHTML =
      '<div class="plan-hero" style="--course-color:' + course.color + '"><div class="plan-hero-copy"><span class="course-kicker">' + esc(course.code) + ' · guía por partes</span><h1>' + esc(course.name) + '</h1><p>' + esc(course.summary) + '</p><div class="plan-proof"><span>5 partes</span><span>' + total + ' subtemas</span><span>' + completed + '/' + total + ' completados</span></div></div><div class="plan-progress panel"><span class="eyebrow">Avance de la guía</span><strong>' + Math.round((completed / total) * 100) + '%</strong><div class="detail-progress"><span style="width:' + Math.round((completed / total) * 100) + '%"></span></div><p>Los subtemas se desbloquean al responder correctamente. Puedes volver a cualquiera ya completado.</p></div></div>' +
      '<div class="plan-layout"><aside class="plan-parts panel"><div class="card-topline"><div><p class="eyebrow">Plan de aprendizaje</p><h2>Partes del curso</h2></div><span class="signal-mark">◈</span></div><div class="plan-part-list">' + parts + '</div></aside><section class="plan-content panel"><div class="plan-content-head"><div><span class="eyebrow">Parte ' + esc(selected.number) + '</span><h2>' + esc(selected.title) + '</h2><p>' + esc(selected.summary) + '</p></div><span class="part-count">' + selected.topics.filter((topic) => topicDone(topic.id)).length + '/' + selected.topics.length + '</span></div><div class="topic-list">' + topics + '</div></section></div>' +
      '<article class="detail-section panel plan-checklist"><div class="card-topline"><div><p class="eyebrow">Cuando termines las partes</p><h2>Prueba de dominio del curso</h2></div><span class="muted-label">No marques por leer</span></div><div class="detail-checklist">' + checklist + '</div>' + (course.securityNote ? '<div class="security-note">' + esc(course.securityNote) + '</div>' : '') + '</article>';
  }
  function renderTopic(courseId, partId, topic) {
    const course = courses[courseId]; const part = partFor(courseId, partId); if (!course || !part) return;
    const next = nextTopic(courseId, partId, topic.id);
    const topicResources = resourcesForTopic(courseId, topic);
    const resource = topicResources.map((item, index) => '<a class="topic-resource" href="' + esc(item[1]) + '" target="_blank" rel="noopener"><span><strong>' + (index === 0 ? '01 · ' : String(index + 1).padStart(2, '0') + ' · ') + esc(item[0]) + '</strong><small>' + esc(item[2]) + '</small></span><span>Abrir ↗</span></a>').join('');
    const options = topic.options.map((option, index) => '<button class="quiz-option topic-answer" type="button" data-topic-answer data-topic-course="' + courseId + '" data-topic-part="' + partId + '" data-topic-id="' + topic.id + '" data-correct="' + (index === topic.correct) + '">' + esc(option) + '</button>').join('');
    const done = topicDone(topic.id);
    let continuation = '';
    if (done && next) continuation = '<button class="button button-primary" data-topic-next data-topic-course="' + courseId + '" data-topic-part="' + partId + '" data-topic-id="' + next.id + '" type="button">Siguiente subtema <span>→</span></button>';
    if (done && !next) {
      const plan = planFor(courseId); const partIndex = plan.parts.findIndex((item) => item.id === partId); const nextPart = plan.parts[partIndex + 1];
      continuation = nextPart ? '<button class="button button-primary" data-part-course="' + courseId + '" data-part-id="' + nextPart.id + '" type="button">Abrir Parte ' + nextPart.number + ' <span>→</span></button>' : '<button class="button button-secondary" data-course-target="' + courseId + '" type="button">Volver al plan <span>↗</span></button>';
    }
    document.querySelector('#topic-back-button').dataset.topicBackCourse = courseId;
    document.querySelector('#topic-back-button').dataset.topicBackPart = partId;
    document.querySelector('#topic-detail').innerHTML =
      '<div class="topic-hero" style="--course-color:' + course.color + '"><div><span class="course-kicker">' + esc(course.code) + ' · Parte ' + esc(part.number) + ' · subtema</span><h1>' + esc(topic.title) + '</h1><p>Aprende la idea, contrástala con el recurso y responde para desbloquear el siguiente subtema.</p></div><span class="topic-hero-mark">' + (done ? '✓' : '0' + (part.topics.findIndex((item) => item.id === topic.id) + 1)) + '</span></div>' +
      '<div class="topic-layout"><article class="topic-reading panel"><p class="eyebrow">Explicación</p><h2>Qué significa</h2><p class="topic-explain">' + esc(topic.explain) + '</p><div class="topic-example"><span>Ejemplo</span><p>' + esc(topic.example) + '</p></div><div class="topic-task"><span>Hazlo ahora</span><p>' + esc(topic.task) + '</p></div><div class="topic-source-block"><div class="card-topline"><p class="eyebrow">Ruta de recursos</p><span class="muted-label">Explica → practica → verifica</span></div>' + resource + '</div></article><article class="topic-check panel"><p class="eyebrow">Comprueba antes de avanzar</p><h2>Pregunta de control</h2><p class="topic-question">' + esc(topic.question) + '</p><div class="quiz-options">' + options + '</div><p class="quiz-feedback" id="topic-feedback"></p><p class="quiz-why" id="topic-why">' + (done ? 'Correcto. Ya puedes continuar.' : '') + '</p><div class="topic-continuation">' + continuation + '</div></article></div>';
  }
  function renderCourseList() {
    document.querySelector('#course-list').innerHTML = courseOrder.map((courseId) => {
      const course = courses[courseId]; const strategy = courseStrategy[courseId];
      const plan = planFor(course.id); const topicTotal = plan.parts.reduce((sum, part) => sum + part.topics.length, 0); const topicDoneCount = plan.parts.reduce((sum, part) => sum + part.topics.filter((topic) => topicDone(topic.id)).length, 0);
      return '<article class="course-list-card course-plan-card" style="--course-color:' + course.color + '"><div><span class="course-kicker">' + esc(strategy.block) + '</span><h2>' + esc(course.name) + '</h2><span class="difficulty-label">' + esc(strategy.difficulty) + '</span></div><div class="course-plan-copy"><p>' + esc(course.summary) + '</p><div class="course-plan-meta"><span>5 partes</span><span>' + topicDoneCount + '/' + topicTotal + ' subtemas</span><span>' + esc(strategy.focus) + '</span></div></div><button class="button" data-course-target="' + course.id + '" type="button">Abrir plan <span>↗</span></button></article>';
    }).join('');
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
        '<div class="lesson-syllabus"><span class="eyebrow">Qué cubre este día</span><strong>' + esc(course.short) + '</strong><span>' + esc(lesson.syllabus) + '</span></div>' +
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
      const topicBack = event.target.closest('[data-topic-back]'); if (topicBack) { openPart(topicBack.dataset.topicBackCourse, topicBack.dataset.topicBackPart); return; }
      const partTarget = event.target.closest('[data-part-course]'); if (partTarget) { openPart(partTarget.dataset.partCourse, partTarget.dataset.partId); return; }
      const topicTarget = event.target.closest('[data-topic-course]'); if (topicTarget && !event.target.closest('[data-topic-answer]') && !event.target.closest('[data-topic-next]')) { openTopic(topicTarget.dataset.topicCourse, topicTarget.dataset.topicPart, topicTarget.dataset.topicId); return; }
      const topicNext = event.target.closest('[data-topic-next]'); if (topicNext) { openTopic(topicNext.dataset.topicCourse, topicNext.dataset.topicPart, topicNext.dataset.topicId); return; }
      const topicAnswer = event.target.closest('[data-topic-answer]'); if (topicAnswer) {
        const courseId = topicAnswer.dataset.topicCourse; const partId = topicAnswer.dataset.topicPart; const topicId = topicAnswer.dataset.topicId; const topic = topicFor(courseId, partId, topicId); const feedback = document.querySelector('#topic-feedback'); const why = document.querySelector('#topic-why'); const correct = topicAnswer.dataset.correct === 'true';
        document.querySelectorAll('[data-topic-answer]').forEach((button) => button.classList.remove('is-correct', 'is-wrong'));
        topicAnswer.classList.add(correct ? 'is-correct' : 'is-wrong');
        if (correct) { state.topics[topicId] = true; saveState(); renderTopic(courseId, partId, topic); showToast('Respuesta correcta. Subtema desbloqueado.'); } else { feedback.textContent = 'Todavía no. Revisa la explicación y vuelve a intentarlo.'; feedback.className = 'quiz-feedback is-visible is-bad'; why.textContent = topic.explain; why.className = 'quiz-why is-visible'; }
        return;
      }
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
    document.querySelector('#reset-progress').addEventListener('click', () => { if (window.confirm('¿Reiniciar todos los checks de la ruta?')) { state = { route: {}, checks: {}, lessons: {}, topics: {} }; saveState(); renderRoute(); decorateRouteCards(); if (currentCourse) renderCourseDetail(currentCourse, currentPart); if (currentDay) renderLesson(lessonFor(currentDay)); if (currentTopic) renderTopic(currentCourse, currentPart, topicFor(currentCourse, currentPart, currentTopic)); showToast('Progreso reiniciado.'); } });
    document.querySelector('#global-search').addEventListener('input', (event) => { const query = event.target.value.trim().toLowerCase(); document.querySelectorAll('[data-resource-search]').forEach((card) => card.classList.toggle('is-hidden', Boolean(query) && !card.dataset.resourceSearch.includes(query))); if (query) { setView('recursos'); history.replaceState(null, '', '#recursos'); } });
  }
  function hydrateFromHash() {
    const hash = window.location.hash.replace('#', '');
    const pieces = hash.split('/');
    if (hash.startsWith('tema/') && pieces.length >= 4) openTopic(pieces[1], pieces[2], pieces[3]);
    else if (hash.startsWith('curso/') && pieces[2] === 'parte' && pieces[3]) openPart(pieces[1], pieces[3]);
    else if (hash.startsWith('curso/')) openCourse(pieces[1]);
    else if (hash.startsWith('dia/')) openLesson(pieces[1]);
    else if (['mentor', 'inicio', 'ruta', 'cursos', 'recursos'].includes(hash)) setView(hash);
    else setView('mentor');
  }
  renderExamCards(); renderRoute(); decorateRouteCards(); renderCourseList(); renderResources(); bindEvents(); updateProgress(); renderMentor(); hydrateFromHash();
})();
