import { Atividade } from './../models/Atividade';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
    
    export class AtividadeService{
        baseUrl = `${environment.mainURL}atividades`;
        
        constructor(private http: HttpClient){ }
        
        getAll(): Observable<Atividade[]>{
            return this.http.get<Atividade[]>(`${this.baseUrl}`);
        }
        
        getAtividade(idAtividade: number): Observable<Atividade>{
            return this.http.get<Atividade>(`${this.baseUrl}/${idAtividade}`);
        }
        
        getAtividadesCronograma(idCronograma: number): Observable<Atividade[]>{
            return this.http.get<Atividade[]>(`${this.baseUrl}/todas/cronograma?idCronograma=${idCronograma}`);
        }
        
        getAtividadesConcluidas(idCronograma: number): Observable<Atividade[]>{
            return this.http.get<Atividade[]>(`${this.baseUrl}/concluidas/cronograma?idCronograma=${idCronograma}`);
        }
        
        getAtividadesProgramadas(idCronograma: number): Observable<Atividade[]>{
            return this.http.get<Atividade[]>(`${this.baseUrl}/programadas/cronograma?idCronograma=${idCronograma}`);
        }
        
        editAtividade(idAtividade: number, atividade: Atividade): Observable<Atividade>{
            return this.http.put<Atividade>(`${this.baseUrl}/${idAtividade}`, atividade);
        }

    }