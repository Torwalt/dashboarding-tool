import { Injectable, Input } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from "angular2-uuid";

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    public options: GridsterConfig = {
        draggable: {
            enabled: true,
            ignoreContentClass: 'my-class',
        },
        pushItems: true,
        resizable: {
            enabled: true
        },
    };

    public layout: GridsterItem[] = [];

    constructor() { }

    addItem(directive: string): void {
        // if (directive == 'Card') {
        //     var cardItem = {
        //         cols: 2,
        //         id: UUID.UUID(),
        //         rows: 2,
        //         x: 1,
        //         y: 1,
        //         ChartType: directive
        //     };
        // this.layout.push(cardItem);
        // } else {
        this.layout.push({
            cols: 5,
            id: UUID.UUID(),
            rows: 5,
            x: 1,
            y: 1,
            ChartType: directive
        });
        // }
    }

    deleteItem(id: string): void {
        var item = this.layout.find(d => d.id === id);
        console.log(item);
        this.layout.splice(this.layout.indexOf(item), 1);
    }
}
