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

}
