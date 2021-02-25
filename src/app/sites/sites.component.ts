import { Router } from '@angular/router';
import { SiteService } from './../services/site.service';
import { Site } from './../models/Site';
import { Component, OnInit } from '@angular/core';
import { AnfMgEnum } from '../models/enum/AnfMgEnum';
import { EstadoBrEnum } from '../models/enum/EstadoBrEnum';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  public sites: Site[];
  public title: string = "Sites";
  public endIdBusca: string;
  public anfList = AnfMgEnum;
  public anfArray: string[] = [];
  public estadoList = EstadoBrEnum;
  public estadosArray: string[] = [];

  constructor(
    private siteService: SiteService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.carregaSites();
    this.carregarAnf();
    this.carregarEstados();
  }
  
  carregaSites(){
    this.siteService.getAll().subscribe(
      (sites: Site[]) => {
        this.sites = sites;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  apagarSite(idSite: number){
    if (confirm("Deseja realmente apagar este site ?")) {   
      this.siteService.deleteSite(idSite).subscribe(dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Site apagado com sucesso !!!");         
        this.carregaSites();
      }
    );
  }
}
  
buscarEndId(){
  this.siteService.getByEndId(this.endIdBusca).subscribe(
    (sites: Site[]) => {
      this.sites = sites;
      if(sites[0] == null){
        let r = confirm("Site não encontrado, deseja adicionar um novo site?");
        if (r){
          this.route.navigate(['sites-criar']);
        }
        else {
          this.endIdBusca="";
          this.carregaSites();
        }
      }        
    },
    (erro: any) => {
      console.error(erro);
    }
  );  
}
  
  editarSite(idSite: number){
    this.route.navigate(['site-editar', idSite]);
  }
  
  carregarAnf(){
    for (let index = 0; index < 6; index++){
      this.anfArray.push(this.anfList[index]);
    }
  }
  
  carregarEstados(){
    for (let index = 0; index < 27; index++){
      this.estadosArray.push(this.estadoList[index]);     
    }
  }

}
