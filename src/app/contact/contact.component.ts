/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('map', { static: true }) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    // The location of Uluru
    const usi = { lat: 19.2260272, lng: 72.9697189 };
    // The map, centered at USI
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 15,
      center: usi,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // The marker, positioned at USI
    const contentString = `
    <div class="map-content" style="width: 200px;">
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

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    const marker = new google.maps.Marker({
      position: usi,
      map: this.map,
      title: 'ULTRA SPORTS INDIA PVT. LTD.'
    });

    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });
  }
}
