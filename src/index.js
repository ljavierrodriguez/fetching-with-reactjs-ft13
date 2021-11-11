import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Carga de la libreria de CSS de bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // Carga de la libreria de CSS de Iconos de Fontawesome

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle'; // Carga de los script de bootstrap

import App from './App'; // Carga del Componente Principal de la aplicacion (ej. Home, Main, Layout, etc.)

render(<App />, document.querySelector('#root')); // Renderizado del Componente en el HTML