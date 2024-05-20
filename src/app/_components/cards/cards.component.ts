import { Component, OnInit, inject } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CardDetail } from '../../interfaces/magic.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
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

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cards',
//   standalone: true,
//   imports: [],
//   templateUrl: './cards.component.html',
//   styleUrl: './cards.component.css'
// })
// export class CardsComponent {
// cards: any;
// }