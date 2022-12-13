

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



function animar_graficas(){
    let property_name;
    let aleatory_heigh;
    let config;
    for (let index = 1; index <= 7; index++) {
        aleatory_heigh = randomIntFromInterval(10,70)
        config = parseInt(aleatory_heigh)+"%"
        property_name = "graph-item" + index.toString();
        console.log(property_name, config)
        document.getElementById(property_name).style.height=config;
    }
    
}



function auto_actualizar(){
    animar_graficas();
    setTimeout(auto_actualizar, 5000);
}

animar_graficas();
auto_actualizar();