// Función para crear el filtro de clasificación
export function createClasificacionFilter(filterFunc) {
    // Crear contenedor del filtro
    const rightPanel = document.getElementById("rightPanel");
    if (!rightPanel) {
        console.error("El panel derecho 'rightPanel' no existe.");
        return;
    }

    // Contenedor del filtro
    const div_clasificac = document.createElement("div");
    div_clasificac.id = "div_clasificac";
    div_clasificac.className = "filterselect";

    // Título
    const lab_clasificac = document.createElement("div");
    lab_clasificac.innerHTML = "Clasificación";
    lab_clasificac.className = "filterlabel title-label";
    div_clasificac.appendChild(lab_clasificac);

    // Select de clasificación
    const sel_clasificac = document.createElement("select");
    sel_clasificac.multiple = true;
    sel_clasificac.size = 4;
    sel_clasificac.id = "sel_clasificac";
    sel_clasificac.innerHTML = `
        <option value='' unselected>-Ninguno-</option>
        <option value='Alto'>Alto</option>
        <option value='Medio'>Medio</option>
        <option value='Bajo'>Bajo</option>
    `;
    sel_clasificac.onchange = function () {
        filterFunc(); // Llama a la función de filtrado
    };
    div_clasificac.appendChild(sel_clasificac);

    // Botón de limpiar selección
    const reset_clasificac = document.createElement("button");
    reset_clasificac.innerHTML = "Limpiar";
    reset_clasificac.className = "filter-reset-button";
    reset_clasificac.onclick = function () {
        Array.from(sel_clasificac.options).forEach((option) => {
            option.selected = false;
        });
        filterFunc(); // Actualiza el filtro
    };
    div_clasificac.appendChild(reset_clasificac);

    // Agregar al panel derecho
    rightPanel.appendChild(div_clasificac);
}


// Función para crear el filtro "Tipo"
export function createTipoFilter(filterFunc) {
    // Obtener el panel derecho donde se agregarán los filtros
    const rightPanel = document.getElementById("rightPanel");
    if (!rightPanel) {
        console.error("El panel derecho 'rightPanel' no existe.");
        return;
    }

    // Crear el contenedor del filtro
    const div_tipo = document.createElement("div");
    div_tipo.id = "div_tipo";
    div_tipo.className = "filterselect";

    // Título del filtro
    const lab_tipo = document.createElement("div");
    lab_tipo.innerHTML = "Tipo";
    lab_tipo.className = "filterlabel title-label";
    div_tipo.appendChild(lab_tipo);

    // Select para los valores del filtro
    const sel_tipo = document.createElement("select");
    sel_tipo.multiple = true;
    sel_tipo.size = 5;
    sel_tipo.id = "sel_tipo";
    sel_tipo.innerHTML = `
        <option value='' unselected>-Ninguno-</option>
        <option value='PROYECTOS NO COMPLETADOS'>PROYECTOS NO COMPLETADOS</option>
        <option value='PROYECTOS NUEVO INGRESO'>PROYECTOS NUEVO INGRESO</option>
        <option value='PROYECTOS PARA SUBIR BASES'>PROYECTOS PARA SUBIR BASES</option>
        <option value='PROYECTOS FIDEICOMISO'>PROYECTOS FIDEICOMISO</option>
    `;
    sel_tipo.onchange = function () {
        filterFunc(); // Llama a la función de filtrado
    };
    div_tipo.appendChild(sel_tipo);

    // Botón de limpiar selección
    const reset_tipo = document.createElement("button");
    reset_tipo.innerHTML = "Limpiar";
    reset_tipo.className = "filter-reset-button";
    reset_tipo.onclick = function () {
        Array.from(sel_tipo.options).forEach((option) => (option.selected = false));
        filterFunc(); // Actualiza el filtro
    };
    div_tipo.appendChild(reset_tipo);

    // Agregar el filtro al panel derecho
    rightPanel.appendChild(div_tipo);
}


