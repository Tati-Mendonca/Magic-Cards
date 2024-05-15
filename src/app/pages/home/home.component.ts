import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../_components/navbar/navbar.component";
import { FooterComponent } from '../../_components/footer/footer.component';
import { ButtonComponent } from "../../_components/button/button.component";
import { CardsComponent } from "../../_components/cards/cards.component";
import { HttpClient } from '@angular/common/http';
import { Card } from '../../interfaces/magic.interface';



@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, FooterComponent, ButtonComponent, CardsComponent]
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.http.get("https://api.magicthegathering.io/v1/cards")
    .subscribe((response: any) => {
      console.log(response)
    })
}
}
