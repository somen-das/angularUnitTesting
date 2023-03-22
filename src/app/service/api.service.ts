import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
   
})
export class ApiService {
  getValue(): any {
    throw new Error('Method not implemented.');
  }

  public api_url = "https://jsonplaceholder.typicode.com/users";

  constructor( private http : HttpClient) { }

   public getData(): Observable<any> {
    return this.http.get(this.api_url);
  }

}
