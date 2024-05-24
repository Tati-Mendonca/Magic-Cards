import { Component} from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { ButtonComponent } from '../../_components/button/button.component';
import { CardsComponent } from '../../_components/cards/cards.component';
import { DecComponent } from '../../_components/dec/dec.component';
import { PaginationComponent } from '../../_components/pagination/pagination.component';
import { SearchService } from '../../services/search.service';

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
        PaginationComponent
    ]
})
export class HomeComponent  {
  // searchService: any;
  searchService: any = {
    name: "test",
    block: "ixalan"
  }




//   dec: any = [];
//   block: string = 'ixalan'
//   name: string = 'angel'

  // constructor( searchService: SearchService) {}

//   ngOnInit(): void {
//     this.searchCards();
// }



// searchCards() {
//     this.searchService.getCardsSelected(this.block, this.name).subscribe({
//         next: (response: any) => {
//               console.log(response.dec)
//             // this.cards = response.cards as CardDetail[];
//         },
//         error: (error) => console.log("The requested resource was not found.", error),
//     });
// }
}

