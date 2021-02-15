import { CronogramaDetalhado } from './../models/CronogramaDetalhado';
import { Cronograma } from './../models/Cronograma';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'  
})

export class CronogramaDetalhadoService{
    baseURL=`${environment.mainURL}cronogramas/detalhes`;
    
    constructor(private http: HttpClient){}
    
    getCronogramaDetalhes(id: number):Observable<CronogramaDetalhado>{
        return this.http.get<CronogramaDetalhado>(`${this.baseURL}/${id}`);
    }
    
}
