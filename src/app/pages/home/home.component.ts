import { Component, OnInit, inject} from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { ButtonComponent } from '../../_components/button/button.component';
import { CardsComponent } from '../../_components/cards/cards.component';
import { DecComponent } from '../../_components/dec/dec.component';
import { CardService } from '../../services/card.service';
import { CardDetail } from '../../interfaces/magic.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CardsComponent,
    DecComponent,
  ],
})
export class HomeComponent implements OnInit {
  private cardService = inject(CardService);
  cards: CardDetail[] = [];


  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getCards().subscribe({
      next: (response: any) => {
        //  console.log(response.cards)
        this.cards = response.cards as CardDetail[];
      },
      error: (error) => console.log('Erro ao carregar cards:', error),
    });
  }
}

