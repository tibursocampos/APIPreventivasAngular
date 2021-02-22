import { Usuario } from './../../models/Usuario';
import { UsuarioService } from './../../services/usuario.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AnfMgEnum } from 'src/app/models/enum/AnfMgEnum';
import { AreaTecnicoEnum } from 'src/app/models/enum/AreaTecnicoEnum';
import { TipoUsuarioEnum } from 'src/app/models/enum/TipoUsuarioEnum';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  
  public title = "Editar Usuário";
  public usuario: Usuario;
  public idUsuario: number;
  public anfList = AnfMgEnum;
  public anfArray: string[] = [];
  public setorList = AreaTecnicoEnum;
  public setorArray: string[] = [];
  public permissaoList = TipoUsuarioEnum;
  public permissaoArray: string[] = [];
  public usuarioEditForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.carregarForm();
    this.route.params.subscribe((params: Params) => this.idUsuario = params['idUsuario']);
    this.carregarAnf();
    this.carregarSetorTecnico();
    this.carregarTipoPermissao();
    this.usuarioService.getUsuario(this.idUsuario).subscribe(
      x => this.editarUsuario(x)
    );
  }
  
  carregarForm(){
    this.usuarioEditForm = this.fb.group({
      idUsuario: [''],
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
  
  editarUsuario(usuario: Usuario){
    this.usuarioEditForm.setValue({
      idUsuario: usuario.idUsuario,
      cpf: usuario.cpf,
      primeiroNome: usuario.primeiroNome,
      ultimoNome: usuario.ultimoNome,
      email: usuario.email,
      senha: usuario.senha,
      anf: usuario.anf,
      permissao: usuario.permissao,
      area: usuario.area
    });
  }
  
  salvar(){
    const usuario: Usuario = this.usuarioEditForm.value;
    this.usuarioService.editUsuario(usuario.idUsuario, usuario).subscribe(
      dados => {
        console.log(dados);
      },
      error => console.error(error),
      () => {
        alert("Usuário alterado.");
        this.usuarioEditForm.reset();
        this.router.navigate(['usuarios']);
      }
    )
  }
  
  carregarAnf(){
    for (let index = 0; index < 6; index++){
      this.anfArray.push(this.anfList[index]);
    }
  }
  
  carregarSetorTecnico(){
    for (let index = 1; index < 3; index++){
      this.setorArray.push(this.setorList[index]);
    }
  }
  
  carregarTipoPermissao(){
    for (let index = 1; index < 4; index++){
      this.permissaoArray.push(this.permissaoList[index]);
    }
  }
  
  limparForm(){
    this.usuarioEditForm.reset();
  }
  
  voltarUsuarios(){
    this.router.navigate(['usuarios']);
  }


}
