import { apis } from '../../../environments/apis';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

    export class Parameter {
        public key: string;
        public value: any;
    }

export abstract class BaseService {
    constructor(protected http: HttpClient, public service: string) { }
 
    get apiUrl(): string {
        return apis[this.service]
    } 

    public get<T>(endpoint: string, par?: Parameter[]): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${endpoint}` );
    }

    public post<T>(endpoint: string, obj: T): Observable<any> {
        return this.http.post(`${this.apiUrl}/${endpoint}`, obj);
    }

    public put<T>(endpoint: string, obj: T): Observable<any>{
        return this.http.put(`${this.apiUrl}/${endpoint}`, obj);
    }

    public delete(endpoint: string): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${endpoint}`);
    }

    /**
     * Method to get the parameter
     */
    private createParameterRequest(parArr: Parameter[]): string {
        if(parArr == null || parArr.length == 0)
            return '';

        let parReturn = `?${parArr[0].key}=${parArr[0].value}`;
        
        for (let index = 1; index < parArr.length; index++) {
          parReturn += `&${parArr[index].key}=${parArr[index].value}`;
        }
        
        return parReturn;
    }
}