// Función para crear el filtro "Departamento"
export function createDepartamentoFilter(filterFunc) {
    // Obtener el panel derecho donde se agregarán los filtros
    const rightPanel = document.getElementById("rightPanel");
    if (!rightPanel) {
        console.error("El panel derecho 'rightPanel' no existe.");
        return;
    }

    // Crear el contenedor del filtro
    const div_DEPARTAMEN = document.createElement("div");
    div_DEPARTAMEN.id = "div_DEPARTAMEN";
    div_DEPARTAMEN.className = "filterselect";

    // Título del filtro
    const lab_DEPARTAMEN = document.createElement("div");
    lab_DEPARTAMEN.innerHTML = "Departamento";
    lab_DEPARTAMEN.className = "filterlabel title-label";
    div_DEPARTAMEN.appendChild(lab_DEPARTAMEN);

    // Select para los valores del filtro
    const sel_DEPARTAMEN = document.createElement("select");
    sel_DEPARTAMEN.multiple = true;
    sel_DEPARTAMEN.size = 10;
    sel_DEPARTAMEN.id = "sel_DEPARTAMEN";

    // Opciones para el filtro
    sel_DEPARTAMEN.innerHTML = `
        <option value='' unselected>-Ninguno-</option>
        <option value='ALTA VERAPAZ'>ALTA VERAPAZ</option>
        <option value='BAJA VERAPAZ'>BAJA VERAPAZ</option>
        <option value='CHIMALTENANGO'>CHIMALTENANGO</option>
        <option value='CHIQUIMULA'>CHIQUIMULA</option>
        <option value='EL PROGRESO'>EL PROGRESO</option>
        <option value='ESCUINTLA'>ESCUINTLA</option>
        <option value='GUATEMALA'>GUATEMALA</option>
        <option value='HUEHUETENANGO'>HUEHUETENANGO</option>
        <option value='IZABAL'>IZABAL</option>
        <option value='JALAPA'>JALAPA</option>
        <option value='JUTIAPA'>JUTIAPA</option>
        <option value='PETEN'>PETEN</option>
        <option value='QUETZALTENANGO'>QUETZALTENANGO</option>
        <option value='QUICHÉ'>QUICHÉ</option>
        <option value='SAN MARCOS'>SAN MARCOS</option>
        <option value='SANTA ROSA'>SANTA ROSA</option>
        <option value='SOLOLÁ'>SOLOLÁ</option>
        <option value='SUCHITEPEQUEZ'>SUCHITEPEQUEZ</option>
        <option value='TOTONICAPÁN'>TOTONICAPÁN</option>
        <option value='ZACAPA'>ZACAPA</option>
    `;
    sel_DEPARTAMEN.onchange = function () {
        filterFunc(); // Llama a la función de filtrado
    };
    div_DEPARTAMEN.appendChild(sel_DEPARTAMEN);

    // Botón de limpiar selección
    const reset_DEPARTAMEN = document.createElement("button");
    reset_DEPARTAMEN.innerHTML = "Limpiar";
    reset_DEPARTAMEN.className = "filter-reset-button";
    reset_DEPARTAMEN.onclick = function () {
        Array.from(sel_DEPARTAMEN.options).forEach((option) => (option.selected = false));
        filterFunc(); // Actualiza el filtro
    };
    div_DEPARTAMEN.appendChild(reset_DEPARTAMEN);

    // Agregar el filtro al panel derecho
    rightPanel.appendChild(div_DEPARTAMEN);
}

