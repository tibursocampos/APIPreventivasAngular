import { Component, OnInit } from '@angular/core';

import { Cronograma } from './../models/Cronograma';
import { CronogramaService } from './../services/cronograma.service';

@Component({
  selector: 'app-cronogramas',
  templateUrl: './cronogramas.component.html',
  styleUrls: ['./cronogramas.component.css']
})
export class CronogramasComponent implements OnInit {
  public cronogramas: Cronograma[];

  constructor(
    private cronogramaService: CronogramaService
  ) { }

  ngOnInit(): void {
    this.carregaCronogramas();
  }
  
  public carregaCronogramas() {
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.cronogramas = cronogramas;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
    // throw new Error('Method not implemented.');
  }
  
  // exibirTodos(){
  //   this.carregaCronogramas();
  // }
  

}
