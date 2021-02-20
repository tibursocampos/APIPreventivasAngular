import { SiteService } from './../services/site.service';
import { Site } from './../models/Site';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  public sites: Site[];
  public title: string = "Sites";

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit(): void {
    this.carregaSites();
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

}
