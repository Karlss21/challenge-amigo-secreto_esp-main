let nombreAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    // Valida que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verifica si el nombre ya existe en la lista
    if (nombreAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar nombres de amigos al array
    nombreAmigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista en el HTML
    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpia lista antes de actualizar
    listaAmigos.innerHTML = "";

    // Recorre el array y agregar cada amigo como <li>
    nombreAmigos.forEach((nombreAmigos) => {
        let li = document.createElement("li");
        li.textContent = nombreAmigos;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Valida que haya al menos dos amigo en la lista
    if (nombreAmigos.length === 1) {
        alert("Por favor, agrega al menos dos amigos antes de sortear.");
        return;
    }

    // Genera índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSorteado = nombreAmigos[indiceAleatorio];

    // Mostra el resultado
    resultado.innerHTML = `<li> ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! </li>`;
}

