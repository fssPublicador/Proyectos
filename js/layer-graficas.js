// Crear el panel izquierdo para las gráficas
export function initChartsPanel(col0) {
    var canvas = document.createElement('canvas');
    canvas.id = "filteredChart";
    canvas.style.height = "20%";
    col0.appendChild(canvas);

    // Crear el contenedor para la gráfica de barras
    var barChartContainer = document.createElement("div");
    barChartContainer.id = "barChartContainer";
    barChartContainer.style.height = "50%";
    barChartContainer.style.width = "80%";
    barChartContainer.style.margin = "20px auto";
    document.getElementById("leftPanel").appendChild(barChartContainer);

    var barChartCanvas = document.createElement("canvas");
    barChartCanvas.id = "barChartCanvas";
    barChartContainer.appendChild(barChartCanvas);
}

// Instancias de gráficas
let pieChart;
let barChartInstance;

// Función para inicializar o actualizar la gráfica de pastel
export function actualizarGraficaConFiltros(features) {
    const counts = { Alto: 0, Medio: 0, Bajo: 0 };
    features.forEach(feature => {
        const categoria = feature.properties.clasificac;
        if (counts[categoria] !== undefined) {
            counts[categoria]++;
        }
    });

    const labels = Object.keys(counts);
    const data = Object.values(counts);

    if (pieChart) {
        pieChart.data.datasets[0].data = data;
        pieChart.update();
    } else {
        const ctx = document.getElementById('filteredChart').getContext('2d');
        pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#38761d', '#93c47d', '#d9ead3'],
                    borderColor: ['#000000'],
                    borderWidth: 1, // Ancho del borde
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Clasificación de Proyectos',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        display: true, // Mostrar/ocultar leyenda
                        position: 'top', // Posición de la leyenda ('top', 'bottom', 'left', 'right')
                        labels: {
                            font: {
                                size: 14 // Tamaño de fuente para la leyenda
                            },
                            color: '#000' // Color del texto
                        }
                    },
                    datalabels: { // Configuración para mostrar las etiquetas
                        display: true,
                        formatter: (value, ctx) => {
                            const dataset = ctx.chart.data.datasets[0];
                            const total = dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            // Muestra el valor y porcentaje
                            //return `${value} (${percentage}%)`;
                            return `${percentage}%`;
                        },
                        color: '#000', // Color del texto
                        //backgroundColor: '#FFF', // Fondo del texto
                        borderRadius: 5, // Bordes redondeados
                        font: {
                            size: 14,
                            weight: 'bold' // Negrita para el texto
                        }
                    },
                }
            },
            plugins: [ChartDataLabels] // Importante: activar el complemento
        });
    }

}

// Función para inicializar o actualizar la gráfica de barras
export function updateBarChart(features) {
    const counts = {
        "PROYECTOS NO COMPLETADOS": 0,
        "PROYECTOS NUEVO INGRESO": 0,
        "PROYECTOS PARA SUBIR BASES": 0,
        "PROYECTOS FIDEICOMISO": 0
    };

    features.forEach(feature => {
        if (feature.properties.tipo in counts) {
            counts[feature.properties.tipo]++;
        }
    });

    if (barChartInstance) {
        barChartInstance.data.datasets[0].data = Object.values(counts);
        barChartInstance.update();
    } else {
        barChartInstance = new Chart(barChartCanvas, {
            type: "bar",
            data: {
                labels: Object.keys(counts),
                datasets: [{
                    //label: "Tipo de Proyectos",
                    data: Object.values(counts),
                    backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
                    color: '#000' // Color de los números en el eje Y
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0, // Valor mínimo del eje Y
                        max: 150, // Valor máximo fijo del eje Y
                        title: {
                            display: true,
                            text: "Cantidad"
                        },
                        ticks: {
                            //color: '#000', // Color de los números en el eje Y
                            stepSize: 10 // Incremento entre los valores del eje
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 90, 
                            minRotation: 90,
                            color: '#000' // Color de los números en el eje Y
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Tipos de Proyectos',
                        //color: '#333',
                        font: {
                            size: 18,
                            //family: 'Arial'
                        },
                        padding: {
                            top: 10,
                            bottom: 10
                        }
                    },
                    legend: {
                        display: false
                    },
                    datalabels: { // Configuración para mostrar etiquetas
                        display: true,
                        align: 'end', // Posición de las etiquetas
                        anchor: 'end', // Anclaje de las etiquetas
                        formatter: (value) => value, // Mostrar solo el valor
                        color: '#000', // Color del texto
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                },
                animation: {
                    duration: 500, // Duración de la animación en milisegundos
                    easing: 'easeInOutBounce', // Tipo de animación
                    onComplete: function() {
                        //console.log('Animación completada');
                    }
                },
                onClick: function(evt, elements) {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        console.log(`Clic en ${this.data.labels[index]}`);
                    }
                },
    hover: {
        mode: 'index',
        intersect: false
    }
            },
            plugins: [ChartDataLabels] // Activar el complemento
        });
    }

}
