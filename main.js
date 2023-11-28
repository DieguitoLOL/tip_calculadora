// Aqui se calculan con todos los botones 
function calcular(porcentaje){
    let dinero= document.getElementById("cantidad_dinero").value;
    let persona= document.getElementById("cantidad_personas").value;
    let propina=(dinero * porcentaje) / persona;
    let total=(dinero / persona) + propina;
    propina=propina.toFixed(2);
    total=total.toFixed(2);
    document.getElementById("Tip_amount").textContent = propina;
    document.getElementById("Total").textContent = total;    
}
// Aqui se calcula con el input
function calcular_digitado(){
    let porcentaje= document.getElementById("porcentaje_digitado").value;
    let dinero= document.getElementById("cantidad_dinero").value;
    let persona= document.getElementById("cantidad_personas").value;
    let propina=(dinero * porcentaje) / persona;
    let total=(dinero / persona) + propina;
    propina=propina.toFixed(2);
    total=total.toFixed(2);
    document.getElementById("Tip_amount").textContent = propina;
    document.getElementById("Total").textContent = total;    
}
// Aqui muestra el mensaje de alerta
function mostrar_mensaje() {
    let input = document.getElementById("cantidad_personas");
    let mensaje = document.getElementById("mensaje");

    if (input.value == "") {
      mensaje.style.display = "block";
      input.classList.add("color-borde");
    } else {
      mensaje.style.display = "none";
      input.classList.remove("color-borde");
    }
}
// Aqui se limpia todo lo digitado
function remover(){
    porcentaje_digitado.value="";
    cantidad_dinero.value="";
    cantidad_personas.value="";
}