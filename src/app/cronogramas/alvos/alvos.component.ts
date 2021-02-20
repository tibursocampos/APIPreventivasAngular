import { Alvo } from './../../models/Alvo';
import { CronogramaDetalhadoService } from './../../services/cronograma-detalhado.service';
import { CronogramaDetalhado } from './../../models/CronogramaDetalhado';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlvoService } from './../../services/alvo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alvos',
  templateUrl: './alvos.component.html',
  styleUrls: ['./alvos.component.css']
})
export class AlvosComponent implements OnInit {
  
  public title: string = "Alvos do Cronograma";
  public alvos: Alvo[] = [];
  public idCronograma: number;
  public idAlvo: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alvoService: AlvoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.idCronograma = params['idCronograma']);
    this.carregaAlvosCronograma(this.idCronograma);
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
    this.router.navigate(["cronogramas"]);
  }
  
  criarAlvo(){
    this.AdicionarAlvo(this.idCronograma);
  }
  
  AdicionarAlvo(idCronograma: number){
    this.router.navigate(["alvo-criar", idCronograma]);
  }
  
  apagarAlvo(idAlvo: number){
    if (confirm("Deseja realmente deletar este alvo ?")) {   
      this.alvoService.deleteAlvo(idAlvo).subscribe(dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Alvo deletado com sucesso !!!");         
        this.carregaAlvosCronograma(this.idCronograma);
      }
    );
  }
}

}
