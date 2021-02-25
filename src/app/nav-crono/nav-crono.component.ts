import { MesesEnum } from './../models/enum/MesesEnum';
import { CronogramaService } from './../services/cronograma.service';
import { CronogramasComponent } from './../cronogramas/cronogramas.component';
import { Cronograma } from './../models/Cronograma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-crono',
  templateUrl: './nav-crono.component.html',
  styleUrls: ['./nav-crono.component.css']
})
export class NavCronoComponent implements OnInit {
  
  public ultimoCronograma: Cronograma;
  public todosCronogramas: Cronograma[];
  public titulo: string;
  public mes = MesesEnum;
  public mesExibir: string;


  constructor(
    private cronogramaService: CronogramaService
  ) { }

  ngOnInit(): void {
    this.carregaUltimoCronograma();  
    this.carregaCronogramas();  
  }
  
  carregaUltimoCronograma(){
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.ultimoCronograma = cronogramas.pop();
        this.mesExibir = this.mes[this.ultimoCronograma.mes];
        this.titulo = `Cronograma ${this.mesExibir} de ${this.ultimoCronograma.ano}`;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  carregaCronogramas(){
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.todosCronogramas = cronogramas;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }   

}
