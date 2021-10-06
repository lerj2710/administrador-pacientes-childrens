//========= Variables===============
const childrensInput  = document.querySelector('#childrens');
const padresInput  = document.querySelector('#padres');
const telefonoInput  = document.querySelector('#telefono');
const fechaInput  = document.querySelector('#fecha');
const horaInput  = document.querySelector('#hora');
const sintomasInput  = document.querySelector('#sintomas');

//formulario
const formulario = document.querySelector('#nueva-cita');
//vid 
const contenedorCitas = document.querySelector('#citas');

//=========Eventos================
eventListener();
function eventListener() {
    childrensInput.addEventListener('input', datosCitas);
    padresInput.addEventListener('input', datosCitas);
    telefonoInput.addEventListener('input', datosCitas);
    fechaInput.addEventListener('input', datosCitas);
    horaInput.addEventListener('input', datosCitas);
    sintomasInput.addEventListener('input', datosCitas);
}

//==== Obj===
const citaObj = {
    children: '',
    padres: '',
    telefono: '',
    fecha: '',
    hora: '',
    simtomas: '',

};
//=========Funciones===============

function datosCitas(e) {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}