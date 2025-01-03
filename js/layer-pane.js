let layer_ESRIGraylight_0;
let layer_GoogleSatellite_1;
let layer_OpenStreetMap_2;

let layer_MunicipiosPriorizados_3;
let layer_RegionesClimticas_4;
let layer_RegionesAdministrativas_5;
let layer_Departamentos_6;
let layer_Municipios_7;

let layer_Proyectos_8;
let cluster_MapadeClusters_9;
let heatLayer;

export function updateHeatMap(layer) {
    var heatData = [];
    layer.eachLayer(function (layerFeature) {
        var feature = layerFeature.feature; // Accede al GeoJSON de cada punto
        if (feature) {
            var lat = feature.geometry.coordinates[1];
            var lon = feature.geometry.coordinates[0];
            var weight = (feature.properties.calificaci) * 1000; // Personaliza el peso según tus necesidades
            heatData.push([lat, lon, weight]);
        }
    });
    // Actualizar los datos en el mapa de calor
    heatLayer.setLatLngs(heatData); // Aquí ocurre el error
}

export function updateClusterLayer(layer, map, style_MapadeClusters_9_0) {
    /*// Verificar si el grupo de clusters ya está inicializado
    if (!cluster_MapadeClusters_9) {
        console.error("cluster_MapadeClusters_9 no está inicializado.");
        return;
    }*/

    // Limpia el grupo de clusters
    cluster_MapadeClusters_9.clearLayers();

    // Recorrer las características de la capa visible y aplicarlas al cluster
    layer.eachLayer(function (layerFeature) {
        var feature = layerFeature.feature; // Accede al GeoJSON de cada punto
        if (feature) {
            var latlng = [
                feature.geometry.coordinates[1], // Latitud
                feature.geometry.coordinates[0], // Longitud
            ];
            var marker = L.circleMarker(latlng, style_MapadeClusters_9_0(feature));
            marker.bindPopup(`<b>Nombre:</b> ${feature.properties.nombre}`);
            cluster_MapadeClusters_9.addLayer(marker);
        }
    });

    // Agregar el grupo de clusters al mapa si no está ya agregado
    if (!map.hasLayer(cluster_MapadeClusters_9)) {
        map.addLayer(cluster_MapadeClusters_9);
    }
}


export function addESRIGraylightLayer(map) {
    map.createPane('pane_ESRIGraylight_0');
    map.getPane('pane_ESRIGraylight_0').style.zIndex = 400;
    layer_ESRIGraylight_0 = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        pane: 'pane_ESRIGraylight_0',
        opacity: 1.0,
        attribution: 'ESRI',
        minZoom: 1,
        maxZoom: 28,
        minNativeZoom: 0,
        maxNativeZoom: 20,
    });
    map.addLayer(layer_ESRIGraylight_0);
}

export function addGoogleSatelliteLayer(map) {
    map.createPane('pane_GoogleSatellite_1');
    map.getPane('pane_GoogleSatellite_1').style.zIndex = 401;
    layer_GoogleSatellite_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        pane: 'pane_GoogleSatellite_1',
        opacity: 1.0,
        attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
        minZoom: 1,
        maxZoom: 28,
        minNativeZoom: 0,
        maxNativeZoom: 20
    });
}

export function addOpenStreetMapLayer(map) {
    map.createPane('pane_OpenStreetMap_2');
    map.getPane('pane_OpenStreetMap_2').style.zIndex = 402;
    layer_OpenStreetMap_2 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        pane: 'pane_OpenStreetMap_2',
        opacity: 1.0,
        attribution: 'OSM',
        minZoom: 1,
        maxZoom: 28,
        minNativeZoom: 0,
        maxNativeZoom: 19
    });
}

