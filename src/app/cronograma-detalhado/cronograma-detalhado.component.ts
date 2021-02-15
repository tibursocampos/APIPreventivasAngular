
import { TipoAtividadeEnum } from './../models/enum/TipoAtividadeEnum';
import { CronogramaDetalhado } from './../models/CronogramaDetalhado';
import { CronogramaService } from './../services/cronograma.service';
import { CronogramaDetalhadoService } from './../services/cronograma-detalhado.service';
import { Component, OnInit } from '@angular/core';
import { Cronograma } from '../models/Cronograma';

@Component({
  selector: 'app-cronograma-detalhado',
  templateUrl: './cronograma-detalhado.component.html',
  styleUrls: ['./cronograma-detalhado.component.css']
})
export class CronogramaDetalhadoComponent implements OnInit {
  
  public ultimoCronograma: number;
  public cronogramaDetalhado: CronogramaDetalhado;
  // public atividade: string;

  constructor(
    private cronogramaDetalhadoService: CronogramaDetalhadoService,
    private cronogramaService: CronogramaService
  ) { }

  ngOnInit(): void {
    this.carregaUltimoCronograma();   
  }
  
  carregaUltimoCronograma(){
    this.cronogramaService.getAll().subscribe(
      (cronogramas: Cronograma[]) => {
        this.ultimoCronograma = cronogramas.pop().idCronograma;
        this.carregarCronogramaDetalhes(this.ultimoCronograma);
      },        
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  carregarCronogramaDetalhes(cronogramaId: number){
    this.cronogramaDetalhadoService.getCronogramaDetalhes(cronogramaId).subscribe(
      (detalhes: CronogramaDetalhado) => {
        this.cronogramaDetalhado = detalhes; 
      },
      (erro: any) => {
        console.error(erro);
      }
    );  
  } 
  
  // exibeNomeAtividade(ativ: TipoAtividadeEnum){
  //   this.atividade = ativ.toString();
  // }

}
