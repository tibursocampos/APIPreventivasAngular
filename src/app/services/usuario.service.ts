import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Usuario } from "../models/Usuario";

@Injectable({
    providedIn: 'root'
})
    
    export class UsuarioService{
        baseUrl = `${environment.mainURL}usuarios`;
        
        constructor(private http: HttpClient){ }
        
        getAll(): Observable<Usuario[]>{
            return this.http.get<Usuario[]>(`${this.baseUrl}`);
        }
        
        getUsuario(idUsuario: number): Observable<Usuario>{
            return this.http.get<Usuario>(`${this.baseUrl}/${idUsuario}`);
        }  
        
        getUsuarioNome(nome: string): Observable<Usuario[]>{
            return this.http.get<Usuario[]>(`${this.baseUrl}/busca?nome=${nome}`);
        }
        
        getUsuarioSupervisor(): Observable<Usuario[]>{
            return this.http.get<Usuario[]>(`${this.baseUrl}/supervisores`);
        }
        
        getUsuarioTecnico(): Observable<Usuario[]>{
            return this.http.get<Usuario[]>(`${this.baseUrl}/tecnicos`);
        }
        
        createUsuario(usuario: Usuario): Observable<Usuario>{
            return this.http.post<Usuario>(this.baseUrl, usuario);
        }
        
        editUsuario(idUsuario: number, usuario: Usuario): Observable<Usuario>{
            return this.http.put<Usuario>(`${this.baseUrl}/${idUsuario}`, usuario);
        }
        
        deleteUsuario(idUsuario: number): Observable<Usuario>{
            return this.http.delete<Usuario>(`${this.baseUrl}/${idUsuario}`);            
        }
    }