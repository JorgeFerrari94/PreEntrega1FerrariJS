let nombre = prompt("Ingrese su nombre")

let respuesta = prompt(`Hola ${nombre} desea usar la calculadora ?`);

if(respuesta.toLowerCase() === "si"){
    let numero1 = parseInt(prompt("Ingrese el numero 1"));
    let operacion = prompt("Ingrese la operacion");
    let numero2 = parseInt(prompt("Ingrese el numero 2"));

    function calculadora(numero1, numero2, operacion) {
          switch (operacion) {
             case "+":
               return numero1 + numero2;
            
        
             case "-":
               return numero1 - numero2;
            
        
             case "*":
               return numero1 * numero2;
            
        
             case "/":
               return numero1 / numero2;
            
        
             default:
               return "operacion no identificada";
            
           }
         }

         let resultado = calculadora(numero1, numero2, operacion);
         alert(resultado);

   

    
}else{
    alert("Gracias por utilizar calculadora Java Script");
 }