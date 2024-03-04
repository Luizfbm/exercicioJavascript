document.write("<p class='custom-message'> Hello, world! 1</p");
console.log("Hello, World! 2");
alert("Hello, World! 3");
var texto = "Hello, World! 4";
console.log(texto);

function imprimirTexto(texto) {
    console.log(texto);
}
imprimirTexto("Hello, World! 5");

document.getElementById("output1").innerText = "Hello, World! 6";

document.getElementById("output3").innerHTML = "Hello, World! 7";

function imprimirTexto(texto) {
    var novoElemento = document.createElement("p");
    novoElemento.textContent = texto;
    document.body.appendChild(novoElemento);
}
imprimirTexto("Hello, World! 7");

var textoNode = document.createTextNode("Hello, World! 8");
document.getElementById("output2").appendChild(textoNode);

var iframe = document.getElementById("iframe");
iframe.contentWindow.document.write("Hello, World! 9");