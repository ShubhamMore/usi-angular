// Initialize and add the map
function initMap() {
  // The location of Uluru
  var usi = { lat: 19.2260272, lng: 72.9697189 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: usi });
  // The marker, positioned at Uluru

  var contentString = `
    <div class="map-content">
        <h6 class="map-content-heading">ULTRA SPORTS INDIA PVT. LTD.</h6>
        <div id="map-content-body">
        <p>
            <b>Ultra Sports India,</b>
            <span>
                105, First Floor, Regal Plaza, West, Lok Puram, Vasant Vihar, Thane West, Thane - 400 610, Maharashtra, India
            <span>
        </p>
        <p>
            <a
            href="https://www.google.com/maps/place/Ultra+Sports+India/@19.2260139,72.8996784,12z/data=!4m18!1m12!4m11!1m3!2m2!1d72.9697163!2d19.2313627!1m6!1m2!1s0x3be7b95dfff21f19:0xfefe3ae4874999f8!2sUltra+Sports+India,+105,+First+Floor,+Regal+Plaza,+West,+Lok+Puram,+Vasant+Vihar,+Thane+West,+Thane,+Maharashtra+400610!2m2!1d72.9697189!2d19.2260272!3m4!1s0x3be7b95dfff21f19:0xfefe3ae4874999f8!8m2!3d19.2260272!4d72.9697189"
            >
                <span>View on Google Maps<span>
            </a>
        </p>
        </div>
    </div>
  `;

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: usi,
    map: map,
    title: 'ULTRA SPORTS INDIA PVT. LTD.'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
