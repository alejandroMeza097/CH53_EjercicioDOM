

let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");

let encabezado2 = document.getElementById("encabezado2");

let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item p-4 active")

let otroElemento = document.querySelector("ul>li");

let otrosElementos = document.querySelectorAll("ul>li");

//console.log(otroElemento);
//console.log(otrosElementos);
//console.log(otrosElementos.length);
//console.log(elementos.length);
//console.log(lista.length);
//console.log(lista.item(0));
//console.log(elementos[0]);

//VARIABLES PARA FORMULARIO...
let telefono = document.getElementById("telefono");
let curp = document.getElementById("curp");
let rfc = document.getElementById("rfc");



//FUNCIONES...

let contador = 0;

function myFunction(){
    encabezado1.innerHTML = encabezado1.innerHTML + "<em>Hola jejej</em>"
    contador++;
}


btnMostrar.addEventListener("click",function(event) {
    event.preventDefault();
    let element = document.createElement("li");
    element.innerText = "Another item";
    element.classList.add("list-group-item");
    element.classList.add("p-4");

    let element2 = element.cloneNode(element);
    //listas.item(0).before(element);
    //listas.item(0).prepend(element);
    //listas.item(0).before(element2);
    //listas.item(0).after(element);
    //listas.item(0).append(element2);

    //listas.item(1).insertAdjacentElement("afterbegin",element);
    //listas.item(1).insertAdjacentElement("beforeend",element2);

    listas.item(1).insertAdjacentHTML("afterbegin",`
        <li class="list-group-item p-4">Another element </li>
        `);

    listas.item(1).insertAdjacentHTML("beforeend",`
        <li class="list-group-item p-4">Another element </li>
        `);

    listas.item(1).insertAdjacentHTML("afterend",`
        <li class="list-group-item p-4">Another element </li>
        `);

    listas.item(1).insertAdjacentHTML("beforebegin",`
        <li class="list-group-item p-4">Another element </li>
        `);
    
});


window.addEventListener("load",function(event){
    console.log("pagina cargada");
});



function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}



curp.addEventListener("blur",txtToUpper);


rfc.addEventListener("blur",txtToUpper);


telefono.addEventListener("blur",function(event){
    telefono.value = telefono.value.trim().slice(0,10);
});