// Función para crear el filtro "Municipio"
export function createMunicipioFilter(filterFunc) {
    // Obtener el panel derecho donde se agregarán los filtros
    const rightPanel = document.getElementById("rightPanel");
    if (!rightPanel) {
        console.error("El panel derecho 'rightPanel' no existe.");
        return;
    }

    // Crear el contenedor del filtro
    const div_MUNICIPIO = document.createElement("div");
    div_MUNICIPIO.id = "div_MUNICIPIO";
    div_MUNICIPIO.className = "filterselect";

    // Título del filtro
    const lab_MUNICIPIO = document.createElement("div");
    lab_MUNICIPIO.innerHTML = "Municipio";
    lab_MUNICIPIO.className = "filterlabel title-label";
    div_MUNICIPIO.appendChild(lab_MUNICIPIO);

    // Select para los valores del filtro
    const sel_MUNICIPIO = document.createElement("select");
    sel_MUNICIPIO.multiple = true;
    sel_MUNICIPIO.size = 10;
    sel_MUNICIPIO.id = "sel_MUNICIPIO";

    // Opciones para el filtro
    sel_MUNICIPIO.innerHTML = `
        <option value='' unselected>-Ninguno-</option>
        <option value="AGUA BLANCA">AGUA BLANCA</option>
        <option value="ATESCATEMPA">ATESCATEMPA</option>
        <option value="BARILLAS">BARILLAS</option>
        <option value="CABRICÁN">CABRICÁN</option>
        <option value="CAMOTAN">CAMOTAN</option>
        <option value="CANTEL">CANTEL</option>
        <option value="CHAHAL">CHAHAL</option>
        <option value="CHICACAO">CHICACAO</option>
        <option value="CHIMALTENANGO">CHIMALTENANGO</option>
        <option value="CHIQUIMULILLA">CHIQUIMULILLA</option>
        <option value="COBÁN">COBÁN</option>
        <option value="COMALAPA">COMALAPA</option>
        <option value="COMAPA">COMAPA</option>
        <option value="CONCEPCION LAS MINAS">CONCEPCION LAS MINAS</option>
        <option value="CONCEPCION TUTUAPA">CONCEPCION TUTUAPA</option>
        <option value="CONGUACO">CONGUACO</option>
        <option value="CUBULCO">CUBULCO</option>
        <option value="DOLORES">DOLORES</option>
        <option value="EL PROGRESO">EL PROGRESO</option>
        <option value="ESQUIPULAS">ESQUIPULAS</option>
        <option value="ESTANZUELA">ESTANZUELA</option>
        <option value="FLORES">FLORES</option>
        <option value="FRAY BARTOLOME DE LAS CASAS">FRAY BARTOLOME DE LAS CASAS</option>
        <option value="GENOVA COSTA CUCA">GENOVA COSTA CUCA</option>
        <option value="GUANAGAZAPA">GUANAGAZAPA</option>
        <option value="GUASTATOYA">GUASTATOYA</option>
        <option value="GUATEMALA">GUATEMALA</option>
        <option value="HUITE">HUITE</option>
        <option value="JOCOTAN">JOCOTAN</option>
        <option value="JUTIAPA">JUTIAPA</option>
        <option value="LA ESPERANZA">LA ESPERANZA</option>
        <option value="LA GOMERA">LA GOMERA</option>
        <option value="MATAQUESCUINTLA">MATAQUESCUINTLA</option>
        <option value="MIXCO">MIXCO</option>
        <option value="MOMOSTENANGO">MOMOSTENANGO</option>
        <option value="MONJAS">MONJAS</option>
        <option value="MOYUTA">MOYUTA</option>
        <option value="NAHUALA">NAHUALA</option>
        <option value="NUEVO PROGRESO">NUEVO PROGRESO</option>
        <option value="PALESTINA DE LOS ALTOS">PALESTINA DE LOS ALTOS</option>
        <option value="PANAJACHEL">PANAJACHEL</option>
        <option value="PATZUN">PATZUN</option>
        <option value="POPTUN">POPTUN</option>
        <option value="PUERTO BARRIOS">PUERTO BARRIOS</option>
        <option value="RAXRUHÁ">RAXRUHÁ</option>
        <option value="RIO HONDO">RIO HONDO</option>
        <option value="SAN ANDRES">SAN ANDRES</option>
        <option value="SAN ANTONIO HUISTA">SAN ANTONIO HUISTA</option>
        <option value="SAN ANTONIO ILOTENANGO">SAN ANTONIO ILOTENANGO</option>
        <option value="SAN ANTONIO SUCHITEPEQUEZ">SAN ANTONIO SUCHITEPEQUEZ</option>
        <option value="SAN BARTOLO AGUAS CALIENTES">SAN BARTOLO AGUAS CALIENTES</option>
        <option value="SAN BENITO">SAN BENITO</option>
        <option value="SAN CRISTOBAL CUCHO">SAN CRISTOBAL CUCHO</option>
        <option value="SAN CRISTOBAL TOTONICAPAN">SAN CRISTOBAL TOTONICAPAN</option>
        <option value="SAN CRISTOBAL VERAPAZ">SAN CRISTOBAL VERAPAZ</option>
        <option value="SAN CRISTÓBAL VERAPAZ">SAN CRISTÓBAL VERAPAZ</option>
        <option value="SAN JOSE">SAN JOSE</option>
        <option value="SAN JOSE OJETENAN">SAN JOSE OJETENAN</option>
        <option value="SAN JOSE POAQUIL">SAN JOSE POAQUIL</option>
        <option value="SAN JUAN ATITAN">SAN JUAN ATITAN</option>
        <option value="SAN JUAN CHAMELCO">SAN JUAN CHAMELCO</option>
        <option value="SAN JUAN IXCOY">SAN JUAN IXCOY</option>
        <option value="SAN JUAN LA ERMITA">SAN JUAN LA ERMITA</option>
        <option value="SAN JUAN OSTUNCALCO">SAN JUAN OSTUNCALCO</option>
        <option value="SAN JUAN SACATEPEQUEZ">SAN JUAN SACATEPEQUEZ</option>
        <option value="SAN LORENZO">SAN LORENZO</option>
        <option value="SAN MARTIN JILOTEPEQUE">SAN MARTIN JILOTEPEQUE</option>
        <option value="SAN MARTIN SACATEPEQUEZ">SAN MARTIN SACATEPEQUEZ</option>
        <option value="SAN MATEO IXTATAN">SAN MATEO IXTATAN</option>
        <option value="SAN PEDRO CARCHÁ">SAN PEDRO CARCHÁ</option>
        <option value="SAN PEDRO JOCOPILAS">SAN PEDRO JOCOPILAS</option>
        <option value="SAN PEDRO SACATEPEQUEZ">SAN PEDRO SACATEPEQUEZ</option>
        <option value="SAN PEDRO SOLOMA">SAN PEDRO SOLOMA</option>
        <option value="SANARATE">SANARATE</option>
        <option value="SANTA CRUZ BARILLAS">SANTA CRUZ BARILLAS</option>
        <option value="SANTA LUCÍA LA REFORMA">SANTA LUCÍA LA REFORMA</option>
        <option value="SANTA MARIA CAHABON">SANTA MARIA CAHABON</option>
        <option value="SIPACATE">SIPACATE</option>
        <option value="SIQUINALA">SIQUINALA</option>
        <option value="SOLOLÁ">SOLOLÁ</option>
        <option value="TACANA">TACANA</option>
        <option value="TACTIC">TACTIC</option>
        <option value="TAJUMULCO">TAJUMULCO</option>
        <option value="TECPAN GUATEMALA">TECPAN GUATEMALA</option>
        <option value="TODOS SANTOS CUCHUMATAN">TODOS SANTOS CUCHUMATAN</option>
        <option value="TODOS SANTOS CUCHUMATÁN">TODOS SANTOS CUCHUMATÁN</option>
        <option value="TOTONICAPÁN">TOTONICAPÁN</option>
        <option value="USUMATLAN">USUMATLAN</option>
        <option value="VILLA CANALES">VILLA CANALES</option>
        <option value="VILLA NUEVA">VILLA NUEVA</option>
        <option value="ZACAPA">ZACAPA</option>
        <option value="ZUNIL">ZUNIL</option>
    `;
    sel_MUNICIPIO.onchange = function () {
        filterFunc(); // Llama a la función de filtrado
    };
    div_MUNICIPIO.appendChild(sel_MUNICIPIO);

    // Botón de limpiar selección
    const reset_MUNICIPIO = document.createElement("button");
    reset_MUNICIPIO.innerHTML = "Limpiar";
    reset_MUNICIPIO.className = "filter-reset-button";
    reset_MUNICIPIO.onclick = function () {
        Array.from(sel_MUNICIPIO.options).forEach((option) => (option.selected = false));
        filterFunc(); // Actualiza el filtro
    };
    div_MUNICIPIO.appendChild(reset_MUNICIPIO);

    // Agregar el filtro al panel derecho
    rightPanel.appendChild(div_MUNICIPIO);
}
