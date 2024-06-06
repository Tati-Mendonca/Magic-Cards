import { Component } from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { ButtonComponent } from '../../_components/button/button.component';
import { CardsComponent } from '../../_components/cards/cards.component';
import { DecComponent } from '../../_components/dec/dec.component';
import { PaginationComponent } from '../../_components/pagination/pagination.component';
import { SearchService } from '../../services/search.service';
import { Set } from '../../interfaces/sets.interfaces';
import { LoadingComponent } from '../../loading/loading.component';

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
    PaginationComponent,
    LoadingComponent,
  ],
})
export class HomeComponent {
  sets: any = [];
  visibleCards: boolean = true;
  visibleLoading: boolean = false;
  visibleDec: boolean = true;

  constructor(private searchService: SearchService) {}

  loadDec(eventData: { name: string; block: string }) {
    this.searchService.getFilter(eventData.block, eventData.name).subscribe({
      next: (response: any) => {
        console.log(response.sets);
        this.sets = response.sets as Set[];
        this.visibleCards = false;
      },
      error: (error) =>
        console.log('The requested resource was not found.', error),
    });
  }

  showBooster() {
    this.visibleLoading = true;
    this.visibleDec = false;
  }
}
