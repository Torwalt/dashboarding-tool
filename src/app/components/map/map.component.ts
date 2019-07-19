import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    lat: number = 51.678418;
    lng: number = 7.809007;

    markers = [
        {
            lat: 51.678518,
            long: 7.809007,
        },
        {
            lat: 51.678218,
            long: 7.809007,
        },
        {
            lat: 51.678318,
            long: 7.809007,
        },
        {
            lat: 51.678118,
            long: 7.809007,
        },
    ]

}
