import { Alvo } from './../../../models/Alvo';
import { AlvoService } from './../../../services/alvo.service';
import { CronogramaService } from './../../../services/cronograma.service';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { Cronograma } from 'src/app/models/Cronograma';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-total-e-realizadas',
  templateUrl: './total-e-realizadas.component.html',
  styleUrls: ['./total-e-realizadas.component.css']
})
export class TotalERealizadasComponent implements OnInit {
  
  public ultimoCronograma: number = 0;
  public alvosConcluidos: Alvo[]=[];
  public concluidos: number;
  public alvosRestantes: Alvo[]=[];
  public restantes: number;
  public dados: any;
  
    // Doughnut
    public doughnutChartLabels: Label[] = ['Alvos Concluídos', 'Alvos Restantes'];    
    public doughnutChartData: MultiDataSet = [[5,15]]; 
    public doughnutChartType: ChartType = 'doughnut';
    
  constructor(
    private cronogramaService: CronogramaService,
    private alvoService: AlvoService
  ) { }

  ngOnInit(): void {
    this.carregaUltimoCronograma();
  }
  
  carregaUltimoCronograma(){
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.ultimoCronograma = cronogramas.pop().idCronograma;
        this.alvoService.getAlvosConcluidosCronograma(this.ultimoCronograma).subscribe(
          (alvos: Alvo[]) => {
            this.concluidos = alvos.length;
            console.log(this.concluidos);
          }); 
          this.alvoService.getAlvosRestantesCronograma(this.ultimoCronograma).subscribe(
            (alvos: Alvo[]) => {
              this.restantes = alvos.length;
              console.log(this.restantes);
            }); 
          
          this.doughnutChartType = 'doughnut';
          this.doughnutChartLabels = ['Alvos Concluídos', 'Alvos Restantes'];
          this.doughnutChartData = [[5,15]];           
          
      },        
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  carregaAlvosConcluidos(idCronograma: number){
    this.alvoService.getAlvosConcluidosCronograma(idCronograma).subscribe(
      (alvos: Alvo[]) => {
        this.alvosConcluidos = alvos;
        console.log(this.alvosConcluidos.length);
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  carregaAlvosRestantes(idCronograma: number){
    this.alvoService.getAlvosRestantesCronograma(idCronograma).subscribe(
      (alvos: Alvo[]) => {
        this.alvosRestantes = alvos;
        console.log(this.alvosRestantes.length);
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
}
