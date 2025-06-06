import { renderHome } from './views/home.js';
import { renderDetail } from './views/detail.js';

export function router() {
  const path = window.location.pathname;

  if (path === '/') {
    fetch('https://api.spacexdata.com/v5/launches')
      .then(res => res.json())
      .then(data => renderHome(data))
      .catch(err => console.error('Error al cargar los lanzamientos', err));
  } else if (path.startsWith('/launch/')) {
    const id = path.split('/launch/')[1];
    fetch(`https://api.spacexdata.com/v5/launches/${id}`)
      .then(res => res.json())
      .then(data => renderDetail(data))
      .catch(err => console.error('Error al cargar detalle del lanzamiento', err));
  }
}
