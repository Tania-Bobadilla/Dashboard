
Chart.defaults.color = 'white';
Chart.defaults.borderColor = '#394983';


// Grafico 1, barra (temperatura)

async function getData() {

    //Se traen los datos desde la API
    const response = await fetch('https://api.gael.cloud/general/public/clima');

    //La respuesta se transforma de JSON a un objeto legible en JS
    const data = await response.json();
   

    //Se crean dos constantes con errays vacios que guarden los datos traidos desde la API
    const regions = [];
    const temperatures = [];

    //Se recorren los datos y se empujan a los arrays correspondientes. Decidi trabajar con solo algunos datos del total encontrado en los objetos de la API para que los graficos fueran mas legibles
    for (let i = 0; i < 8; i++) {
        regions.push(data[i].Estacion);
        temperatures.push(data[i].Temp);
    }

    //Se renderizan los datos en un grafico, este mismo proceso se repitio para los tres graficos 
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [
                {
                    label: "Temperatura",
                    backgroundColor: color =>{
                        console.log(color)
                        let colors = color.raw >= 15 ? 'orange' : 'lightblue'
                        return colors
                    },
                    data: temperatures
                }
            ]
        },
        options: {
            plugins: {
               legend: {
                  display: false,
                  color: 'white'
               },
               
            }
        },
    });

}

getData();


// Grafico 2, radar (humedad)

async function getData2() {

    const response = await fetch('https://api.gael.cloud/general/public/clima');
    const data = await response.json();
   
    regions = [];
    humidity = [];

    for (let i = 0; i < 6; i++) {
        regions.push(data[i].Estacion);
        humidity.push(data[i].Humedad);
    }


    new Chart(document.getElementById("radar-chart"), {
        type: 'radar',
        data: {
            labels: regions,
            datasets: [
                {
                    label: "Humedad",
                    backgroundColor: "#3e95cd",
                    data: humidity
                }
            ]
        },
        options: {
            plugins: {
               legend: {
                  display: false
               }
            },
            scales: {
                r: {
                   ticks: {
                       display: false 
                   }
               }
           }
        }
    });

}

getData2();



// Grafico 3, lineas (magnitud sismos)

async function getData3() {

    const response = await fetch('https://api.gael.cloud/general/public/sismos');
    const data = await response.json();

    regions = [];
    magnitude = [];

    for (let i = 0; i < 6; i++) {
        regions.push(data[i].RefGeografica);
        magnitude.push(data[i].Magnitud);
    }


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: regions,
            datasets: [
                {
                    label: "Magnitud",
                    backgroundColor: color =>{
                        console.log(color)
                        let colors = color.raw >= 4 ? 'orange' : 'lightblue'
                        return colors
                    },
                    backgroundColor: "#3e95cd",
                    data: magnitude
                }
            ]
        },
        options: {
            plugins: {
               legend: {
                  display: false
               }
            },
            scales: {
                r: {
                     ticks: {
                       display: false
                   }
               }
           }
        }
    });

}

getData3();



