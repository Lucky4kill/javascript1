alert("la cuaneta ha llegado");
var platoprincipal = parseInt(prompt("costo del plato principal"));
var postre  = parseInt(prompt("costo del postre"));
var entrada = parseInt(prompt("costo de la entrada"));
var bebida = parseInt(prompt("costo de la bebida"));
alert("presione F12 para ver la consola");

var suma = platoprincipal+postre+entrada+bebida;
var igv = suma*0.18;
var total = suma+igv;
console.log("deveras pagar "+total);
console.log(entrada);
console.log(platoprincipal);
console.log(postre);
console.log(bebida);
console.log("vuelva pronto");