export function addMunicipiosPriorizadosLayer(map, bounds_group, json_MunicipiosPriorizados_3, pop_MunicipiosPriorizados_3, style_MunicipiosPriorizados_3_0) {
    map.createPane('pane_MunicipiosPriorizados_3');
    map.getPane('pane_MunicipiosPriorizados_3').style.zIndex = 403;
    map.getPane('pane_MunicipiosPriorizados_3').style['mix-blend-mode'] = 'normal';

    layer_MunicipiosPriorizados_3 = new L.geoJson(json_MunicipiosPriorizados_3, {
        attribution: 'INE/FSS',
        interactive: true,
        dataVar: 'json_MunicipiosPriorizados_3',
        layerName: 'layer_MunicipiosPriorizados_3',
        pane: 'pane_MunicipiosPriorizados_3',
        onEachFeature: pop_MunicipiosPriorizados_3,
        style: style_MunicipiosPriorizados_3_0,
    });
    bounds_group.addLayer(layer_MunicipiosPriorizados_3);
}

export function addRegionesClimticasLayer(map, bounds_group, json_RegionesClimticas_4, pop_RegionesClimticas_4, style_RegionesClimticas_4_0) {
    map.createPane('pane_RegionesClimticas_4');
    map.getPane('pane_RegionesClimticas_4').style.zIndex = 404;
    map.getPane('pane_RegionesClimticas_4').style['mix-blend-mode'] = 'normal';
    layer_RegionesClimticas_4 = new L.geoJson(json_RegionesClimticas_4, {
        attribution: 'INSIVUMEH',
        interactive: true,
        dataVar: 'json_RegionesClimticas_4',
        layerName: 'layer_RegionesClimticas_4',
        pane: 'pane_RegionesClimticas_4',
        onEachFeature: pop_RegionesClimticas_4,
        style: style_RegionesClimticas_4_0,
    });
    bounds_group.addLayer(layer_RegionesClimticas_4);
}

export function addRegionesAdministrativasLayer(map, bounds_group, json_RegionesAdministrativas_5, pop_RegionesAdministrativas_5, style_RegionesAdministrativas_5_0) {
    map.createPane('pane_RegionesAdministrativas_5');
    map.getPane('pane_RegionesAdministrativas_5').style.zIndex = 405;
    map.getPane('pane_RegionesAdministrativas_5').style['mix-blend-mode'] = 'normal';
    layer_RegionesAdministrativas_5 = new L.geoJson(json_RegionesAdministrativas_5, {
        attribution: 'INE',
        interactive: true,
        dataVar: 'json_RegionesAdministrativas_5',
        layerName: 'layer_RegionesAdministrativas_5',
        pane: 'pane_RegionesAdministrativas_5',
        onEachFeature: pop_RegionesAdministrativas_5,
        style: style_RegionesAdministrativas_5_0,
    });
    bounds_group.addLayer(layer_RegionesAdministrativas_5);
}

export function addDepartamentosLayer(map, bounds_group, json_Departamentos_6, pop_Departamentos_6, style_Departamentos_6_0) {
    map.createPane('pane_Departamentos_6');
    map.getPane('pane_Departamentos_6').style.zIndex = 406;
    map.getPane('pane_Departamentos_6').style['mix-blend-mode'] = 'normal';

    layer_Departamentos_6 = new L.geoJson(json_Departamentos_6, {
        attribution: 'INE',
        interactive: true,
        dataVar: 'json_Departamentos_6',
        layerName: 'layer_Departamentos_6',
        pane: 'pane_Departamentos_6',
        onEachFeature: pop_Departamentos_6,
        style: style_Departamentos_6_0,
    });

    bounds_group.addLayer(layer_Departamentos_6);
    map.addLayer(layer_Departamentos_6);
}

export function addMunicipiosLayer(map, bounds_group, json_Municipios_7, pop_Municipios_7, style_Municipios_7_0) {
    map.createPane('pane_Municipios_7');
    map.getPane('pane_Municipios_7').style.zIndex = 407;
    map.getPane('pane_Municipios_7').style['mix-blend-mode'] = 'normal';
    layer_Municipios_7 = new L.geoJson(json_Municipios_7, {
        attribution: 'INE',
        interactive: true,
        dataVar: 'json_Municipios_7',
        layerName: 'layer_Municipios_7',
        pane: 'pane_Municipios_7',
        onEachFeature: pop_Municipios_7,
        style: style_Municipios_7_0,
    });
    bounds_group.addLayer(layer_Municipios_7);
}

