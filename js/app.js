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
    };
    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    };
    eliminarCita(id){
        this.citas = this.citas.filter( cita => cita.id !== id);
    }

};

class UI{
    imprimierAlerta(mensaje, tipo){
        //crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert','d-block','col-12');
        //validar 
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        //agregar el mensaje
        divMensaje.textContent = mensaje;
        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));
        //quitar la alerta
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    };
    imprimierCitas({citas}){// aplicando distructory desde adentro
       
        this.limpiarHtml();
        citas.forEach(cita => {

            const {children, padres, telefono, fecha, hora, sintomas, id } = cita;
                //crear un div
            const divCita = document.createElement('div');
                 divCita.classList.add('cita', 'p-3');
                 divCita.dataset.id = id;

            //scripting
          
                    //======Hijo========

                    const childrenParrafo = document.createElement('h2');
                    childrenParrafo.classList.add('card-title', 'font-weignt-bolder');
                    childrenParrafo.textContent= children;


                    //======Padre========

                    const padresParrafo = document.createElement('p');
                    padresParrafo.innerHTML= ` <span class="font-weignt-bolder"> Padre:</span> ${padres}  `;
                    childrenParrafo.textContent= children;


                    //======Tefelono========

                    const telefonoParrafo = document.createElement('p');
                    telefonoParrafo.innerHTML= ` <span class="font-weignt-bolder">Tlf:</span> ${telefono}  `;


                    //======Fecha========

                    const fechaParrafo = document.createElement('p');
                    fechaParrafo.innerHTML= ` <span class="font-weignt-bolder"> Fecha:</span> ${fecha}  `;


                    //======Hora========

                    const horaParrafo = document.createElement('p');
                    horaParrafo.innerHTML= ` <span class="font-weignt-bolder"> Padre:</span> ${hora}  `;

                    //======Sintomas========

                    const sintomasParrafo = document.createElement('p');
                    sintomasParrafo.innerHTML= ` <span class="font-weignt-bolder"> Padre:</span> ${sintomas}  `;
                    // agregar al divCitas
                    divCita.appendChild(childrenParrafo);
                    divCita.appendChild(padresParrafo);
                    divCita.appendChild(telefonoParrafo);
                    divCita.appendChild(fechaParrafo);
                    divCita.appendChild(horaParrafo);
                    divCita.appendChild(sintomasParrafo);
        

                  // instertar al Html
                  contenedorCitas.appendChild(divCita);

                  //crear botones
                  const btnEliminar = document.createElement('button');
                        btnEliminar.classList.add('btn', 'btn-danger','mr-2');
                        btnEliminar.innerHTML= `Eliminar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>`;
                      const btnEditar = document.createElement('button');
                      btnEditar.classList.add('btn', 'btn-warning','mr-2');
                      btnEditar.innerHTML= `Editar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>`;
                    btnEliminar.onclick = ()=> eliminarCita(id);

                      divCita.appendChild(btnEliminar);
                      divCita.appendChild(btnEditar);
        })
            
            
        };
        limpiarHtml(){
            while (contenedorCitas.firstChild) {
                
                contenedorCitas.removeChild(contenedorCitas.firstChild)
            }
        };
};
//instanciar clases
const ui = new UI();
const administrarCitas = new Citas();
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
    sintomas: ''

};
//=========Funciones===========================

//Agrega datos al objecto de citas
function datosCitas(e) {
    citaObj[e.target.name] = e.target.value;// desde aqui puedo ingresar al valor del obj y saber que esta escribiendo
    // console.log(citaObj);
};

//Valida y agrega una nueva cita a la clase de citas

function nuevaCita(e) {
    e.preventDefault();
    
    //Extraer la informacion del objeto
    const {children, padres, telefono, fecha, hora, sintomas } = citaObj;
    // validar que no esten vacios
    if(children === '' || padres === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
      ui.imprimierAlerta('todos los campos son obligatorios', 'error');
           return;
    };

    //generar un id
    citaObj.id = Date.now()
    //creando cita
    // console.log(citaObj);
    administrarCitas.agregarCita({...citaObj});
    
    //reiniciar el obj
    reinicarObj();

    // reiniciar el formularioo
    formulario.reset();

    //mostrar cita en el HTML
    ui.imprimierCitas(administrarCitas);
}

//funcion para reiniciar el obj
function reinicarObj() {
    citaObj.children = '';
    citaObj.padres = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id) {
  //ELIMINAR LA CITA
  administrarCitas.eliminarCita(id);
  //MOSTAR UN MENSAJE
  ui.imprimierAlerta('Se elimino Correctamente');
  //CARGAR EL HTML
  ui.imprimierCitas(administrarCitas);
}