import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReplaceSource } from 'webpack-sources';

@Component({
    selector: 'app-barchart',
    templateUrl: './barchart.component.html',
    styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

    datasets: any[];
    selectedDataset: string;
    selectedLabel: string;
    selectedValue: string;
    title: string = '';

    closeResult: string;
    values: any[];
    labels: any[];
    barchartLabels: any[];
    barChartType: string = 'bar';
    barChartLegend: boolean = false;
    barChartOptions: any = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    constructor(
        private dataService: DataService,
        private modalService: NgbModal,
    ) { }

    ngOnInit() {
        this.values = [{ "data": 0 }]
        this.labels = ['']
        this.datasets = this.dataService.getDataSets();
    }

    fillLabels($value: any): void {
        this.labels = this.dataService.getLabels(this.selectedDataset);
    }

    fillBarChart() {
        var query = {
            'label': this.selectedLabel,
            'value': this.selectedValue,
            'dataset': this.selectedDataset,
        }
        var resp = this.dataService.getBarChartData(query);
        console.log(resp);
        this.values = [{ "data": resp['data'], label: this.selectedValue }]
        this.barchartLabels = resp['labels']
        this.barChartLegend = true;
    }

    open(content) {
        this.modalService.open(
            content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
                (result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                });
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
}
