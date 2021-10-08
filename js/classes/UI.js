import { eliminarCita, cargarEdicion} from '../funciones.js';
import {contenedorCitas } from '../selectores.js';

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

            const btnEliminar = document.createElement('button');
                    btnEliminar.classList.add('btn', 'btn-danger','mr-2');
                    btnEliminar.innerHTML= `Eliminar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>`;
                    btnEliminar.onclick = ()=> eliminarCita(id);

             const btnEditar = document.createElement('button');
                  btnEditar.classList.add('btn', 'btn-info','mr-2');
                  btnEditar.innerHTML= `Editar <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>`;
                    btnEditar.onclick =()=> cargarEdicion(cita);
                    // agregar al divCitas
                    divCita.appendChild(childrenParrafo);
                    divCita.appendChild(padresParrafo);
                    divCita.appendChild(telefonoParrafo);
                    divCita.appendChild(fechaParrafo);
                    divCita.appendChild(horaParrafo);
                    divCita.appendChild(sintomasParrafo);
        
                             //crear botones
                    divCita.appendChild(btnEliminar);
                    divCita.appendChild(btnEditar);

                         // instertar al Html
                    contenedorCitas.appendChild(divCita);
      })
            
            
   };
        limpiarHtml(){
            while (contenedorCitas.firstChild) {
                
                contenedorCitas.removeChild(contenedorCitas.firstChild)
            }
        };
};

export default UI;