import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.magicthegathering.io/v1/sets';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getBooster(id: number): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.get<any>(BASE_URL, { params });
  }

  getFilter(block: string, name: string): Observable<any> {
    const params = new HttpParams().set('block', block).set('name', name);
    return this.http.get<any>(BASE_URL, { params });
  }
}
