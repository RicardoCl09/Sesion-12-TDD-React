// Se va a construir una aplicación de selección y búsqueda de emisoras de radio en streaming

import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

// 0 - La aplicación debe renderizar correctamente
describe('0 - La aplicación debe renderizar correctamente', () => {
  test('0 - La aplicación debe renderizar correctamente', () => {
    const view = render(<App></App>)
    expect(view).toBeDefined();
  })
})

// 1 - El nombre de la aplicación debe mostrarse en algún lugar => "OpenRadioCamp"
describe('1 - El nombre de la aplicación debe mostrarse en algún lugar => "OpenRadioCamp"', () => {
  test('1 - El nombre de la aplicación debe mostrarse en algún lugar => "OpenRadioCamp"', () => {
    const nombre = 'OpenRadioCamp';
    const view = render(<App></App>)
    const el = view.getByText(nombre);
    expect(el).toBeInTheDocument();
  })
})

// 2 - Debemos poder buscar radios por nombre
// 2a - La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
// 2b - La aplicación debe tener un botón de búsqueda => Texto "Buscar"
// 2c - Cuando ahcemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez

// 3 - Debe existir un listado de emisoras
// 3a - El listado debe inicializar vacío
// 3b - Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado
// 3c - Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han 
//encontrado emisoras para esta busqueda"