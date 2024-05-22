import { Component, OnInit, inject} from '@angular/core';
import { NavbarComponent } from '../../_components/navbar/navbar.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { ButtonComponent } from '../../_components/button/button.component';
import { CardsComponent } from '../../_components/cards/cards.component';
import { DecComponent } from '../../_components/dec/dec.component';
import { PaginationComponent } from '../../_components/pagination/pagination.component';

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

}

