import { MesesEnum } from './../../models/enum/MesesEnum';
import { Usuario } from './../../models/Usuario';
import { UsuarioService } from './../../services/usuario.service';

import { Observable } from 'rxjs';
import { Cronograma } from './../../models/Cronograma';
import { CronogramaService } from './../../services/cronograma.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-cronogramas',
  templateUrl: './criar-cronogramas.component.html',
  styleUrls: ['./criar-cronogramas.component.css'],
  providers: [UsuarioService]
})
export class CriarCronogramasComponent implements OnInit {
  
  public title = "Novo Cronograma";
  public cronogramaForm: FormGroup;
  public cronograma: Cronograma;
  public allCronogramas: Observable<Cronograma[]>;
  public supervisores: Usuario[];
  public meses = MesesEnum;
  public mesesArray: string[] = [];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private cronogramaService: CronogramaService,
    private usuarioService: UsuarioService
  ) { 
      this.criarForm();
    }

  ngOnInit(): void {
    this.carregarSupervisores();
    this.carregarMeses()
  }
  
  criarForm(){
    this.cronogramaForm = this.fb.group({
      idSupervisor:['', Validators.required],
      mes: ['', Validators.required],
      ano: ['', Validators.required]
    });
  }
  
  carregarMeses(){
    for (let index = 1; index < 13; index++) {
      this.mesesArray.push(this.meses[index]);     
    } 
  }
  
  cronogramaSubmit(){
    const cronograma: Cronograma = this.cronogramaForm.value;
    this.cronogramaService.createCronograma(cronograma).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.log(error),
      () => {
        alert("Cronograma criado com sucesso !!!");
        this.cronogramaForm.reset();
      }
    );
    console.log(cronograma);
  }
  
  voltarCronogramas(){
    this.route.navigate(["cronogramas"]); 
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
  

}
