import { Alvo } from './../models/Alvo';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Cronograma } from './../models/Cronograma';

@Injectable({
    providedIn: 'root'
})
    
    export class AlvoService{
        baseUrl = `${environment.mainURL}alvos`;
        
        constructor(private http: HttpClient){ }
        
        getAll(): Observable<Alvo[]>{
            return this.http.get<Alvo[]>(`${this.baseUrl}`);
        }
        
        getAlvoCronograma(idCronograma: number): Observable<Alvo[]>{
            return this.http.get<Alvo[]>(`${this.baseUrl}/busca?idCronograma=${idCronograma}`);
        }
        
        getAlvoTelaAdd(idCronograma: number): Observable<Alvo[]>{
            return this.http.get<Alvo[]>(`${this.baseUrl}/AlvosAdd/${idCronograma}`);
        }
        
        getAlvosConcluidosCronograma(idCronograma: number): Observable<Alvo[]>{
            return this.http.get<Alvo[]>(`${this.baseUrl}/alvosConcluidos/${idCronograma}`);
        }
        
        getAlvosRestantesCronograma(idCronograma: number): Observable<Alvo[]>{
            return this.http.get<Alvo[]>(`${this.baseUrl}/alvosRestantes/${idCronograma}`);
        }
        
        createAlvo(alvo: Alvo): Observable<Alvo>{
            return this.http.post<Alvo>(this.baseUrl, alvo);
        }
        
        deleteAlvo(idAlvo: number): Observable<Alvo>{
            return this.http.delete<Alvo>(`${this.baseUrl}/${idAlvo}`);            
        }
        
        // editCronograma(idCronograma: number, cronograma: Cronograma): Observable<Cronograma>{
        //     return this.http.put<Cronograma>(`${this.baseUrl}/${idCronograma}`, cronograma);
        // }
    }
 
 
    
