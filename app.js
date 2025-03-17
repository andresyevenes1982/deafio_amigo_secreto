// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres
let listaNombres = [];
 
let agregarNombre = function () {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let listaUl = document.getElementById("listaAmigos");

    //Validacion de los nombres
    let regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regex.test(nombre)) {
        alertify.error("El nombre no es válido. Solo se permiten letras y espacios.");
        return;
    }
    //Valida si estan repetidos
    if (listaNombres.includes(nombre)) {
        alertify.warning(`El nombre "${nombre}" ya está en la lista.`);
        return;
    }
    //Valida el maximo de nombres
    if (listaNombres.length >= 10) {
        alertify.message("La lista ya tiene el máximo de 10 nombres.");
        return;
    }

    listaNombres.push(nombre);

    let li = document.createElement("li");
    li.textContent = nombre;
    listaUl.appendChild(li);

    alertify.success(`Nombre "${nombre}" agregado con éxito.`);

    //Borra el imput de ingreso
    input.value = "";
    input.focus();
};

//Sorte un amigo desde la lista
let sortearAmigo = function () {
    if (listaNombres.length === 0) {
        alertify.error("La lista está vacía. Agrega nombres primero.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSeleccionado = listaNombres[indiceAleatorio];

    //Muestra el elemento seleecionado desde la lista
    alertify.alert("Amigo Secreto", `El amigo seleccionado es: ${amigoSeleccionado}`, function () {
        listaNombres = [];
        document.getElementById("listaAmigos").innerHTML = "";
        alertify.success("Lista de amigos vaciada.");
    });
};
