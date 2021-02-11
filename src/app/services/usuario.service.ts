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
    }