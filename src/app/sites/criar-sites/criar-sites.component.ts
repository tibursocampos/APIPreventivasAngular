import { SitesComponent } from './../sites.component';
import { Router } from '@angular/router';
import { SiteService } from './../../services/site.service';
import { Observable } from 'rxjs';
import { Site } from './../../models/Site';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AnfMgEnum } from 'src/app/models/enum/AnfMgEnum';
import { EstadoBrEnum } from 'src/app/models/enum/EstadoBrEnum';

@Component({
  selector: 'app-criar-sites',
  templateUrl: './criar-sites.component.html',
  styleUrls: ['./criar-sites.component.css']
})
export class CriarSitesComponent implements OnInit {
  
  public title: string = "Novo Site";
  public siteForm: FormGroup;
  public site: Site;
  public allSites: Observable<Site[]>;  
  public anfList = AnfMgEnum;
  public anfArray: string[] = [];
  public estadoList = EstadoBrEnum;
  public estadosArray: string[] = [];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private siteService: SiteService,
    private listaSites: SitesComponent
    
  ) { this.criarForm() }

  ngOnInit(): void {
    this.carregarAnf();
    this.carregarEstados();
  }
  
  criarForm(){
    this.siteForm = this.fb.group({
      endId: [''],
      siteGsm: [''],
      site3g: [''],
      siteLte: [''],
      cidade: [''],
      estado: [''],
      anf: ['']
    });
  }
  
  siteSubmit(){
    const site: Site = this.siteForm.value;
    this.siteService.createSite(site).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Site adicionado com sucesso !!!");
        this.limparForm();
      }
    );
  }
  
  limparForm(){
    this.siteForm.reset();
  }
  
  voltarSites(){
    this.route.navigate(['sites']);
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
