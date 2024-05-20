import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDetail } from '../interfaces/magic.interface';

const BASE_URL = "https://api.magicthegathering.io/v1/cards"

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient
  ){}

  getCards() : Observable<CardDetail>{
    return this.http.get<CardDetail>(BASE_URL)
  }

}
