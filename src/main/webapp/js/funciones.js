function suma() {
    var num1 = Number($("#numero1").val());
    var num2 = Number($("#numero2").val());
    var sumar = num1 + num2;
    var r = $("#resultado").val(sumar);
 }
 
 function resta() {
    var num1 = Number($("#numero1").val());
    var num2 = Number($("#numero2").val());
    var restar = num1 - num2;
    var r = $("#resultado").val(restar);
 }
 
 function multiplicacion() {
    var num1 = Number($("#numero1").val());
    var num2 = Number($("#numero2").val());
    var multiplicar = num1 * num2;
    var r = $("#resultado").val(multiplicar);
 }
 
 function division() {
    var num1 = Number($("#numero1").val());
    var num2 = Number($("#numero2").val());
    var dividir = num1 / num2;
    var r = $("#resultado").val(dividir);
 }