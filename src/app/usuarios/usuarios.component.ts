import { Router } from '@angular/router';
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
  public nomeBusca: string;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregaUsuarios();
  }
  
  carregaUsuarios(){
    this.usuarioService.getAll().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        this.nomeBusca="";
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
  
  buscarNome(){
    this.usuarioService.getUsuarioNome(this.nomeBusca).subscribe(
      (listaUsuarios: Usuario[]) => {
        this.usuarios = listaUsuarios;
        if(listaUsuarios[0] == null){
          let r = confirm("Usuário não encontrado, deseja adicionar um novo usuário?");
          if (r){
            this.router.navigate(['usuario-criar']);
          }
          else {
            this.nomeBusca="";
            this.carregaUsuarios();
          }
        }        
      },
      (erro: any) => {
        console.error(erro);
      }
    );
    
  }
  
  editarUsuario(idUsuario: number){
    this.router.navigate(['usuario-editar', idUsuario]);
  }
  
  apagarUsuario(idUsuario: number){
    if(confirm("Deseja realmente apagar este usuário?")){
      this.usuarioService.deleteUsuario(idUsuario).subscribe(
        dados => {
          console.log(dados);
        },
        error => console.error(error),
        () => {
          alert("Usuário apagado com sucesso.");
          this.carregaUsuarios();
        }
      )
    }
  }

}
