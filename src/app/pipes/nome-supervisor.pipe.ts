import { Usuario } from './../models/Usuario';
import { UsuarioService } from './../services/usuario.service';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeSupervisor',
  pure: false
})

export class NomeSupervisorPipe implements PipeTransform {
  
  public usuarioService: UsuarioService;
  public usuarios: Usuario;

  transform(value: number, args?: any[]): string {
    if (value === undefined || args === undefined){
      return null;
    }

    this.carregaUsuario(value); 
    
    return this.usuarios.primeiroNome;  
  }
  
  carregaUsuario(id: number){
    this.usuarioService.getUsuario(id).subscribe(
      (usuarioFiltrado: Usuario) => {
        this.usuarios = usuarioFiltrado;
      }); 
    }
  
}


 
