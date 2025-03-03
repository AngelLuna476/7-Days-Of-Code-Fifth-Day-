const categorias = {
    frutas: [],
    lacteos: [],
    dulces: [],
    congelados: []
};

function solicitarEntrada(mensaje) {
    let respuesta;
    do {
        respuesta = prompt(mensaje);
    } while (!respuesta);
    return respuesta;
}

function agregarComida() {
    let agregarMas = "sí";

    while (agregarMas.toLowerCase() === "sí") {
        agregarMas = solicitarEntrada("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
        if (agregarMas.toLowerCase() === "no") break;

        let comida = solicitarEntrada("¿Qué comida deseas agregar?");
        let categoria = solicitarEntrada("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?").toLowerCase();

        if (categorias[categoria]) {
            categorias[categoria].push(comida);
        } else {
            alert("Esa categoría no está predefinida.");
        }
    }
}

function mostrarListaDeCompras() {
    let mensaje = "Lista de compras:\n";
    for (let categoria in categorias) {
        mensaje += `  ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${categorias[categoria].join(", ")}\n`;
    }
    alert(mensaje);
}

agregarComida();
mostrarListaDeCompras();