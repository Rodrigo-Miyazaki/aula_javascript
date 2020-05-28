function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function clicou(){
    window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    /* document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse"; */
}

function voltar(elemento){
    elemento.innerHTML =  "Passe o mouse aqui";
    /* document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"; */
}

function load(){
    alert("pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}

/* function soma(n1,n2){
    return n1*n2;
}

var validar = 0;
function validaIdade(idade){
    var validar
    if(idade>=18){
       return validar = true;
    } else {
        return validar = false;
    }
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar); */

/* alert(soma(5,10)); */

/* var d = new Date();
console.log(d.getDate())
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes()); */

/* for(count = 0; count < 5; count++){
    alert(count);
} */

/* var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    count++;
} */

/* var idade = prompt("Qual sua idade");

if(idade>=18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
} */

/* var frutas = [{nome: "maçã", cor:"vermelha"},{nome: "uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome); */

/* var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor); */

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var name = "Rafael Galleani";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(name + " tem " + idade + " anos.");
//alert(idade+idade2);
//console.log(name);
//console.log(idade+idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));