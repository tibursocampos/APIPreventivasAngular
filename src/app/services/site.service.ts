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
        
        getSite(idSite: number): Observable<Site>{
            return this.http.get<Site>(`${this.baseUrl}/${idSite}`);
        }           
        
        getByEndId(endId: string): Observable<Site>{
            return this.http.get<Site>(`${this.baseUrl}/busca?endId=${endId}`);
        }
        
        createSite(site: Site): Observable<Site>{
            return this.http.post<Site>(this.baseUrl, site);
        }
        
        editSite(idSite: number, site: Site): Observable<Site>{
            return this.http.put<Site>(`${this.baseUrl}/${idSite}`, site);
        }
        
        deleteSite(idSite: number): Observable<Site>{
            return this.http.delete<Site>(`${this.baseUrl}/${idSite}`);            
        }
    }