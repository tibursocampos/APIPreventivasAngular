import { EstadoBrEnum } from './../../../models/enum/EstadoBrEnum';
import { AnfMgEnum } from './../../../models/enum/AnfMgEnum';
import { AlvoService } from './../../../services/alvo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Alvo } from './../../../models/Alvo';
import { Site } from './../../../models/Site';
import { SiteService } from './../../../services/site.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-alvos',
  templateUrl: './criar-alvos.component.html',
  styleUrls: ['./criar-alvos.component.css']
})
export class CriarAlvosComponent implements OnInit {
  
  public title = "Adiconar Alvo";
  public sites: Site[];
  public site: Site[];
  public novoAlvo = new Alvo();
  public alvoForm: FormGroup;
  public siteBusca: string;
  public idSite: number;
  public idCronograma: number;
  public anfList: AnfMgEnum[] = [];
  public estadoList: EstadoBrEnum[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private siteService: SiteService,
    private alvoService: AlvoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.idCronograma = params['idCronograma']);
    this.carregarSites();
  }
  
  voltar(){
    this.voltarAnterior();
  }
  
  voltarAnterior(){
    this.router.navigate(["alvos", this.idCronograma]);
  }
  
  carregarSites(){
    this.siteService.getAll().subscribe(
      (site: Site[]) => {
        this.sites = site;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  buscarSite(){
    this.siteService.getByEndId(this.siteBusca).subscribe(
      (site: Site[])  => {
        this.site = site;
        if (site[0] == null){
          let r = confirm("Site não encontrado. Deseja adicionar um novo site?");
          if (r == true){
              this.router.navigate(["sites-criar"]);
          } 
          else{
            this.siteBusca ="";
          }
        }
      },
      (erro: any) => {
        console.error(erro);
      },
    )
  }
  
  adicionaAlvo(idSite: number){
    this.novoAlvo.idSite = idSite;
    this.novoAlvo.idCronograma = Number(this.idCronograma);
    this.novoAlvo.concluido = false;
    console.log(this.novoAlvo);
    this.alvoService.createAlvo(this.novoAlvo).subscribe(
      dados =>{
        console.log(dados);
      },
      // error => console.error(error),
      () => {
        alert("Alvo adicionado e atividades criadas !!!");
        this.siteBusca = "";
      }
    )
  }
  
  limparConsulta(){
    this.siteBusca = "";
    this.buscarSite();
  }
  
    alvosSubmit(){
    const alvo: Alvo = this.alvoForm.value;
    this.alvoService.createAlvo(alvo).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.log(error),
      () => {
        alert("Cronograma criado com sucesso !!!");
        this.alvoForm.reset();
      }
    );
  }

}
