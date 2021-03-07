import { Atividade } from './../../../models/Atividade';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { AtividadeService } from 'src/app/services/atividade.service';
import { CronogramaService } from 'src/app/services/cronograma.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-atividades-diarias',
  templateUrl: './atividades-diarias.component.html',
  styleUrls: ['./atividades-diarias.component.css']
})
export class AtividadesDiariasComponent implements OnInit {

  @ViewChild('canvas1', { static: false }) canvas1: ElementRef;
  @ViewChild('canvas2', { static: false }) canvas2: ElementRef;
  public context1: CanvasRenderingContext2D;
  public context2: CanvasRenderingContext2D;
  public chartProgramadas: any;
  public chartConcluidas: any;
  public concluidasCronograma: Atividade[] = [];
  public programadasCronograma: Atividade[] = [];
  public todasCronograma: Atividade[] = [];
  public qtdeProgram: any[] = [];
  public qtdeConclu: any[] = [];

  constructor(
    private cronogramaService: CronogramaService,
    private atividadeService: AtividadeService,
  ) { }

  ngOnInit(): void {
    this.carregaAtividadesCronoAtual();
  }
  
  carregaAtividadesCronoAtual(){
    
    this.cronogramaService.getAll().subscribe(res => {
      let ultimoCrono = res.pop().idCronograma;
      this.atividadeService.getAtividadesConcluidas(ultimoCrono).subscribe((concluidas: Atividade[]) => {
        this.concluidasCronograma = concluidas;
        this.atividadeService.getAtividadesProgramadas(ultimoCrono).subscribe((programadas: Atividade[]) => {
          this.programadasCronograma = programadas;

          let dataProgram: any[] = [];
          let dataProgramFull: any[] = [];
          let dataConclu: any[] = [];
          let dataConcluFull: any[] = [];

          //converter o formato vindo do back
          for (let i in this.programadasCronograma) { dataProgramFull.push(parseISO(this.programadasCronograma[i].dataProgramacao)) }
          for (let i in this.concluidasCronograma) { dataConcluFull.push(parseISO(this.concluidasCronograma[i].dataConclusao)) }

          //formatar as datas para exibir apenas o dia no formato 'dd'
          for (let i in dataProgramFull) { dataProgram.push(format(dataProgramFull[i], 'dd')) }
          for (let i in dataConcluFull) { dataConclu.push(format(dataConcluFull[i], 'dd')) }

          //elimina as datas repetidas do array formatado       
          let dataProgramFiltrada = dataProgram.filter(function (el, i) {
            return dataProgram.indexOf(el) === i;
          });
          let dataConcluFiltrada = dataConclu.filter(function (el, i) {
            return dataConclu.indexOf(el) === i;
          });

          //concatena as datas filtradas em um mesmo array ordenado (programadas e concluidas)
          let todasDatas: string[] = dataProgramFiltrada.concat(dataConcluFiltrada);
          todasDatas = todasDatas.filter(function (el, i) {
            return todasDatas.indexOf(el) === i;
          });
          todasDatas = todasDatas.sort();

          //adiciona os valores nos arrays de atividades programadas e concluidas por dia
          const objProgram = dataProgramFull.reduce((contador, elem) => Object.assign(contador, { [elem]: (contador[elem] || 0) + 1 }), {});
          for (const key in Object.values(objProgram)) {
            this.qtdeProgram.push(Object.values(objProgram)[key]);
          }
          const objConclu = dataConcluFull.reduce((contador, elem) => Object.assign(contador, { [elem]: (contador[elem] || 0) + 1 }), {});
          for (const key in Object.values(objConclu)) {
            this.qtdeConclu.push(Object.values(objConclu)[key])
          }

          //chart  
          this.context1 = (this.canvas1.nativeElement as HTMLCanvasElement).getContext('2d');
          this.chartProgramadas = new Chart(this.context1, {
            type: 'line',
            data: {
              labels: dataProgramFiltrada,
              datasets: [
                {
                  data: this.qtdeProgram,
                  label: `Atividades Programadas = ${dataProgram.length}`,
                  backgroundColor: ["#FF5800"],
                  borderColor: ["#FF5800"]
                }
              ]
            },
            options: {
              responsive: true,
              legend: {
                position: 'top',
              },
              title: {
                display: false,
                text: 'Atividades Mensais'
              },
              animation: {
                animateScale: true,
                animateRotate: true
              }
            }
          })
          this.context2 = (this.canvas2.nativeElement as HTMLCanvasElement).getContext('2d');
          this.chartConcluidas = new Chart(this.context2, {
            type: 'line',
            data: {
              labels: dataConcluFiltrada,
              datasets: [
                {
                  data: this.qtdeConclu,
                  label: `Atividades Concluídas = ${dataConclu.length}`,
                  backgroundColor: ["#9E120E"],
                  borderColor: ["#9E120E"]
                }
              ]
            },
            options: {
              responsive: true,
              legend: {
                position: 'top',
              },
              title: {
                display: false,
                text: 'Atividades Mensais'
              },
              animation: {
                animateScale: true,
                animateRotate: true
              }
            }
          })
        })
      })
    })
  }
}
