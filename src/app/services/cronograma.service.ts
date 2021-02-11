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
    }
 
 
    
