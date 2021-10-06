//========= Variables===============
const childrensInput  = document.querySelector('#childrens');
const padresInput  = document.querySelector('#padres');
const telefonoInput  = document.querySelector('#telefono');
const fechaInput  = document.querySelector('#fecha');
const horaInput  = document.querySelector('#hora');
const sintomasInput  = document.querySelector('#sintomas');

//UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
//======== Clases===========
class Citas{
    constructor(){
        this.citas = [];
    }
};

class UI{
    imprimierAlerta(mensaje, tipo){
        //crear div
        const divMensaje = document.createElement('div');
        //agregar el mensaje
        divMensaje.textContent = mensaje;
        //agregar algunas clases
        divMensaje.classList.add('text-center', 'alert','d-block','col-12');
        //validar 
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    };
};
//instanciar clases
const citas = new Citas();
const ui = new UI();
//=========Eventos=======================
eventListener();
function eventListener() {
    childrensInput.addEventListener('input', datosCitas);
    padresInput.addEventListener('input', datosCitas);
    telefonoInput.addEventListener('input', datosCitas);
    fechaInput.addEventListener('input', datosCitas);
    horaInput.addEventListener('input', datosCitas);
    sintomasInput.addEventListener('input', datosCitas);

    formulario.addEventListener('submit', nuevaCita);
}

//==== Obj principal =====================
const citaObj = {
    children: '',
    padres: '',
    telefono: '',
    fecha: '',
    hora: '',
    simtomas: '',

};
//=========Funciones===========================

//Agrega datos al objecto de citas
function datosCitas(e) {
    citaObj[e.target.name] = e.target.value;// desde aqui puedo ingresar al valor del obj y saber que esta escribiendo
    
};

//Valida y agrega una nueva cita a la clase de citas

function nuevaCita(e) {
    e.preventDefault();
    
    //Extraer la informacion del objeto
    const {children, padres,telefono, fecha,hora, simtomas } = citaObj
    // validar que no esten vacios
    if(children === '' || padres === '' || telefono === '' || fecha === '' || hora === '' || simtomas === ''){
        ui.imprimierAlerta('todos los campos son obligatorios', 'error');
    
        return;
    }
}