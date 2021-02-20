import { CriarSitesComponent } from './../criar-sites/criar-sites.component';
import { Site } from './../../models/Site';
import { SiteService } from './../../services/site.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AnfMgEnum } from 'src/app/models/enum/AnfMgEnum';
import { EstadoBrEnum } from 'src/app/models/enum/EstadoBrEnum';

@Component({
  selector: 'app-editar-sites',
  templateUrl: './editar-sites.component.html',
  styleUrls: ['./editar-sites.component.css']
})
export class EditarSitesComponent implements OnInit {
  
  public title = "Editar Site";
  public siteEditForm: FormGroup = this.fb.group({
    idSite:[''],
    endId: [''],
    siteGsm: [''],
    site3g: [''],
    siteLte: [''],
    cidade: [''],
    estado: [''],
    anf: ['']
  });;
  public site: Site;
  // public idSite: number = this.route.snapshot.params.id;
  public id:  number;
  public anfList = AnfMgEnum;
  public anfArray: string[] = [];
  public estadoList = EstadoBrEnum;
  public estadosArray: string[] = [];

  constructor(
    private fb: FormBuilder,
    private route :ActivatedRoute,
    private router: Router,
    private siteService: SiteService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id = params['idSite']);
    this.carregarAnf();
    this.carregarEstados();
    this.siteService.getSite(this.id).subscribe(
      x => this.editarForm(x)
    );
  }
  
  editarForm(site: Site){
    this.siteEditForm.setValue({
    idSite: site.idSite,
    endId: site.endId,
    siteGsm: site.siteGsm,
    site3g: site.site3g,
    siteLte: site.siteLte,
    cidade: site.cidade,
    estado: site.estado,
    anf: site.anf
    });
  }
  
  voltarSites(){
    this.router.navigate(["sites"]);
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
  
  salvar(){
    const site: Site = this.siteEditForm.value;
    this.siteService.editSite(site.idSite, site).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.log(error),
      () => {
        alert("Site alterado.");
        this.siteEditForm.reset();
        this.router.navigate(['sites']);
      }
    );
  }

}
