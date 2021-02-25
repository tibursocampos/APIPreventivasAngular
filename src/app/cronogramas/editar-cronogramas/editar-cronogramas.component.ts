import { CronogramasComponent } from './../cronogramas.component';
import { Cronograma } from './../../models/Cronograma';
import { CronogramaService } from './../../services/cronograma.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { MesesEnum } from 'src/app/models/enum/MesesEnum';

@Component({
  selector: 'app-editar-cronogramas',
  templateUrl: './editar-cronogramas.component.html',
  styleUrls: ['./editar-cronogramas.component.css']
})
export class EditarCronogramasComponent implements OnInit {
  
  public title = "Editar Cronograma";
  public cronogramaEditForm: FormGroup = 
  this.fb.group({
    idCronograma:[''],
    idSupervisor:[''],
    mes:[''],
    ano:['']
  });
  public cronograma: Cronograma;
  public cronogramaId: number;
  public supervisores: Usuario[];
  public meses = MesesEnum;
  public mesesArray: string[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cronogramaService: CronogramaService,
    private usuarioService: UsuarioService 
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.cronogramaId = params['idCronograma']);
    this.carregarSupervisores();
    this.carregarMeses()
    this.cronogramaService.getCronograma(this.cronogramaId).subscribe(x => this.editarForm(x));
  }
  
  editarForm(cronograma: Cronograma){
    this.cronogramaEditForm.setValue({
      idCronograma: cronograma.idCronograma,
      idSupervisor: cronograma.idSupervisor,
      mes: cronograma.mes,
      ano: cronograma.ano
    });
  }
  
  salvar(){
    const cronograma: Cronograma = this.cronogramaEditForm.value;
    cronograma.idCronograma = Number(cronograma.idCronograma);
    cronograma.idSupervisor = Number(cronograma.idSupervisor);
    this.cronogramaService.editCronograma(cronograma.idCronograma, cronograma).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Cronograma alterado com sucesso !!!");
        this.cronogramaEditForm.reset();
        this.router.navigate(['cronogramas']);
      }
    );
  }
  
  carregarMeses(){
    for (let index = 1; index < 13; index++) {
      this.mesesArray.push(this.meses[index]);     
    } 
  }
  
  carregarSupervisores(){
    this.usuarioService.getUsuarioSupervisor().subscribe(
      (supervisor: Usuario[]) => {
        this.supervisores = supervisor;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  voltar(){
    this.router.navigate(['cronogramas']);
  }

}
