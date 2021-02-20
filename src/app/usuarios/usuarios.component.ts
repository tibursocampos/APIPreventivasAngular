import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: Usuario[];
  public title: string = "Usuários";

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.carregaUsuarios();
  }
  
  carregaUsuarios(){
    this.usuarioService.getAll().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  editarUsuario(idUsuario: number){
    
  }
  
  apagarUsuario(idUsuario: number){
    
  }

}
