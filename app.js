let amigos = [];

function agregarAmigo() { 
   let input = document.getElementById("amigo");
   let nombre = input.value.trim();

   if (nombre === "") {
       alert("Ingrese nombre por favor!");
       return;
   }
   
   amigos.push(nombre);
   input.value = "";
   renderLista();
   console.log(amigos);
}

function renderLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de renderizar
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1️⃣ Validar que la lista no esté vacía
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade nombres primero.");
        return; // Sale si no hay amigos
    }

    // 2️⃣ Generar índice aleatorio entre 0 y amigos.length - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3️⃣ Obtener el nombre sorteado usando el índice
    const amigoSorteado = amigos[indiceAleatorio];

    // 4️⃣ Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;

    
    amigos = [];
    renderLista(); 
}