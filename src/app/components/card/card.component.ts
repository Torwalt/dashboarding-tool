import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { formatNumber } from '@angular/common';

export interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    selectedDataset: string = '';
    selectedLabel: string = '';
    data: number = null;
    formattedData: string = '';
    datasets: string[];
    labels: string[];
    closeResult: string;

    constructor(
        private modalService: NgbModal,
        private dataService: DataService,
    ) { }

    open(content) {
        this.modalService.open(
            content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
                (result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
    }

    ngOnInit() {
        this.datasets = this.dataService.getDataSets();
    }


    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    fillLabels($value: any): void {
        this.labels = this.dataService.getLabels(this.selectedDataset);
    }

    getData($value: any): void {
        var query = {
            'label': this.selectedLabel,
            'dataset': this.selectedDataset,
        }
        this.data = this.dataService.getCardData(query);
        this.formattedData = formatNumber(this.data, 'de')
        console.log(this.formattedData);
    }


}
