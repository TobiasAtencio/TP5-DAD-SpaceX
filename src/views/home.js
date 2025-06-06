export function renderHome(launches) {
  const app = document.getElementById('app');
  app.innerHTML = '<h1>Lanzamientos de SpaceX</h1><div id="grid" class="grid"></div>';

  const grid = document.getElementById('grid');

  launches.forEach(launch => {
    if (!launch.links?.patch?.small) return;

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${launch.name}</h3>
      <img src="${launch.links.patch.small}" alt="${launch.name}" style="cursor: pointer;" />
    `;

    card.querySelector('img').addEventListener('click', () => {
      history.pushState({}, '', `/launch/${launch.id}`);
      window.dispatchEvent(new Event('popstate'));
    });

    grid.appendChild(card);
  });
}
