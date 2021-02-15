import { Alvo } from './../../models/Alvo';
import { CronogramaDetalhadoService } from './../../services/cronograma-detalhado.service';
import { CronogramaDetalhado } from './../../models/CronogramaDetalhado';
import { Router } from '@angular/router';
import { AlvoService } from './../../services/alvo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alvos',
  templateUrl: './alvos.component.html',
  styleUrls: ['./alvos.component.css']
})
export class AlvosComponent implements OnInit {
  
  public title: string = "Alvos do Cronograma";
  public alvos: Alvo[];
  public idCronograma: number;

  constructor(
    private route: Router,
    private alvoService: AlvoService,
    private cronogramaDetalhado: CronogramaDetalhadoService
  ) { }

  ngOnInit(): void {
    this.carregaAlvosCronograma(1);
  }
  
  carregaAlvosCronograma(idCronograma: number){
    this.alvoService.getAlvoTelaAdd(idCronograma).subscribe(
      (alvos: Alvo[]) => {
        this.alvos = alvos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  voltar(){
    this.route.navigate(["cronogramas"]);
  }

}
