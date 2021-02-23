import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cronograma } from './../models/Cronograma';
import { CronogramaService } from './../services/cronograma.service';

@Component({
  selector: 'app-cronogramas',
  templateUrl: './cronogramas.component.html',
  styleUrls: ['./cronogramas.component.css']
})
export class CronogramasComponent implements OnInit {
  public title: string = "Cronogramas";
  public cronogramas: Cronograma[];
  public mesBusca: number;

  constructor(
    private route: Router,
    private cronogramaService: CronogramaService
  ) { }

  ngOnInit(): void {
    this.carregaCronogramas();
  }
  
  carregaCronogramas() {
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.cronogramas = cronogramas;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  buscarMes(){
    this.cronogramaService.getCronogramaMes(this.mesBusca).subscribe(
      (listaCronogramas: Cronograma[]) => {
        this.cronogramas = listaCronogramas;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  editar(idCronograma: number){
    this.route.navigate(["cronograma-editar", idCronograma]); 
  } 
  
  alvos(id: number){
    this.route.navigate(["alvos", id]);
  }
  
  apagarCronograma(idCronograma: number){
    if(confirm("Deseja realmente apagar este cronograma?")){
      this.cronogramaService.deleteCronograma(idCronograma).subscribe(
        dados => {
          console.log(dados);
        },
        error => console.error(error),
        () => {
          alert("Cronograma apagado com sucesso.");
          this.carregaCronogramas();
        }
      )
    }
  }
  

}
