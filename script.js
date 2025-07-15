const malla = {
    "I Semestre": [
        { nombre: "Introducción a la Sociología", id: "intro_sociologia", creditos: 3 },
        { nombre: "Sociedad Colombiana del Siglo XIX", id: "sociedad_xix", creditos: 3 },
        { nombre: "Software Aplicado a las Ciencias Sociales", id: "software", creditos: 3 },
        { nombre: "Estructura de la Sociedad Moderna I", id: "estructura_i", creditos: 3 },
        { nombre: "Inglés I", id: "ingles_i", creditos: 3 }
    ],
    "II Semestre": [
        { nombre: "Análisis de Datos Cuantitativos", id: "analisis_datos", creditos: 3 },
        { nombre: "Sociedad Colombiana del Siglo XX", id: "sociedad_xx", creditos: 3 },
        { nombre: "Teoría Sociológica: Durkheim", id: "durkheim", creditos: 3 },
        { nombre: "Estructura de la Sociedad Moderna II", id: "estructura_ii", creditos: 3 },
        { nombre: "Inglés II", id: "ingles_ii", creditos: 3, prerreq: ["ingles_i"] }
    ],
    "III Semestre": [
        { nombre: "Demografía", id: "demografia", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Espacio y Sociedad", id: "espacio_sociedad", creditos: 3 },
        { nombre: "Optativa: Sociologías Temáticas I", id: "tematicas_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Teoría Sociológica: Marx", id: "marx", creditos: 3 },
        { nombre: "Libre Elección I", id: "libre_i", creditos: 3 },
        { nombre: "Inglés III", id: "ingles_iii", creditos: 3, prerreq: ["ingles_i", "ingles_ii"] }
    ],
    "IV Semestre": [
        { nombre: "Métodos Cuantitativos", id: "metodos_cuanti", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Taller I: Documentación e Investigación", id: "taller_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Optativa: Sociologías Temáticas II", id: "tematicas_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Teoría Sociológica: Weber", id: "weber", creditos: 3 },
        { nombre: "Libre Elección II", id: "libre_ii", creditos: 3 },
        { nombre: "Inglés IV", id: "ingles_iv", creditos: 3, prerreq: ["ingles_i", "ingles_ii", "ingles_iii"] }
    ],
    "V Semestre": [
        { nombre: "Indicadores Sociales", id: "indicadores", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Optativa: Sociologías Especiales I", id: "especiales_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Optativa: Sociologías Temáticas III", id: "tematicas_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Optativa: Teorías Sociológicas I", id: "teorias_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección III", id: "libre_iii", creditos: 3 },
        { nombre: "Libre Elección IV", id: "libre_iv", creditos: 3 }
    ],
    "VI Semestre": [
        { nombre: "Métodos Cualitativos", id: "metodos_cuali", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Optativa: Sociologías Especiales II", id: "especiales_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Pensamiento Sociológico Latinoamericano", id: "pensamiento_latam", creditos: 3 },
        { nombre: "Optativa: Teorías Sociológicas II", id: "teorias_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección V", id: "libre_v", creditos: 3 },
        { nombre: "Libre Elección VI", id: "libre_vi", creditos: 3 }
    ],
    "VII Semestre": [
        { nombre: "Optativa: Métodos de Investigación", id: "metodos_invest", creditos: 3 },
        { nombre: "Optativa: Sociologías Especiales III", id: "especiales_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Taller 2: Proyecto de Investigación", id: "taller_ii", creditos: 8, prerreq: ["taller_i", "demografia", "metodos_cuanti", "indicadores", "metodos_cuali", "durkheim", "marx", "weber", "teorias_i", "teorias_ii", "tematicas_i", "tematicas_ii", "especiales_i", "especiales_ii"] },
        { nombre: "Optativa: Teorías Sociológicas III", id: "teorias_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección VII", id: "libre_vii", creditos: 3 }
    ],
    "VIII Semestre": [
        { nombre: "Trabajo de Grado", id: "trabajo_grado", creditos: 10, prerreq: ["taller_ii"] },
        { nombre: "Libre Elección VIII", id: "libre_viii", creditos: 3 },
        { nombre: "Libre Elección IX", id: "libre_ix", creditos: 3 },
        { nombre: "Libre Elección X", id: "libre_x", creditos: 3 }
    ]
};

// Datos de los métodos de investigación
const metodosInvestigacion = [
    { nombre: "Taller de Técnicas Etnográficas", creditos: 3, prerreq: [] },
    { nombre: "Bibliometría", creditos: 3, prerreq: [] },
    { nombre: "Cartografía Social", creditos: 3, prerreq: [] },
    { nombre: "Análisis del Discurso", creditos: 3, prerreq: [] },
    { nombre: "Teoría Fundada", creditos: 3, prerreq: [] },
    { nombre: "Claves para la Investigación Acción Participativa I.A.P.", creditos: 3, prerreq: [] },
    { nombre: "Hermenéutica y Análisis Simbólico", creditos: 3, prerreq: [] },
    { nombre: "Métodos Biográficos", creditos: 3, prerreq: [] },
    { nombre: "Archivística", creditos: 3, prerreq: [] },
    { nombre: "Métodos Históricos", creditos: 3, prerreq: [] },
    { nombre: "Paleografía", creditos: 3, prerreq: [] },
    { nombre: "Etnografía", creditos: 3, prerreq: [] },
    { nombre: "Análisis del Discurso I", creditos: 3, prerreq: [] },
    { nombre: "Métodos Etnográficos", creditos: 3, prerreq: [] },
    { nombre: "Investigación sobre la Intervención Social", creditos: 3, prerreq: [] },
    { nombre: "Cartografía General", creditos: 3, prerreq: [] },
    { nombre: "Introducción al Trabajo Científico", creditos: 3, prerreq: [] },
    { nombre: "Análisis Cualitativo de Datos: Atlas Ti", creditos: 3, prerreq: [] },
    { nombre: "Formulación y evaluación de proyectos sociales", creditos: 3, prerreq: [] },
    { nombre: "Análisis de coyuntura social y política", creditos: 3, prerreq: [] },
    { nombre: "Práctica de Investigación - Lapis", creditos: 4, prerreq: ["metodos_cuali", "metodos_cuanti", "taller_i"] },
    { nombre: "Práctica profesional en sociología", creditos: 4, prerreq: ["metodos_cuali", "metodos_cuanti", "taller_i"] }
];

// Datos de las sociologías temáticas
const sociologiasTematicas = [
    { nombre: "Cultura y Sociedad en América Latina", creditos: 3, prerreq: [] },
    { nombre: "Riesgo, Experticia y Confianza", creditos: 3, prerreq: [] },
    { nombre: "Análisis Histórico y Sociológico del Municipio Colombiano", creditos: 3, prerreq: [] },
    { nombre: "Dominación Sexual y Racial", creditos: 3, prerreq: [] },
    { nombre: "Migración en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Sociología del Conflicto y la Violencia", creditos: 3, prerreq: [] },
    { nombre: "La Planeación en Colombia", creditos: 3, prerreq: [] },
    { nombre: "El Desplazamiento en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Nación y Nacionalismo en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Desarrollismo en América Latina", creditos: 3, prerreq: [] },
    { nombre: "Lo Simbólico en la Sociedad Contemporánea", creditos: 3, prerreq: [] },
    { nombre: "Sociología de lo Simbólico", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Educación Superior", creditos: 3, prerreq: [] },
    { nombre: "Discurso y Hegemonía", creditos: 3, prerreq: [] },
    { nombre: "Vida Cotidiana y Experiencia Urbana Moderna", creditos: 3, prerreq: [] },
    { nombre: "Cultura Política", creditos: 3, prerreq: [] },
    { nombre: "Pensamiento Político en América Latina Siglo XIX", creditos: 3, prerreq: [] },
    { nombre: "El Concepto de Anomia Antes, en y Después de Durkheim", creditos: 3, prerreq: [] },
    { nombre: "Genealogía de las Prácticas del Sí", creditos: 3, prerreq: [] },
    { nombre: "Población y Sociedad, Colombia S. XX", creditos: 3, prerreq: [] },
    { nombre: "Industrialización en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Fuentes del Pensamiento Social", creditos: 3, prerreq: [] },
    { nombre: "Políticas Públicas y Sociales", creditos: 3, prerreq: [] },
    { nombre: "Estructura Social, Cultura y Política en el Mundo Rural Colombiano", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Imaginación y de lo Imaginario", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Memoria", creditos: 3, prerreq: [] },
    { nombre: "Ciencia, Industria e Imperios", creditos: 3, prerreq: [] },
    { nombre: "Cátedra Orlando Fals Borda", creditos: 3, prerreq: [] },
    { nombre: "Gestión y Formulación de Proyectos Sociales", creditos: 4, prerreq: [] },
    { nombre: "Cátedra Ernesto Guhl", creditos: 4, prerreq: [] },
    { nombre: "Socio-antropología de la Economía y la Religión. de Teoría a Praxis", creditos: 4, prerreq: [] },
    { nombre: "Interrogantes y Perspectivas en el Análisis de la Responsabilidad Social Empresarial RSE", creditos: 4, prerreq: [] },
    { nombre: "Religión, Poder y Sociedad", creditos: 4, prerreq: [] },
    { nombre: "Sociedad Civil y lo Público en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Movimientos Sociales de Mujeres Latinoamérica. Espacios, Poderes y Desafíos", creditos: 3, prerreq: [] },
    { nombre: "Sociología Visual", creditos: 3, prerreq: [] },
    { nombre: "Desarrollo Rural con Enfoque Territorial", creditos: 3, prerreq: [] },
    { nombre: "Movilidades y Cultura", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Literatura", creditos: 4, prerreq: [] },
    { nombre: "Ciencia y Tecnología en América Latina", creditos: 4, prerreq: [] },
    { nombre: "Sociología visual y tecnologías del Género", creditos: 4, prerreq: [] },
    { nombre: "Sociología del Dinero", creditos: 4, prerreq: [] },
    { nombre: "Secularización y Pluralización Religiosa en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Clientelismo Político", creditos: 3, prerreq: [] },
    { nombre: "Sociología de Colombia: Objetos y Problemas", creditos: 3, prerreq: [] },
    { nombre: "Guerra Contra las Drogas, Nuevos Paradigmas y Movilización Social", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Violencia y Derechos Humanos", creditos: 4, prerreq: [] },
    { nombre: "Territorios, Geopolítica y Migraciones", creditos: 4, prerreq: [] },
    { nombre: "Sociología del Castigo", creditos: 3, prerreq: [] },
    { nombre: "Sociología de los Cuerpos", creditos: 3, prerreq: [] },
    { nombre: "Sociológica de la Novela", creditos: 3, prerreq: [] }
];

const estado = {};
let metodoSeleccionado = null;
let tematicasSeleccionadas = {
    "tematicas_i": null,
    "tematicas_ii": null,
    "tematicas_iii": null
};

function guardarEstado() {
    // Función para guardar estado si se implementa persistencia
}

function calcularEstadisticas() {
    const totalMaterias = Object.values(malla).flat().length;
    const totalCreditos = Object.values(malla).flat().reduce((sum, ramo) => sum + ramo.creditos, 0);
    const aprobadas = Object.values(estado).filter(Boolean).length;
    const creditosAprobados = Object.values(malla).flat()
        .filter(ramo => estado[ramo.id])
        .reduce((sum, ramo) => sum + ramo.creditos, 0);
    
    return {
        totalMaterias,
        totalCreditos,
        aprobadas,
        creditosAprobados,
        porcentaje: Math.round((aprobadas / totalMaterias) * 100)
    };
}

function actualizarEstadisticas() {
    const stats = calcularEstadisticas();
    document.getElementById('stats').innerHTML = `
        <span>Materias: ${stats.aprobadas}/${stats.totalMaterias}</span>
        <span>Créditos: ${stats.creditosAprobados}/${stats.totalCreditos}</span>
        <span>Progreso: ${stats.porcentaje}%</span>
    `;
}

function mostrarModalMetodos() {
    const modal = document.getElementById('modalMetodos');
    const listaMetodos = document.getElementById('listaMetodos');
    
    // Limpiar contenido anterior
    listaMetodos.innerHTML = '';
    
    // Crear contenedor principal con layout vertical
    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.style.display = 'flex';
    contenedorPrincipal.style.flexDirection = 'column';
    contenedorPrincipal.style.gap = '8px';
    contenedorPrincipal.style.width = '100%';
    
    metodosInvestigacion.forEach(metodo => {
        const div = document.createElement('div');
        div.className = 'metodo-item';
        div.style.display = 'block';
        div.style.width = '100%';
        div.style.boxSizing = 'border-box';
        
        // Verificar si se cumplen los prerrequisitos
        const prerreqCumplidos = metodo.prerreq.every(id => estado[id]);
        
        if (!prerreqCumplidos && metodo.prerreq.length > 0) {
            div.classList.add('bloqueado');
        }
        
        const prerreqTexto = metodo.prerreq.length > 0 
            ? `Prerrequisitos: ${metodo.prerreq.map(id => {
                const materia = Object.values(malla).flat().find(m => m.id === id);
                return materia ? materia.nombre : id;
            }).join(', ')}`
            : 'Sin prerrequisitos';
        
        div.innerHTML = `
            <div class="metodo-nombre">${metodo.nombre}</div>
            <div class="metodo-creditos">${metodo.creditos} créditos</div>
            <div class="metodo-prerreq">${prerreqTexto}</div>
        `;
        
        if (prerreqCumplidos || metodo.prerreq.length === 0) {
            div.addEventListener('click', () => {
                seleccionarMetodo(metodo);
            });
        }
        
        contenedorPrincipal.appendChild(div);
    });
    
    // Agregar el contenedor principal a la lista
    listaMetodos.appendChild(contenedorPrincipal);
    
    // Asegurar que el modal se muestre correctamente
    modal.style.display = 'block';
}

function mostrarModalTematicas(tematicaId) {
    const modal = document.getElementById('modalMetodos');
    const listaMetodos = document.getElementById('listaMetodos');
    
    // Cambiar el título del modal
    const modalHeader = document.querySelector('.modal-header h2');
    modalHeader.textContent = 'Sociología Temática';
    
    // Cambiar el texto del modal
    const modalBodyP = document.querySelector('.modal-body p');
    modalBodyP.textContent = 'Seleccione Sociología Temática a cursar:';
    
    // Limpiar contenido anterior
    listaMetodos.innerHTML = '';
    
    // Crear contenedor principal con layout vertical
    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.style.display = 'flex';
    contenedorPrincipal.style.flexDirection = 'column';
    contenedorPrincipal.style.gap = '8px';
    contenedorPrincipal.style.width = '100%';
    
    // Obtener las temáticas ya seleccionadas
    const tematicasYaSeleccionadas = Object.values(tematicasSeleccionadas).filter(Boolean);
    
    sociologiasTematicas.forEach(tematica => {
        const div = document.createElement('div');
        div.className = 'metodo-item';
        div.style.display = 'block';
        div.style.width = '100%';
        div.style.boxSizing = 'border-box';
        
        // Verificar si se cumplen los prerrequisitos
        const prerreqCumplidos = tematica.prerreq.every(id => estado[id]);
        
        // Verificar si la temática ya está seleccionada en otra optativa
        const yaSeleccionada = tematicasYaSeleccionadas.some(seleccionada => 
            seleccionada && seleccionada.nombre === tematica.nombre
        );
        
        if ((!prerreqCumplidos && tematica.prerreq.length > 0) || yaSeleccionada) {
            div.classList.add('bloqueado');
        }
        
        const prerreqTexto = tematica.prerreq.length > 0 
            ? `Prerrequisitos: ${tematica.prerreq.map(id => {
                const materia = Object.values(malla).flat().find(m => m.id === id);
                return materia ? materia.nombre : id;
            }).join(', ')}`
            : 'Sin prerrequisitos';
        
        div.innerHTML = `
            <div class="metodo-nombre">${tematica.nombre}</div>
            <div class="metodo-creditos">${tematica.creditos} créditos</div>
            <div class="metodo-prerreq">${prerreqTexto}</div>
        `;
        
        if ((prerreqCumplidos || tematica.prerreq.length === 0) && !yaSeleccionada) {
            div.addEventListener('click', () => {
                seleccionarTematica(tematica, tematicaId);
            });
        }
        
        contenedorPrincipal.appendChild(div);
    });
    
    // Agregar el contenedor principal a la lista
    listaMetodos.appendChild(contenedorPrincipal);
    
    // Asegurar que el modal se muestre correctamente
    modal.style.display = 'block';
}

function seleccionarMetodo(metodo) {
    metodoSeleccionado = metodo;
    estado["metodos_invest"] = true;
    
    // Actualizar el nombre de la materia en la malla para mostrar el método seleccionado
    Object.values(malla).flat().forEach(materia => {
        if (materia.id === "metodos_invest") {
            materia.nombreOriginal = materia.nombreOriginal || materia.nombre;
            materia.nombre = `${materia.nombreOriginal} - ${metodo.nombre}`;
        }
    });
    
    cerrarModal();
    guardarEstado();
    crearMalla();
    actualizarEstadisticas();
}

function seleccionarTematica(tematica, tematicaId) {
    tematicasSeleccionadas[tematicaId] = tematica;
    estado[tematicaId] = true;
    
    // Actualizar el nombre de la materia en la malla para mostrar la temática seleccionada
    Object.values(malla).flat().forEach(materia => {
        if (materia.id === tematicaId) {
            materia.nombreOriginal = materia.nombreOriginal || materia.nombre;
            materia.nombre = `${materia.nombreOriginal} - ${tematica.nombre}`;
        }
    });
    
    cerrarModal();
    guardarEstado();
    crearMalla();
    actualizarEstadisticas();
}

function cerrarModal() {
    const modal = document.getElementById('modalMetodos');
    modal.style.display = 'none';
    
    // Restaurar el título y texto original del modal
    const modalHeader = document.querySelector('.modal-header h2');
    modalHeader.textContent = 'Método de Investigación';
    
    const modalBodyP = document.querySelector('.modal-body p');
    modalBodyP.textContent = 'Seleccione Método de Investigación a cursar:';
}

function crearMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    Object.entries(malla).forEach(([semestre, ramos]) => {
        const columna = document.createElement("div");
        columna.className = "semestre";

        const titulo = document.createElement("h2");
        titulo.textContent = semestre;
        columna.appendChild(titulo);

        ramos.forEach(ramo => {
            const div = document.createElement("div");
            div.className = "ramo";
            div.innerHTML = `
                <div>${ramo.nombre}</div>
                <div class="creditos">${ramo.creditos} créditos</div>
            `;

            const aprobado = estado[ramo.id];
            const prerreqCumplidos = (ramo.prerreq || []).every(id => estado[id]);

            if (aprobado) {
                div.classList.add("aprobado");
            } else if (!prerreqCumplidos && ramo.prerreq) {
                div.classList.add("bloqueado");
            }

            div.addEventListener("click", () => {
                if (div.classList.contains("bloqueado")) return;

                // Si es la materia de métodos de investigación y no está aprobada
                if (ramo.id === "metodos_invest" && !estado[ramo.id]) {
                    mostrarModalMetodos();
                    return;
                }

                // Si es una materia de sociologías temáticas y no está aprobada
                if ((ramo.id === "tematicas_i" || ramo.id === "tematicas_ii" || ramo.id === "tematicas_iii") && !estado[ramo.id]) {
                    mostrarModalTematicas(ramo.id);
                    return;
                }

                // Si es la materia de métodos de investigación y ya está aprobada, desmarcarla
                if (ramo.id === "metodos_invest" && estado[ramo.id]) {
                    estado[ramo.id] = false;
                    metodoSeleccionado = null;
                    // Restaurar el nombre original
                    if (ramo.nombreOriginal) {
                        ramo.nombre = ramo.nombreOriginal;
                    }
                } else if ((ramo.id === "tematicas_i" || ramo.id === "tematicas_ii" || ramo.id === "tematicas_iii") && estado[ramo.id]) {
                    // Si es una materia de sociologías temáticas y ya está aprobada, desmarcarla
                    estado[ramo.id] = false;
                    tematicasSeleccionadas[ramo.id] = null;
                    // Restaurar el nombre original
                    if (ramo.nombreOriginal) {
                        ramo.nombre = ramo.nombreOriginal;
                    }
                } else {
                    // Para las demás materias, comportamiento normal
                    estado[ramo.id] = !estado[ramo.id];
                }

                guardarEstado();
                crearMalla();
                actualizarEstadisticas();
            });

            columna.appendChild(div);
        });

        contenedor.appendChild(columna);
    });
}

function resetearMalla() {
    if (confirm("¿Estás seguro de que deseas resetear toda la malla?")) {
        Object.keys(estado).forEach(key => delete estado[key]);
        metodoSeleccionado = null;
        tematicasSeleccionadas = {
            "tematicas_i": null,
            "tematicas_ii": null,
            "tematicas_iii": null
        };
        
        // Restaurar nombres originales
        Object.values(malla).flat().forEach(materia => {
            if (materia.nombreOriginal) {
                materia.nombre = materia.nombreOriginal;
                delete materia.nombreOriginal;
            }
        });
        
        guardarEstado();
        crearMalla();
        actualizarEstadisticas();
    }
}

function imprimirMalla() {
    window.print();
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modalMetodos');
    if (event.target === modal) {
        cerrarModal();
    }
}

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarModal();
    }
});

// Inicializar la aplicación
crearMalla();
actualizarEstadisticas();
// Pegue todo su script.js hasta donde termina actualizarEstadisticas()
// Luego añada esto exactamente igual

const teoriasSociologicas = [
    { nombre: "Georg Simmel", creditos: 3, prerreq: [] },
    { nombre: "Estructural Funcionalismo", creditos: 3, prerreq: [] },
    { nombre: "Etnometodología", creditos: 3, prerreq: [] },
    { nombre: "Interaccionismo Simbólico", creditos: 3, prerreq: [] },
    { nombre: "Anthony Giddens", creditos: 3, prerreq: [] },
    { nombre: "Pierre Bourdieu", creditos: 3, prerreq: [] },
    { nombre: "Fenomenología", creditos: 3, prerreq: [] },
    { nombre: "Alfred Schütz", creditos: 3, prerreq: [] },
    { nombre: "Norbert Elías", creditos: 3, prerreq: [] },
    { nombre: "Erving Goffman", creditos: 3, prerreq: [] },
    { nombre: "Raymond Williams", creditos: 3, prerreq: [] },
    { nombre: "Jürgen Habermas", creditos: 3, prerreq: [] },
    { nombre: "Niklas Luhmann", creditos: 3, prerreq: [] },
    { nombre: "Teoría del Conflicto", creditos: 3, prerreq: [] },
    { nombre: "Teoría crítica (Escuela de Frankfurt)", creditos: 3, prerreq: [] },
    { nombre: "Escuela de Chicago", creditos: 3, prerreq: [] },
    { nombre: "Michel Foucault", creditos: 3, prerreq: [] },
    { nombre: "Jeffrey Alexander", creditos: 3, prerreq: [] },
    { nombre: "Ulrich Beck", creditos: 3, prerreq: [] },
    { nombre: "Dialéctica y Sociología", creditos: 3, prerreq: [] },
    { nombre: "Hegel y la Sociología", creditos: 3, prerreq: [] },
    { nombre: "Profundización en El Capital de Karl Marx", creditos: 3, prerreq: [] },
    { nombre: "Boaventura de Sousa Santos", creditos: 3, prerreq: [] },
    { nombre: "Georg Simmel - Zygmunt Bauman", creditos: 3, prerreq: [] },
    { nombre: "Jean Baudrillard y Michel Maffesoli", creditos: 3, prerreq: [] },
    { nombre: "Pierre Bourdieu - Anthony Giddens - Aproximación Comparada", creditos: 3, prerreq: [] },
    { nombre: "Zygmunt Bauman", creditos: 3, prerreq: [] },
    { nombre: "Contemporánea Berger y Luckmann", creditos: 4, prerreq: [] },
    { nombre: "Teorías de la agencia", creditos: 4, prerreq: [] },
    { nombre: "Hermenéutica y sociología", creditos: 3, prerreq: [] },
    { nombre: "Richard Sennett", creditos: 4, prerreq: [] },
    { nombre: "Orlando Fals Borda: Praxis, método y teoría", creditos: 3, prerreq: [] },
    { nombre: "Teorías Sociales en el siglo 21", creditos: 3, prerreq: [] },
    { nombre: "Sociología Relacional", creditos: 3, prerreq: [] },
];

let teoricasSeleccionadas = {
    "teorias_i": null,
    "teorias_ii": null,
    "teorias_iii": null
};

function mostrarModalTeoricas(teoricaId) {
    const modal = document.getElementById('modalMetodos');
    const listaMetodos = document.getElementById('listaMetodos');

    // Cambiar encabezado
    document.querySelector('.modal-header h2').textContent = 'Teoría Sociológica';
    document.querySelector('.modal-body p').textContent = 'Seleccione Teoría Sociológica a cursar:';
    listaMetodos.innerHTML = '';

    const contenedor = document.createElement('div');
    contenedor.style.display = 'flex';
    contenedor.style.flexDirection = 'column';
    contenedor.style.gap = '8px';

    const teoriasYaSeleccionadas = Object.values(teoricasSeleccionadas).filter(Boolean);

    teoriasSociologicas.forEach(teoria => {
        const div = document.createElement('div');
        div.className = 'metodo-item';
        div.style.display = 'block';

        const prerreqCumplidos = teoria.prerreq.every(id => estado[id]);
        const yaSeleccionada = teoriasYaSeleccionadas.some(sel => sel && sel.nombre === teoria.nombre);

        if ((!prerreqCumplidos && teoria.prerreq.length > 0) || yaSeleccionada) {
            div.classList.add('bloqueado');
        }

        const prerreqTexto = teoria.prerreq.length > 0 
            ? `Prerrequisitos: ${teoria.prerreq.map(id => {
                const materia = Object.values(malla).flat().find(m => m.id === id);
                return materia ? materia.nombre : id;
            }).join(', ')}`
            : 'Sin prerrequisitos';

        div.innerHTML = `
            <div class="metodo-nombre">${teoria.nombre}</div>
            <div class="metodo-creditos">${teoria.creditos} créditos</div>
            <div class="metodo-prerreq">${prerreqTexto}</div>
        `;

        if ((prerreqCumplidos || teoria.prerreq.length === 0) && !yaSeleccionada) {
            div.addEventListener('click', () => {
                seleccionarTeorica(teoria, teoricaId);
            });
        }

        contenedor.appendChild(div);
    });

    listaMetodos.appendChild(contenedor);
    modal.style.display = 'block';
}

function seleccionarTeorica(teoria, teoricaId) {
    teoricasSeleccionadas[teoricaId] = teoria;
    estado[teoricaId] = true;

    Object.values(malla).flat().forEach(materia => {
        if (materia.id === teoricaId) {
            materia.nombreOriginal = materia.nombreOriginal || materia.nombre;
            materia.nombre = `${materia.nombreOriginal} - ${teoria.nombre}`;
        }
    });

    cerrarModal();
    guardarEstado();
    crearMalla();
    actualizarEstadisticas();
}

// Dentro de crearMalla, añade esta lógica como ya tienes para tematicas
// Justo dentro del evento de click de cada ramo:

if ((ramo.id === "teorias_i" || ramo.id === "teorias_ii" || ramo.id === "teorias_iii") && !estado[ramo.id]) {
    mostrarModalTeoricas(ramo.id);
    return;
}
if ((ramo.id === "teorias_i" || ramo.id === "teorias_ii" || ramo.id === "teorias_iii") && estado[ramo.id]) {
    estado[ramo.id] = false;
    teoricasSeleccionadas[ramo.id] = null;
    if (ramo.nombreOriginal) {
        ramo.nombre = ramo.nombreOriginal;
    }
}

// Dentro de resetearMalla(), agrega:
teoricasSeleccionadas = {
    "teorias_i": null,
    "teorias_ii": null,
    "teorias_iii": null
};





























// Datos de la malla curricular
const malla = {
    "I Semestre": [
        { nombre: "Introducción a la Sociología", id: "intro_sociologia", creditos: 3 },
        { nombre: "Sociedad Colombiana del Siglo XIX", id: "sociedad_xix", creditos: 3 },
        { nombre: "Software Aplicado a las Ciencias Sociales", id: "software", creditos: 3 },
        { nombre: "Estructura de la Sociedad Moderna I", id: "estructura_i", creditos: 3 },
        { nombre: "Inglés I", id: "ingles_i", creditos: 3 }
    ],
    "II Semestre": [
        { nombre: "Análisis de Datos Cuantitativos", id: "analisis_datos", creditos: 3 },
        { nombre: "Sociedad Colombiana del Siglo XX", id: "sociedad_xx", creditos: 3 },
        { nombre: "Teoría Sociológica: Durkheim", id: "durkheim", creditos: 3 },
        { nombre: "Estructura de la Sociedad Moderna II", id: "estructura_ii", creditos: 3 },
        { nombre: "Inglés II", id: "ingles_ii", creditos: 3, prerreq: ["ingles_i"] }
    ],
    "III Semestre": [
        { nombre: "Demografía", id: "demografia", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Espacio y Sociedad", id: "espacio_sociedad", creditos: 3 },
        { nombre: "Optativa: Sociologías Temáticas I", id: "tematicas_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Teoría Sociológica: Marx", id: "marx", creditos: 3 },
        { nombre: "Libre Elección I", id: "libre_i", creditos: 3 },
        { nombre: "Inglés III", id: "ingles_iii", creditos: 3, prerreq: ["ingles_i", "ingles_ii"] }
    ],
    "IV Semestre": [
        { nombre: "Métodos Cuantitativos", id: "metodos_cuanti", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Taller I: Documentación e Investigación", id: "taller_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Optativa: Sociologías Temáticas II", id: "tematicas_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Teoría Sociológica: Weber", id: "weber", creditos: 3 },
        { nombre: "Libre Elección II", id: "libre_ii", creditos: 3 },
        { nombre: "Inglés IV", id: "ingles_iv", creditos: 3, prerreq: ["ingles_i", "ingles_ii", "ingles_iii"] }
    ],
    "V Semestre": [
        { nombre: "Indicadores Sociales", id: "indicadores", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Optativa: Sociologías Especiales I", id: "especiales_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Optativa: Sociologías Temáticas III", id: "tematicas_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i"] },
        { nombre: "Optativa: Teorías Sociológicas I", id: "teorias_i", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección III", id: "libre_iii", creditos: 3 },
        { nombre: "Libre Elección IV", id: "libre_iv", creditos: 3 }
    ],
    "VI Semestre": [
        { nombre: "Métodos Cualitativos", id: "metodos_cuali", creditos: 3, prerreq: ["analisis_datos", "intro_sociologia", "sociedad_xix", "software"] },
        { nombre: "Optativa: Sociologías Especiales II", id: "especiales_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Pensamiento Sociológico Latinoamericano", id: "pensamiento_latam", creditos: 3 },
        { nombre: "Optativa: Teorías Sociológicas II", id: "teorias_ii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección V", id: "libre_v", creditos: 3 },
        { nombre: "Libre Elección VI", id: "libre_vi", creditos: 3 }
    ],
    "VII Semestre": [
        { nombre: "Optativa: Métodos de Investigación", id: "metodos_invest", creditos: 3 },
        { nombre: "Optativa: Sociologías Especiales III", id: "especiales_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Taller 2: Proyecto de Investigación", id: "taller_ii", creditos: 8, prerreq: ["taller_i", "demografia", "metodos_cuanti", "indicadores", "metodos_cuali", "durkheim", "marx", "weber", "teorias_i", "teorias_ii", "tematicas_i", "tematicas_ii", "especiales_i", "especiales_ii"] },
        { nombre: "Optativa: Teorías Sociológicas III", id: "teorias_iii", creditos: 3, prerreq: ["intro_sociologia", "sociedad_xix", "software", "estructura_i", "durkheim", "marx", "weber"] },
        { nombre: "Libre Elección VII", id: "libre_vii", creditos: 3 }
    ],
    "VIII Semestre": [
        { nombre: "Trabajo de Grado", id: "trabajo_grado", creditos: 10, prerreq: ["taller_ii"] },
        { nombre: "Libre Elección VIII", id: "libre_viii", creditos: 3 },
        { nombre: "Libre Elección IX", id: "libre_ix", creditos: 3 },
        { nombre: "Libre Elección X", id: "libre_x", creditos: 3 }
    ]
};

// Datos de los métodos de investigación
const metodosInvestigacion = [
    { nombre: "Taller de Técnicas Etnográficas", creditos: 3, prerreq: [] },
    { nombre: "Bibliometría", creditos: 3, prerreq: [] },
    { nombre: "Cartografía Social", creditos: 3, prerreq: [] },
    { nombre: "Análisis del Discurso", creditos: 3, prerreq: [] },
    { nombre: "Teoría Fundada", creditos: 3, prerreq: [] },
    { nombre: "Claves para la Investigación Acción Participativa I.A.P.", creditos: 3, prerreq: [] },
    { nombre: "Hermenéutica y Análisis Simbólico", creditos: 3, prerreq: [] },
    { nombre: "Métodos Biográficos", creditos: 3, prerreq: [] },
    { nombre: "Archivística", creditos: 3, prerreq: [] },
    { nombre: "Métodos Históricos", creditos: 3, prerreq: [] },
    { nombre: "Paleografía", creditos: 3, prerreq: [] },
    { nombre: "Etnografía", creditos: 3, prerreq: [] },
    { nombre: "Análisis del Discurso I", creditos: 3, prerreq: [] },
    { nombre: "Métodos Etnográficos", creditos: 3, prerreq: [] },
    { nombre: "Investigación sobre la Intervención Social", creditos: 3, prerreq: [] },
    { nombre: "Cartografía General", creditos: 3, prerreq: [] },
    { nombre: "Introducción al Trabajo Científico", creditos: 3, prerreq: [] },
    { nombre: "Análisis Cualitativo de Datos: Atlas Ti", creditos: 3, prerreq: [] },
    { nombre: "Formulación y evaluación de proyectos sociales", creditos: 3, prerreq: [] },
    { nombre: "Análisis de coyuntura social y política", creditos: 3, prerreq: [] },
    { nombre: "Práctica de Investigación - Lapis", creditos: 4, prerreq: ["metodos_cuali", "metodos_cuanti", "taller_i"] },
    { nombre: "Práctica profesional en sociología", creditos: 4, prerreq: ["metodos_cuali", "metodos_cuanti", "taller_i"] }
];

// Datos de las sociologías temáticas
const sociologiasTematicas = [
    { nombre: "Cultura y Sociedad en América Latina", creditos: 3, prerreq: [] },
    { nombre: "Riesgo, Experticia y Confianza", creditos: 3, prerreq: [] },
    { nombre: "Análisis Histórico y Sociológico del Municipio Colombiano", creditos: 3, prerreq: [] },
    { nombre: "Dominación Sexual y Racial", creditos: 3, prerreq: [] },
    { nombre: "Migración en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Sociología del Conflicto y la Violencia", creditos: 3, prerreq: [] },
    { nombre: "La Planeación en Colombia", creditos: 3, prerreq: [] },
    { nombre: "El Desplazamiento en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Nación y Nacionalismo en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Desarrollismo en América Latina", creditos: 3, prerreq: [] },
    { nombre: "Lo Simbólico en la Sociedad Contemporánea", creditos: 3, prerreq: [] },
    { nombre: "Sociología de lo Simbólico", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Educación Superior", creditos: 3, prerreq: [] },
    { nombre: "Discurso y Hegemonía", creditos: 3, prerreq: [] },
    { nombre: "Vida Cotidiana y Experiencia Urbana Moderna", creditos: 3, prerreq: [] },
    { nombre: "Cultura Política", creditos: 3, prerreq: [] },
    { nombre: "Pensamiento Político en América Latina Siglo XIX", creditos: 3, prerreq: [] },
    { nombre: "El Concepto de Anomia Antes, en y Después de Durkheim", creditos: 3, prerreq: [] },
    { nombre: "Genealogía de las Prácticas del Sí", creditos: 3, prerreq: [] },
    { nombre: "Población y Sociedad, Colombia S. XX", creditos: 3, prerreq: [] },
    { nombre: "Industrialización en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Fuentes del Pensamiento Social", creditos: 3, prerreq: [] },
    { nombre: "Políticas Públicas y Sociales", creditos: 3, prerreq: [] },
    { nombre: "Estructura Social, Cultura y Política en el Mundo Rural Colombiano", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Imaginación y de lo Imaginario", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Memoria", creditos: 3, prerreq: [] },
    { nombre: "Ciencia, Industria e Imperios", creditos: 3, prerreq: [] },
    { nombre: "Cátedra Orlando Fals Borda", creditos: 3, prerreq: [] },
    { nombre: "Gestión y Formulación de Proyectos Sociales", creditos: 4, prerreq: [] },
    { nombre: "Cátedra Ernesto Guhl", creditos: 4, prerreq: [] },
    { nombre: "Socio-antropología de la Economía y la Religión. de Teoría a Praxis", creditos: 4, prerreq: [] },
    { nombre: "Interrogantes y Perspectivas en el Análisis de la Responsabilidad Social Empresarial RSE", creditos: 4, prerreq: [] },
    { nombre: "Religión, Poder y Sociedad", creditos: 4, prerreq: [] },
    { nombre: "Sociedad Civil y lo Público en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Movimientos Sociales de Mujeres Latinoamérica. Espacios, Poderes y Desafíos", creditos: 3, prerreq: [] },
    { nombre: "Sociología Visual", creditos: 3, prerreq: [] },
    { nombre: "Desarrollo Rural con Enfoque Territorial", creditos: 3, prerreq: [] },
    { nombre: "Movilidades y Cultura", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Literatura", creditos: 4, prerreq: [] },
    { nombre: "Ciencia y Tecnología en América Latina", creditos: 4, prerreq: [] },
    { nombre: "Sociología visual y tecnologías del Género", creditos: 4, prerreq: [] },
    { nombre: "Sociología del Dinero", creditos: 4, prerreq: [] },
    { nombre: "Secularización y Pluralización Religiosa en Colombia", creditos: 3, prerreq: [] },
    { nombre: "Clientelismo Político", creditos: 3, prerreq: [] },
    { nombre: "Sociología de Colombia: Objetos y Problemas", creditos: 3, prerreq: [] },
    { nombre: "Guerra Contra las Drogas, Nuevos Paradigmas y Movilización Social", creditos: 3, prerreq: [] },
    { nombre: "Sociología de la Violencia y Derechos Humanos", creditos: 4, prerreq: [] },
    { nombre: "Territorios, Geopolítica y Migraciones", creditos: 4, prerreq: [] },
    { nombre: "Sociología del Castigo", creditos: 3, prerreq: [] },
    { nombre: "Sociología de los Cuerpos", creditos: 3, prerreq: [] },
    { nombre: "Sociológica de la Novela", creditos: 3, prerreq: [] }
];

// Datos de las teorías sociológicas
const teoriasSociologicas = [
    { nombre: "Georg Simmel", creditos: 3, prerreq: [] },
    { nombre: "Estructural Funcionalismo", creditos: 3, prerreq: [] },
    { nombre: "Etnometodología", creditos: 3, prerreq: [] },
    { nombre: "Interaccionismo Simbólico", creditos: 3, prerreq: [] },
    { nombre: "Anthony Giddens", creditos: 3, prerreq: [] },
    { nombre: "Pierre Bourdieu", creditos: 3, prerreq: [] },
    { nombre: "Fenomenología", creditos: 3, prerreq: [] },
    { nombre: "Alfred Schütz", creditos: 3, prerreq: [] },
    { nombre: "Norbert Elías", creditos: 3, prerreq: [] },
    { nombre: "Erving Goffman", creditos: 3, prerreq: [] },
    { nombre: "Raymond Williams", creditos: 3, prerreq: [] },
    { nombre: "Jürgen Habermas", creditos: 3, prerreq: [] },
    { nombre: "Niklas Luhmann", creditos: 3, prerreq: [] },
    { nombre: "Teoría del Conflicto", creditos: 3, prerreq: [] },
    { nombre: "Teoría crítica (Escuela de Frankfurt)", creditos: 3, prerreq: [] },
    { nombre: "Escuela de Chicago", creditos: 3, prerreq: [] },
    { nombre: "Michel Foucault", creditos: 3, prerreq: [] },
    { nombre: "Jeffrey Alexander", creditos: 3, prerreq: [] },
    { nombre: "Ulrich Beck", creditos: 3, prerreq: [] },
    { nombre: "Dialéctica y Sociología", creditos: 3, prerreq: [] },
    { nombre: "Hegel y la Sociología", creditos: 3, prerreq: [] },
    { nombre: "Profundización en El Capital de Karl Marx", creditos: 3, prerreq: [] },
    { nombre: "Boaventura de Sousa Santos", creditos: 3, prerreq: [] },
    { nombre: "Georg Simmel - Zygmunt Bauman", creditos: 3, prerreq: [] },
    { nombre: "Jean Baudrillard y Michel Maffesoli", creditos: 3, prerreq: [] },
    { nombre: "Pierre Bourdieu - Anthony Giddens - Aproximación Comparada", creditos: 3, prerreq: [] },
    { nombre: "Zygmunt Bauman", creditos: 3, prerreq: [] },
    { nombre: "Contemporánea Berger y Luckmann", creditos: 4, prerreq: [] },
    { nombre: "Teorías de la agencia", creditos: 4, prerreq: [] },
    { nombre: "Hermenéutica y sociología", creditos: 3, prerreq: [] },
    { nombre: "Richard Sennett", creditos: 4, prerreq: [] },
    { nombre: "Orlando Fals Borda: Praxis, método y teoría", creditos: 3, prerreq: [] },
    { nombre: "Teorías Sociales en el siglo 21", creditos: 3, prerreq: [] },
    { nombre: "Sociología Relacional", creditos: 3, prerreq: [] }
];

// Variables de estado
const estado = {};
let metodoSeleccionado = null;
let tematicasSeleccionadas = {
    "tematicas_i": null,
    "tematicas_ii": null,
    "tematicas_iii": null
};
let teoricasSeleccionadas = {
    "teorias_i": null,
    "teorias_ii": null,
    "teorias_iii": null
};

// Funciones utilitarias
function guardarEstado() {
    // Función para guardar estado si se implementa persistencia
}

function calcularEstadisticas() {
    const totalMaterias = Object.values(malla).flat().length;
    const totalCreditos = Object.values(malla).flat().reduce((sum, ramo) => sum + ramo.creditos, 0);
    const aprobadas = Object.values(estado).filter(Boolean).length;
    const creditosAprobados = Object.values(malla).flat()
        .filter(ramo => estado[ramo.id])
        .reduce((sum, ramo) => sum + ramo.creditos, 0);
    
    return {
        totalMaterias,
        totalCreditos,
        aprobadas,
        creditosAprobados,
        porcentaje: Math.round((aprobadas / totalMaterias) * 100)
    };
}

function actualizarEstadisticas() {
    const stats = calcularEstadisticas();
    document.getElementById('stats').innerHTML = `
        <span>Materias: ${stats.aprobadas}/${stats.totalMaterias}</span>
        <span>Créditos: ${stats.creditosAprobados}/${stats.totalCreditos}</span>
        <span>Progreso: ${stats.porcentaje}%</span>
    `;
}

// Funciones de modal
function mostrarModalMetodos() {
    mostrarModal('Método de Investigación', 'Seleccione Método de Investigación a cursar:', metodosInvestigacion, seleccionarMetodo);
}

function mostrarModalTematicas(tematicaId) {
    const tematicasYaSeleccionadas = Object.values(tematicasSeleccionadas).filter(Boolean);
    mostrarModal('Sociología Temática', 'Seleccione Sociología Temática a cursar:', sociologiasTematicas, (item) => seleccionarTematica(item, tematicaId), tematicasYaSeleccionadas);
}

function mostrarModalTeoricas(teoricaId) {
    const teoriasYaSeleccionadas = Object.values(teoricasSeleccionadas).filter(Boolean);
    mostrarModal('Teoría Sociológica', 'Seleccione Teoría Sociológica a cursar:', teoriasSociologicas, (item) => seleccionarTeorica(item, teoricaId), teoriasYaSeleccionadas);
}

function mostrarModal(titulo, descripcion, items, callback, yaSeleccionados = []) {
    const modal = document.getElementById('modalMetodos');
    const listaMetodos = document.getElementById('listaMetodos');
    
    // Cambiar encabezado
    document.querySelector('.modal-header h2').textContent = titulo;
    document.querySelector('.modal-body p').textContent = descripcion;
    
    // Limpiar contenido anterior
    listaMetodos.innerHTML = '';
    
    // Crear contenedor principal
    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.style.display = 'flex';
    contenedorPrincipal.style.flexDirection = 'column';
    contenedorPrincipal.style.gap = '8px';
    contenedorPrincipal.style.width = '100%';
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'metodo-item';
        div.style.display = 'block';
        div.style.width = '100%';
        div.style.boxSizing = 'border-box';
        
        // Verificar prerrequisitos y si ya está seleccionado
        const prerreqCumplidos = item.prerreq.every(id => estado[id]);
        const yaSeleccionado = yaSeleccionados.some(seleccionado => 
            seleccionado && seleccionado.nombre === item.nombre
        );
        
        if ((!prerreqCumplidos && item.prerreq.length > 0) || yaSeleccionado) {
            div.classList.add('bloqueado');
        }
        
        const prerreqTexto = item.prerreq.length > 0 
            ? `Prerrequisitos: ${item.prerreq.map(id => {
                const materia = Object.values(malla).flat().find(m => m.id === id);
                return materia ? materia.nombre : id;
            }).join(', ')}`
            : 'Sin prerrequisitos';
        
        div.innerHTML = `
            <div class="metodo-nombre">${item.nombre}</div>
            <div class="metodo-creditos">${item.creditos} créditos</div>
            <div class="metodo-prerreq">${prerreqTexto}</div>
        `;
        
        if ((prerreqCumplidos || item.prerreq.length === 0) && !yaSeleccionado) {
            div.addEventListener('click', () => callback(item));
        }
        
        contenedorPrincipal.appendChild(div);
    });
    
    listaMetodos.appendChild(contenedorPrincipal);
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modalMetodos');
    modal.style.display = 'none';
    
    // Restaurar el título y texto original del modal
    document.querySelector('.modal-header h2').textContent = 'Método de Investigación';
    document.querySelector('.modal-body p').textContent = 'Seleccione Método de Investigación a cursar:';
}

// Funciones de selección
function seleccionarMetodo(metodo) {
    metodoSeleccionado = metodo;
    estado["metodos_invest"] = true;
    
    // Actualizar el nombre de la materia
    Object.values(malla).flat().forEach(materia => {
        if (materia.id === "metodos_invest") {
            materia.nombreOriginal = materia.nombreOriginal || materia.nombre;
            materia.nombre = `${materia.nombreOriginal} - ${metodo.nombre}`;
        }
    });
    
    cerrarModal();
    actualizarVista();
}

function seleccionarTematica(tematica, tematicaId) {
    tematicasSeleccionadas[tematicaId] = tematica;
    estado[tematicaId] = true;
    
    // Actualizar el nombre de la materia
    Object.values(malla).flat().forEach(materia => {
        if (materia.id === tematicaId) {
            materia.nombreOriginal = materia.nombreOriginal || materia.nombre;
            materia.nombre = `${materia.nombreOriginal} - ${tematica.nombre}`;
        }
    });
    
    cerrarModal();
    actualizarVista();
}

function seleccionarTeorica(teoria, teoricaId) {
    teoricasSeleccionadas[teoricaId] = teoria;
    estado[teoricaId] = true;
    
    // Actualizar el nombre de la materia
    Object.values(malla).flat().forEach(materia => {
        if (materia.id === teoricaId) {
            materia.nombreOriginal = materia.nombreOriginal || materia.nombre;
            materia.nombre = `${materia.nombreOriginal} - ${teoria.nombre}`;
        }
    });
    
    cerrarModal();
    actualizarVista();
}

function actualizarVista() {
    guardarEstado();
    crearMalla();
    actualizarEstadisticas();
}

// Función principal para crear la malla
function crearMalla() {
    const contenedor = document.getElementById("malla");
    contenedor.innerHTML = "";

    Object.entries(malla).forEach(([semestre, ramos]) => {
        const columna = document.createElement("div");
        columna.className = "semestre";

        const titulo = document.createElement("h2");
        titulo.textContent = semestre;
        columna.appendChild(titulo);

        ramos.forEach(ramo => {
            const div = document.createElement("div");
            div.className = "ramo";
            div.innerHTML = `
                <div>${ramo.nombre}</div>
                <div class="creditos">${ramo.creditos} créditos</div>
            `;

            const aprobado = estado[ramo.id];
            const prerreqCumplidos = (ramo.prerreq || []).every(id => estado[id]);

            if (aprobado) {
                div.classList.add("aprobado");
            } else if (!prerreqCumplidos && ramo.prerreq) {
                div.classList.add("bloqueado");
            }

            div.addEventListener("click", () => {
                if (div.classList.contains("bloqueado")) return;

                // Manejo de materias especiales
                if (ramo.id === "metodos_invest") {
                    if (!estado[ramo.id]) {
                        mostrarModalMetodos();
                        return;
                    } else {
                        // Desmarcar
                        estado[ramo.id] = false;
                        metodoSeleccionado = null;
                        if (ramo.nombreOriginal) {
                            ramo.nombre = ramo.nombreOriginal;
                        }
                    }
                } else if (["tematicas_i", "tematicas_ii", "tematicas_iii"].includes(ramo.id)) {
                    if (!estado[ramo.id]) {
                        mostrarModalTematicas(ramo.id);
                        return;
                    } else {
                        // Desmarcar
                        estado[ramo.id] = false;
                        tematicasSeleccionadas[ramo.id] = null;
                        if (ramo.nombreOriginal) {
                            ramo.nombre = ramo.nombreOriginal;
                        }
                    }
                } else if (["teorias_i", "teorias_ii", "teorias_iii"].includes(ramo.id)) {
                    if (!estado[ramo.id]) {
                        mostrarModalTeoricas(ramo.id);
                        return;
                    } else {
                        // Desmarcar
                        estado[ramo.id] = false;
                        teoricasSeleccionadas[ramo.id] = null;
                        if (ramo.nombreOriginal) {
