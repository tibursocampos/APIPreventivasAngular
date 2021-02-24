import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-total-e-realizadas',
  templateUrl: './total-e-realizadas.component.html',
  styleUrls: ['./total-e-realizadas.component.css']
})
export class TotalERealizadasComponent implements OnInit {
  
    // Doughnut
    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100],
      [50, 150, 120],
      [250, 130, 70],
    ];
    public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }
  
}
