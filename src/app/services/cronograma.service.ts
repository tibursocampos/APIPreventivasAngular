import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Cronograma } from './../models/Cronograma';

@Injectable({
    providedIn: 'root'
})
    
    export class CronogramaService{
        baseUrl = `${environment.mainURL}cronogramas`;
        
        constructor(private http: HttpClient){ }
        
        getAll(): Observable<Cronograma[]>{
            return this.http.get<Cronograma[]>(`${this.baseUrl}`);
        }   
        
        getAllPromise(){
            return this.http.get<Cronograma[]>(`${this.baseUrl}`).toPromise();
        }
        
        getCronograma(idCronograma: number): Observable<Cronograma>{
            return this.http.get<Cronograma>(`${this.baseUrl}/${idCronograma}`);
        }
        
        getCronogramaMes(mes: number): Observable<Cronograma[]>{
            return this.http.get<Cronograma[]>(`${this.baseUrl}/busca?mes=${mes}`);
        }
        
        createCronograma(cronograma: Cronograma): Observable<Cronograma>{
            return this.http.post<Cronograma>(this.baseUrl, cronograma);
        }
        
        editCronograma(idCronograma: number, cronograma: Cronograma): Observable<Cronograma>{
            return this.http.put<Cronograma>(`${this.baseUrl}/${idCronograma}`, cronograma);
        }
        
        deleteCronograma(idCronograma: number): Observable<Cronograma>{
            return this.http.delete<Cronograma>(`${this.baseUrl}/${idCronograma}`);            
        }
    }
 
 
    
