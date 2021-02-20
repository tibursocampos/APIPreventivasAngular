import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Site } from '../models/Site';

@Injectable({
    providedIn: 'root'
})
    
    export class SiteService{
        baseUrl = `${environment.mainURL}sites`;
        
        constructor(private http: HttpClient){ }
        
        getAll(): Observable<Site[]>{
            return this.http.get<Site[]>(`${this.baseUrl}`);
        }
        
        getByEndId(endId: string): Observable<Site>{
            return this.http.get<Site>(`${this.baseUrl}/busca?endId=${endId}`);
        }
    }