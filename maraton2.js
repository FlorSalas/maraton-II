// Trabajo en equipo!!

// Un hotel recibe huéspedes durante el día, y necesita que el recepcionista haga el ingreso a las habitaciones. Cada cliente que entre, se le asignará un número de habitación consecutivamente (Es decir: el primero tendrá la habitación 1, el segundo el 2, y así sucesivamente). 



// El sistema deberá pedir datos huéspedes hasta que el recepcionista desee finalizar la carga. En la carga se guarda por habitación UN solo nombre, de quien realiza la reserva, no de todas las personas alojadas. 

// La carga se realizará de la siguiente manera: 

// El cliente deberá darle su: Nombre,tipo de habitación y número de días de estancia. Se le brinda el valor a abonar en base :
// -Valor por noche por de habitación:
// * Standard: $2500
// * Doble: $3300
// * Triple: $4300
// * Suite: $7250
// -Si tiene más de 5 noches, se realiza un 10% de descuento.
// -Si es Standard, se le pregunta si quiere desayuno. Tiene un costo adicional de $90 por noche. 


// Al finalizar la carga, nos mostrará un reporte automático con: 

// * La facturación total, es decir el monto total pagado por todos los huespedes. 
// * Un listado con los nombres de todos los huespedes alojados. DE LOS QUE RESERVARÓN
// * Listado de habitaciones ocupadas.

//Al finalizar agregar un readme con el algoritmo y una breve explicación.


// BONUS!

// Ponerle un nombre copado al hotel :D





// recepcion:{
//         NOMBRE.
//         HABITACIÓN.
//         TIPO_HABITACIÓN.
//         NÚMERO.
// }

// //---hacer descuento si es mayor a 5 noches.
// //---si es standar...desayuno

// reporte:{
//         FACTURACIÓN_TOTAL
//         NOMBRES_HUESPEDES
//         HABITACIONES_OCUPADAS

// }




function checkIn () {

        let arrayHabitacion = [];
        let arrayNombre = [];
        let arrayNoches = [];

        
        let tipoHabitacion;

        let nombre;

        let noches;

        let confirmar = true;

        while(confirmar){

        nombre = prompt("Ingrese el nombre del huesped:");

        tipoHabitacion = parseInt(prompt("Ingrese el tipo de habitación que desea: \n1-Standard: $2500 \n2-Doble: $3300 \n3-Triple: $4300 \n4-Suite: $7250"));
        
        

        noches = parseInt(prompt("Cantidad de noches que se va a hospedar"));


      
        // if (noches >=5) {    
        //         total = 2020 * noches;
        //         alert(total - (total*0.1));
        //         alert(total * 0.9);
        // }

        arrayHabitacion.push(tipoHabitacion);
        
        arrayNombre.push(nombre);
        
        arrayNoches.push(noches);
        
        confirmar = confirm("¿Desea ingresar otro huesped?");


      
        }
        // console.log(arrayHabitacion);
        // console.log(arrayNombre);
        // console.log(arrayNoches);
}

checkIn();
    
          








    // let terminar = true;
        // let nombre = '';
        // let dias = 0;
        // let tipoDeHabitacion = '';
        // let contador = 0;
       
        // while(terminar){ 
        //         nombre = prompt('Ingrese el nombre del huesped');
        //         dias = parseInt(prompt('Ingresar los días de hospedaje'));
        //         tipoDeHabitacion = prompt('Ingrese el tipo de habitación a alquilar\nValor por noche por de habitación:* Standard: $2500\n Doble: $3300\nTriple: $4300\nSuite: $7250');
        //         contador = contador + 1;
        //         terminar = confirm('¿Desea continuar?');
                
        //         console.log(arrayHabitacion);
        //        // cargarDatos(nombre,dias,tipoDeHabitacion,contador);
        // }