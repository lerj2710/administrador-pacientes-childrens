import { datosCitas, nuevaCita } from '../funciones.js';
import { childrensInput, padresInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from '../selectores.js';

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        // Eventos
        eventListeners();
        function eventListeners() {
            childrensInput.addEventListener('change', datosCitas);
            padresInput.addEventListener('change', datosCitas);
            telefonoInput.addEventListener('change', datosCitas);
            fechaInput.addEventListener('change', datosCitas);
            horaInput.addEventListener('change', datosCitas);
            sintomasInput.addEventListener('change', datosCitas);

            // Formulario nuevas citas
            formulario.addEventListener('submit', nuevaCita);
        }

    }
}

export default App;