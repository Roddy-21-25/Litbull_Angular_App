import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../components/dogs/Dog.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '/1y3Dx96hNtnFSnod6OyRA==HgDfBLgW9xmqOS1d'
  private UrlApi = 'https://api.api-ninjas.com/v1/dogs?name=';

  constructor(private http: HttpClient) { }

  public GetData(name: string): Observable<any>{
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);

    return this.http.get<any>(this.UrlApi + name, { headers });
  }
}
