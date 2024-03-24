const lat = document.getElementById('lat');
const lng = document.getElementById('lng');


const button = document.querySelector('.btn-reset');
button.addEventListener('click', () => {
    //navigator.geolocation browser api 
    navigator.geolocation.getCurrentPosition(showPosition);
});


const showPosition = (position) => {
    lat.textContent = `Latitude: ${position.coords.latitude}`;
    lng.textContent = `Longitude: ${position.coords.longitude}`;
}