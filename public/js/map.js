mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates,
  zoom: 9,
});


const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
  new mapboxgl.Popup({ offset: 25 }) // create a popup
    .setHTML(`<h4> ${listing.title} </h4><p>Exact Location will be provided after booking</p>`) // set its content
           )
  .addTo(map);