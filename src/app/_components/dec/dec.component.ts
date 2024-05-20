import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
    selector: 'app-dec',
    standalone: true,
    templateUrl: './dec.component.html',
    styleUrl: './dec.component.css',
    imports: [CardsComponent]
})
export class DecComponent {
cards: any;
}
