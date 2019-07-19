import { Injectable } from '@angular/core';
import { Data } from '../data/exampleData';
import groupBy from 'lodash/groupBy'

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private classData: Data;

    constructor() {
        this.classData = new Data();
    }

    getBarChartData(query: any): any {
        var q_label = query['label']
        var q_valueLabel = query['value']
        var q_dataset = query['dataset']
        var grps = groupBy(this.classData[q_dataset], function (n) {
            return n[q_label]
        })
        var grouped = []
        var res = {}
        var labels = []
        var data = []
        for (var key in grps) {
            if (grps.hasOwnProperty(key)) {
                var aggregate = grps[key].map(e => e[q_valueLabel]).reduce(
                    (a, b) => a + b, 0)
                grouped.push({ [key]: aggregate })
            }
        }
        console.log(grouped);
        grouped.forEach(el => {
            labels.push(Object.keys(el)[0])
            data.push(Object.values(el)[0])
        });
        res['labels'] = labels;
        res['data'] = data;
        return res
    }

    getDataSets(): any {
        return Object.getOwnPropertyNames(this.classData);
    }

    getTabelData(dataset: string): any {
        var res = {}
        res['cols'] = this.getLabels(dataset);
        res['data'] = this.classData[dataset];
        res['itemSize'] = Object.keys(this.classData[dataset][0]).length;
        return res;
    }

    getLabels(dataset: string): string[] {
        return Object.keys(this.classData[dataset][0]);
    }

    getCardData(query: any): number {
        var label = query['label']
        var dataset = query['dataset']
        var data = this.classData[dataset];

        return data.map(e => e[label]).reduce((a, b) => a + b, 0);

    }

}
