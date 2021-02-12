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
  public titulo: string;

  constructor(
    private cronogramaService: CronogramaService
  ) { }

  ngOnInit(): void {
    this.carregaUltimoCronograma();
    // this.titulo = `Cronograma ${this.ultimoCronograma.mes} de ${this.ultimoCronograma.ano}`;
  }
  
  carregaUltimoCronograma(){
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.ultimoCronograma = cronogramas.pop();
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  } 
  
    

}
