import { apis } from '../../../environments/apis';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



export abstract class BaseService {
    constructor(protected http: HttpClient, public service: string) { }
 
    get apiUrl(): string {
        return apis[this.service]
    } 

    public get<T>(endpoint: string, par?: object): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${endpoint}`, par );
    }

    public post<T>(endpoint: string, body: any): Observable<T> {
        return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body);
    }

    public put<T>(endpoint: string, obj: T): Observable<any>{
        return this.http.put(`${this.apiUrl}/${endpoint}`, obj);
    }

    public delete(endpoint: string): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${endpoint}`);
    }
}