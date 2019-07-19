import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-widget-selection',
    templateUrl: './widget-selection.component.html',
    styleUrls: ['./widget-selection.component.scss']
})
export class WidgetSelectionComponent implements OnInit {

    @Output() createBarchartEvent = new EventEmitter();
    @Output() createMapEvent = new EventEmitter();
    @Output() createCardEvent = new EventEmitter();
    @Output() createInputEvent = new EventEmitter();
    @Output() createTableEvent = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

    createBarchartEventEmit() {
        this.createBarchartEvent.emit(null);
    }

    createMapEventEmit() {
        this.createMapEvent.emit(null);
    }

    createCardEventEmit() {
        this.createCardEvent.emit(null);
    }

    createInputEventEmit() {
        this.createInputEvent.emit(null);
    }

    createTableEventEmit() {
        this.createTableEvent.emit(null);
    }
}
