import { UsuarioService } from './../../services/usuario.service';
import { Router } from '@angular/router';
import { TipoUsuarioEnum } from './../../models/enum/TipoUsuarioEnum';
import { AreaTecnicoEnum } from './../../models/enum/AreaTecnicoEnum';
import { AnfMgEnum } from 'src/app/models/enum/AnfMgEnum';
import { Usuario } from './../../models/Usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-usuarios',
  templateUrl: './criar-usuarios.component.html',
  styleUrls: ['./criar-usuarios.component.css']
})
export class CriarUsuariosComponent implements OnInit {
  
  public title: "Novo Usuário";
  public usuarioForm: FormGroup;
  public usuario: Usuario;
  public anfList = AnfMgEnum;
  public anfArray: string[] = [];
  public setorList = AreaTecnicoEnum;
  public setorArray: string[] = [];
  public permissaoList = TipoUsuarioEnum;
  public permissaoArray: string[] = [];
  
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) { this.criarForm() }

  ngOnInit(): void {
    this.carregarAnf();
    this.carregarSetorTecnico();
    this.carregarTipoPermissao();
  }
  
  criarForm(){
    this.usuarioForm = this.fb.group({
      cpf: [''],
      primeiroNome: [''],
      ultimoNome: [''],
      email: [''],
      senha: [''],
      anf: [''],
      permissao: [''],
      area: ['']
    });
  }
  
  usuarioSubmit(){
    const usuario: Usuario = this.usuarioForm.value;
    this.usuarioService.createUsuario(usuario).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Usuário adicionado com sucesso.");
        this.limparForm();
        this.voltarUsuarios();
      }
    )
  }
  
  carregarAnf(){
    for (let index = 0; index < 6; index++){
      this.anfArray.push(this.anfList[index]);
    }
  }
  
  carregarSetorTecnico(){
    for (let index = 0; index < 3; index++){
      this.setorArray.push(this.setorList[index]);
    }
  }
  
  carregarTipoPermissao(){
    for (let index = 1; index < 4; index++){
      this.permissaoArray.push(this.permissaoList[index]);
    }
  }
  
  limparForm(){
    this.usuarioForm.reset();
  }
  
  voltarUsuarios(){
    this.router.navigate(['usuarios']);
  }

}
