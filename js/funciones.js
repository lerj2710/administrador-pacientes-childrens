import Citas from './classes/Citas.js';
import UI from './classes/UI.js';
import {childrensInput, padresInput, telefonoInput, horaInput, fechaInput, sintomasInput, formulario} from './selectores.js'

//instanciar clases
const ui = new UI();
const administrarCitas = new Citas();

//==== Obj principal =====================
const citaObj = {
    children: '',
    padres: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
    
};
let editando= false;


//=========Funciones===========================

//Agrega datos al objecto de citas
export function datosCitas(e) {
    citaObj[e.target.name] = e.target.value;// desde aqui puedo ingresar al valor del obj y saber que esta escribiendo
    // console.log(citaObj);
};

//Valida y agrega una nueva cita a la clase de citas

export function nuevaCita(e) {
    e.preventDefault();
    
    //Extraer la informacion del objeto
    const {children, padres, telefono, fecha, hora, sintomas } = citaObj;
    // validar que no esten vacios
    if(children === '' || padres === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
      ui.imprimierAlerta('todos los campos son obligatorios', 'error');
           return;
    };
    if (editando) {
        ui.imprimierAlerta('Se Edito correctamente');
        //pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj});

        formulario.querySelector('button[type="submit"]').textContent= 'Crear Cita';
        //quitar edicion
        editando= false;

    }else {
        
        //generar un id
        citaObj.id = Date.now()
        //creando cita
        // console.log(citaObj);
        administrarCitas.agregarCita({...citaObj});
      ui.imprimierAlerta('Se agrego correctamente');

    }
    
    //reiniciar el obj
    reinicarObj();

    // reiniciar el formularioo
    formulario.reset();

    //mostrar cita en el HTML
    ui.imprimierCitas(administrarCitas);
}

//funcion para reiniciar el obj
export function reinicarObj() {
    citaObj.children = '';
    citaObj.padres = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

export function eliminarCita(id) {
  //ELIMINAR LA CITA
  administrarCitas.eliminarCita(id);
  //MOSTAR UN MENSAJE
  ui.imprimierAlerta('Se elimino Correctamente');
  //CARGAR EL HTML
  ui.imprimierCitas(administrarCitas);
}

export function cargarEdicion(cita) {
    const {children, padres, telefono, fecha, hora, sintomas, id } = cita;

    childrensInput.value = children;
    padresInput.value = padres;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    citaObj.children = children;
    citaObj.padres = padres;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //cambiar el boton a modo edicion
    formulario.querySelector('button[type="submit"]').textContent= 'Editando Cita';

    editando = true;
}