export function addProyectosLayer(map, bounds_group, json_Proyectos_8, pop_Proyectos_8, style_Proyectos_8_0) {
    map.createPane('pane_Proyectos_8');
    map.getPane('pane_Proyectos_8').style.zIndex = 408;
    map.getPane('pane_Proyectos_8').style['mix-blend-mode'] = 'normal';
    layer_Proyectos_8 = new L.geoJson(json_Proyectos_8, {
        attribution: 'FSS',
        interactive: true,
        dataVar: 'json_Proyectos_8',
        layerName: 'layer_Proyectos_8',
        pane: 'pane_Proyectos_8',
        onEachFeature: pop_Proyectos_8,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Proyectos_8_0(feature));
        },
    });
    bounds_group.addLayer(layer_Proyectos_8);
    map.addLayer(layer_Proyectos_8);
}


export function addClusterLayer(map, bounds_group, json_MapadeClusters_9, pop_MapadeClusters_9, style_MapadeClusters_9_0) {
    map.createPane('pane_MapadeClusters_9');
    map.getPane('pane_MapadeClusters_9').style.zIndex = 409;
    map.getPane('pane_MapadeClusters_9').style['mix-blend-mode'] = 'normal';

    // Inicializar el grupo de clusters global
    cluster_MapadeClusters_9 = new L.MarkerClusterGroup({
        showCoverageOnHover: false,
        spiderfyDistanceMultiplier: 2,
    });

    // Inicializar la capa base con las características actuales
    var layer_MapadeClusters_9 = new L.geoJson(json_MapadeClusters_9, {
        attribution: 'FSS',
        interactive: true,
        dataVar: 'json_MapadeClusters_9',
        layerName: 'layer_MapadeClusters_9',
        pane: 'pane_MapadeClusters_9',
        onEachFeature: pop_MapadeClusters_9,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, style_MapadeClusters_9_0(feature));
        },
    });

    // Actualizar el cluster inicialmente
    updateClusterLayer(layer_MapadeClusters_9, map, style_MapadeClusters_9_0);

    // Agregar la capa base al grupo de límites
    bounds_group.addLayer(layer_MapadeClusters_9);
}


export function addMapadeCalorLayer(map, bounds_group, json_Proyectos_8) {
    map.createPane('pane_MapadeCalor_10');
    map.getPane('pane_MapadeCalor_10').style.zIndex = 410;
    map.getPane('pane_MapadeCalor_10').style['mix-blend-mode'] = 'normal';

    const heatData = [];
    json_Proyectos_8.features.forEach(function (feature) {
        const lat = feature.geometry.coordinates[1];
        const lon = feature.geometry.coordinates[0];
        const weight = (feature.properties.calificaci) * 100;
        heatData.push([lat, lon, weight]);
    });

    heatLayer = L.heatLayer(heatData, {
        pane: 'pane_MapadeCalor_10',
        radius: 20,
        blur: 20,
        maxZoom: 8,
        minOpacity: 0.2,
        gradient: {
            0.7: 'white',
            0.8: 'yellow',
            0.9: 'orange',
            1.0: 'red'
        },
        opacity: 0.7
    });

    bounds_group.addLayer(heatLayer);
    map.addLayer(heatLayer);
}

export { layer_ESRIGraylight_0, layer_GoogleSatellite_1,
    layer_OpenStreetMap_2, layer_MunicipiosPriorizados_3,
    layer_RegionesClimticas_4, layer_RegionesAdministrativas_5,
    layer_Departamentos_6, layer_Municipios_7, layer_Proyectos_8,
    cluster_MapadeClusters_9, heatLayer };