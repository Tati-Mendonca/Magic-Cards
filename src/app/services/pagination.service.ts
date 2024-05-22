import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "https://api.magicthegathering.io/v1/cards"

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(
    private http: HttpClient
  ){}

  getPaginatedData(page: number): Observable<any>{
    const params = new HttpParams()
    .set('page', page.toString())
    return this.http.get<any>(BASE_URL, { params });
  }

}
