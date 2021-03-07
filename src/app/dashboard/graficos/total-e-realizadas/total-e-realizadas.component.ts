import { AlvoService } from './../../../services/alvo.service';
import { CronogramaService } from './../../../services/cronograma.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { __await } from 'tslib';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-total-e-realizadas',
  templateUrl: './total-e-realizadas.component.html',
  styleUrls: ['./total-e-realizadas.component.css']
})
export class TotalERealizadasComponent implements OnInit {
  
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chart: any;
   
    
  constructor(
    private cronogramaService: CronogramaService,
    private alvoService: AlvoService,
  ) { }

  ngOnInit(): void {
    this.carregaChartUltimoCronograma();
  }
  
  carregaChartUltimoCronograma(){
    this.cronogramaService.getAll().subscribe(
      (res => {        
        let ultimoCrono = res.pop().idCronograma;        
        this.alvoService.getAlvosConcluidosCronograma(ultimoCrono).subscribe(
          (concluidos => {
            let prontos = concluidos;                  
            this.alvoService.getAlvosRestantesCronograma(ultimoCrono).subscribe(
              (restantes => {
                let faltantes = restantes; 
                                        
                this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
                this.chart = new Chart (this.context, {                  
                  type: 'doughnut',
                  data: {
                    labels: [`Alvos Concluidos ${prontos.length}`, `Alvos Restantes ${faltantes.length}`],
                    datasets: [
                      {
                        data: [prontos.length, faltantes.length],
                         backgroundColor: ["#9E120E","#FF5800"]
                      },          
                    ]
                  },
                  options: {
                    responsive: true,
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: false,
                      text: 'Alvos Concluídos'
                    },
                    animation: {
                      animateScale: true,
                      animateRotate: true
                    }
                  }                 
                }) 
              })                    
            )   
          })
        )
      })
    )
  }
}