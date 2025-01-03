var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

function removeEmptyRowsFromPopupContent(content, feature) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    var rows = tempDiv.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].querySelector('td.visible-with-data');
        var key = td ? td.id : '';
        if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    return tempDiv.innerHTML;
   }
   // add class to format popup if it contains media
   function addClassToPopupIfMedia(content, popup) {
       var tempDiv = document.createElement('div');
       tempDiv.innerHTML = content;
       if (tempDiv.querySelector('td img')) {
           popup._contentNode.classList.add('media');
               // Delay to force the redraw
               setTimeout(function() {
                   popup.update();
               }, 10);
       } else {
           popup._contentNode.classList.remove('media');
       }
   };

export function pop_MunicipiosPriorizados_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Nivel de Priorización</th>\
                <td>' + (feature.properties['datos_Nive'] !== null ? autolinker.link(feature.properties['datos_Nive'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Municipio</th>\
                <td>' + (feature.properties['municipio'] !== null ? autolinker.link(feature.properties['municipio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Departamento</th>\
                <td>' + (feature.properties['departamen'] !== null ? autolinker.link(feature.properties['departamen'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

export function pop_RegionesClimticas_4(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Región Climática</th>\
                <td>' + (feature.properties['NOMBRE'] !== null ? autolinker.link(feature.properties['NOMBRE'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

export function pop_RegionesAdministrativas_5(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">No. Región</th>\
                <td>' + (feature.properties['region'] !== null ? autolinker.link(feature.properties['region'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Nombre</th>\
                <td>' + (feature.properties['nombre'] !== null ? autolinker.link(feature.properties['nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

export function pop_Departamentos_6(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Departamento</th>\
                <td>' + (feature.properties['departamen'] !== null ? autolinker.link(feature.properties['departamen'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

export function pop_Municipios_7(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Municipio</th>\
                <td>' + (feature.properties['DESC_MUN'] !== null ? autolinker.link(feature.properties['DESC_MUN'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Departamento</th>\
                <td>' + (feature.properties['DESC_DEP'] !== null ? autolinker.link(feature.properties['DESC_DEP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

export function pop_Proyectos_8(feature, layer) {
    var precisionValue = feature.properties['Precision'] !== null ? parseFloat(feature.properties['Precision']) : 0;
    var calificacionValue = feature.properties['calificaci'] !== null ? parseFloat(feature.properties['calificaci']) : 0;
    var clasificacionValue = feature.properties['clasificac'] !== null ? autolinker.link(feature.properties['clasificac'].toLocaleString()) : '';

// Crear la barra de progreso
var precisionBar = `
    <div style="background-color: #e0e0e0; border-radius: 4px; width: 100%; height: 20px; position: relative;">
        <div style="background-color: #4caf50; width: ${precisionValue*100}%; height: 100%; border-radius: 4px;"></div>
        <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); color: #000; font-size: 12px;">${(precisionValue * 100).toFixed(2)}%</span>
    </div>`;

var calificacionBar = `
    <div style="background-color: #e0e0e0; border-radius: 4px; width: 100%; height: 20px; position: relative;">
        <div style="background-color: #4caf50; width: ${calificacionValue*100}%; height: 100%; border-radius: 4px;"></div>
        <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); color: #000; font-size: 12px;">${(calificacionValue * 100).toFixed(2)}%</span>
    </div>`;

// Función para generar estrellas según el valor de calificación
function generarEstrellas(clasificacion) {
    var estrellas = '';
    if (clasificacion === 'Alto') {
        estrellas = '★★★'; // 3 estrellas llenas
    } else if (clasificacion === 'Medio') {
        estrellas = '★★☆'; // 2 estrellas llenas
    } else {
        estrellas = '★☆☆'; // 1 estrella llena
    }
    return `<span style="font-size: 16px; color: #FFD700;">${estrellas}</span>`; // Estilo de las estrellas
}

var calificacionEstrellas = generarEstrellas(clasificacionValue);

        // Popup con título y tipo
        var popupContent = `
            <div>
                <strong>${feature.properties['tipo'] || "Sin Tipo"}</strong><br>
                <i>${feature.properties['NOMBRE_DE_'] || "Sin Nombre"}</i>
            </div>
        `;

        layer.bindPopup(popupContent, { maxHeight: 200 });

        // Al hacer clic, actualiza el panel
        layer.on('click', function () {
            updatePanel(feature.properties);
        });

        // Vincular cierre del popup con el cierre del panel
        layer.on('popupclose', function () {
            hidePanel();
        });

var popupContent = `
    <table>
        <tr>
            <th scope="row">${feature.properties['tipo'] !== null ? autolinker.link(feature.properties['tipo'].toLocaleString()) : ''}</th>
            <td colspan="2"><strong>${feature.properties['NOMBRE_DE_'] !== null ? autolinker.link(feature.properties['NOMBRE_DE_'].toLocaleString()) : ''}</strong></td>
        </tr>
        <tr>
            <th scope="row">Departamento</th>
            <td>${feature.properties['DEPARTAMEN'] !== null ? autolinker.link(feature.properties['DEPARTAMEN'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
            <th scope="row">Municipio</th>
            <td>${feature.properties['MUNICIPIO'] !== null ? autolinker.link(feature.properties['MUNICIPIO'].toLocaleString()) : ''}</td>
        </tr>
        <tr>
            <th scope="row">Clasificación</th>
            <td>${feature.properties['clasificac'] !== null ? autolinker.link(feature.properties['clasificac'].toLocaleString()) : ''}</td>
            <td>${calificacionEstrellas}</td>
        </tr>
        <tr>
            <th scope="row">Precisión</th>
            <td>${precisionBar}</td>
        </tr>
        <tr>
            <th scope="row">Calificación</th>
            <td>${calificacionBar}</td>
        </tr>            
    </table>`;

var content = removeEmptyRowsFromPopupContent(popupContent, feature);
layer.on('popupopen', function(e) {
    addClassToPopupIfMedia(content, e.popup);
});
layer.bindPopup(content, { maxHeight: 400 });
}

export function pop_MapadeClusters_9(feature, layer) {
    var precisionValue = feature.properties['Precision'] !== null ? parseFloat(feature.properties['Precision']) : 0;
    var calificacionValue = feature.properties['calificaci'] !== null ? parseFloat(feature.properties['calificaci']) : 0;
    var clasificacionValue = feature.properties['clasificac'] !== null ? autolinker.link(feature.properties['clasificac'].toLocaleString()) : '';

// Crear la barra de progreso
var precisionBar = `
<div style="background-color: #e0e0e0; border-radius: 4px; width: 100%; height: 20px; position: relative;">
    <div style="background-color: #4caf50; width: ${precisionValue*100}%; height: 100%; border-radius: 4px;"></div>
    <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); color: #000; font-size: 12px;">${(precisionValue * 100).toFixed(2)}%</span>
</div>`;

var calificacionBar = `
<div style="background-color: #e0e0e0; border-radius: 4px; width: 100%; height: 20px; position: relative;">
    <div style="background-color: #4caf50; width: ${calificacionValue*100}%; height: 100%; border-radius: 4px;"></div>
    <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); color: #000; font-size: 12px;">${(calificacionValue * 100).toFixed(2)}%</span>
</div>`;

// Función para generar estrellas según el valor de calificación
function generarEstrellas(clasificacion) {
var estrellas = '';
if (clasificacion === 'Alto') {
    estrellas = '★★★'; // 3 estrellas llenas
} else if (clasificacion === 'Medio') {
    estrellas = '★★☆'; // 2 estrellas llenas
} else {
    estrellas = '★☆☆'; // 1 estrella llena
}
return `<span style="font-size: 16px; color: #FFD700;">${estrellas}</span>`; // Estilo de las estrellas
}

var calificacionEstrellas = generarEstrellas(clasificacionValue);

var popupContent = `
<table>
    <tr>
        <th scope="row">${feature.properties['tipo'] !== null ? autolinker.link(feature.properties['tipo'].toLocaleString()) : ''}</th>
        <td colspan="2"><strong>${feature.properties['NOMBRE_DE_'] !== null ? autolinker.link(feature.properties['NOMBRE_DE_'].toLocaleString()) : ''}</strong></td>
    </tr>
    <tr>
        <th scope="row">Departamento</th>
        <td>${feature.properties['DEPARTAMEN'] !== null ? autolinker.link(feature.properties['DEPARTAMEN'].toLocaleString()) : ''}</td>
    </tr>
    <tr>
        <th scope="row">Municipio</th>
        <td>${feature.properties['MUNICIPIO'] !== null ? autolinker.link(feature.properties['MUNICIPIO'].toLocaleString()) : ''}</td>
    </tr>
    <tr>
        <th scope="row">Clasificación</th>
        <td>${feature.properties['clasificac'] !== null ? autolinker.link(feature.properties['clasificac'].toLocaleString()) : ''}</td>
        <td>${calificacionEstrellas}</td>
    </tr>
    <tr>
        <th scope="row">Precisión</th>
        <td>${precisionBar}</td>
    </tr>
    <tr>
        <th scope="row">Calificación</th>
        <td>${calificacionBar}</td>
    </tr>            
</table>`;
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

// Actualiza el contenido del panel
function updatePanel(properties) {
    var panel = document.getElementById('panelPopUp');
    // Generar contenido dinámico
    var content = `
        <h4 style="margin: 0; font-size: 16px; text-align: center;">Detalles del Proyecto</h4>
        <hr style="margin: 5px 0;">
        <table>
            <tr><th>Departamento:</th><td>${properties['DEPARTAMEN'] || "N/A"}</td></tr>
            <tr><th>Municipio:</th><td>${properties['MUNICIPIO'] || "N/A"}</td></tr>
            <tr><th>Dimensión:</th><td>${properties['DIMENSION_'] || "N/A"}</td></tr>
            <tr><th>Monto Estimado:</th><td>${properties['MONTO_ESTI'] || "N/A"}</td></tr>
            <tr><th>Clasificación:</th><td>${properties['clasificac'] || "N/A"}</td></tr>
            <tr><th>Precisión:</th><td>${properties['Precision'] || "N/A"}</td></tr>
            <tr><th>Tipo:</th><td>${properties['tipo'] || "N/A"}</td></tr>
            <tr><th>Porcentaje:</th><td>${properties['PORCENTAJE'] || "N/A"}</td></tr>
            <tr><th>Cantidad:</th><td>${properties['CANTIDAD_D'] || "N/A"}</td></tr>
            <tr><th>Prioridad:</th><td>${properties['PRIORIDAD'] || "N/A"}</td></tr>
            <tr><th>Ponderacion:</th><td>${properties['PONDERACIO'] || "N/A"}</td></tr>
            <tr><th>No. de Prioridad:</th><td>${properties['NO_PRIORID'] || "N/A"}</td></tr>
            <tr><th>Calificación:</th><td>${properties['calificaci'] || "N/A"}</td></tr>
            <tr><th>Clasificación:</th><td>${properties['clasificac'] || "N/A"}</td></tr>
        </table>
    `;
    panel.innerHTML = content;
    // Mostrar panel con animación
    panel.classList.add('panel-visible');
}

// Función para ocultar el panel
function hidePanel() {
    var panel = document.getElementById('panelPopUp');
    panel.classList.remove('panel-visible');
}