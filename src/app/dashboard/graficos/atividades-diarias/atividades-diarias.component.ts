import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AtividadeService } from 'src/app/services/atividade.service';
import { CronogramaService } from 'src/app/services/cronograma.service';

@Component({
  selector: 'app-atividades-diarias',
  templateUrl: './atividades-diarias.component.html',
  styleUrls: ['./atividades-diarias.component.css']
})
export class AtividadesDiariasComponent implements OnInit {
  
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chart: any;
  
  constructor(
    private cronogramaService: CronogramaService,
    private atividadeService: AtividadeService,
  ) { }

  ngOnInit(): void {
    this.cronogramaService.getAll().subscribe(res => {
      let ultimoCrono = res.pop().idCronograma; 
      this.atividadeService.getAtividadesConcluidas(ultimoCrono).subscribe(atividades => {
        let concluidasCronograma = atividades;
        console.log(concluidasCronograma);
      })
    })
  }
  
  
  public lineChartData: ChartDataSets[] = [
    { data: [5, 6, 4, 7, 4, 0, 0, 4, 6, 4, 2, 5, 0, 0, 5, 6, 4, 7, 3, 0, 0, 5, 6, 4, 7, 3, 0, 0, 3, 6], label: 'Atividades x Dia' },
  ];
  public lineChartLabels: Label[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','15', '15',
                                     '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
  public lineChartOptions: (ChartOptions)
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];



}
