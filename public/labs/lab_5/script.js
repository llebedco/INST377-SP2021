function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const map = L.map('mapid').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGVsb3JhIiwiYSI6ImNrbTJyNXdxbjBqNmkyb2p2ejZ1bmRjeHMifQ.SITTaqG-vkEvkkKfXw1Fyw'
  }).addTo(map);
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');
  const replyMessage = document.querySelector('.reply-message');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener('submit', async(event) => {
    targetList.innerText = '';

    event.preventDefault();

    // eslint-disable-next-line max-len
    const filtered = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
    filtered.forEach((item) => {
      const topFive = filtered.slice(0, 5);

      if (topFive.length < 1) {
        replyMessage.classList.add('box');
        replyMessage.innerText = 'No matches found';
      }
      topFive.forEach((item) => {
        const longLat = item.geocoded_column_1.coordinates;
        const marker = L.marker(38.9897, -76.9378).addTo(map);

        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<div class="list-header is-size-5">${item.name}</div><address class="is-size-6">${item.address_line_1}</address>`;
        targetList.append(appendItem);
      });
      const {coordinates} = topFive[0]?.geocoded_column_1;
      // console.log('viewSet cords', coordinates);
      mapObjectFromFunction.panTo([coordinates[1], coordinates[0]], 0);
    });
    search.addEventListener('input', (event) => {

    });
  });
}

async function windowActions() {
  const map = mapInit(); // load map
  await dataHandler(map); // load food data
}
window.onload = windowActions;