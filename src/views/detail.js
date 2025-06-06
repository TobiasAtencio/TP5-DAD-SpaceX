export function renderDetail(launch) {
  const app = document.getElementById('app');

  const date = new Date(launch.date_utc).toLocaleString();

  const failures = launch.failures.length > 0
    ? `<ul>${launch.failures.map(f => `<li>${f.reason} (Tiempo: ${f.time}s)</li>`).join('')}</ul>`
    : '<p>No hubo fallas.</p>';

  app.innerHTML = `
    <h1>${launch.name}</h1>
    <img src="${launch.links.patch.small}" alt="${launch.name}" />
    <p><strong>Detalles:</strong> ${launch.details || 'No hay información.'}</p>
    <p><strong>Vuelo Nro:</strong> ${launch.flight_number}</p>
    <p><strong>Fecha de despegue:</strong> ${date}</p>
    <h3>Fallas:</h3>
    ${failures}
    <button id="back">← Volver</button>
  `;

  document.getElementById('back').addEventListener('click', () => {
    history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  });
}

