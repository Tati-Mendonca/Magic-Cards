import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dec',
  standalone: true,
  templateUrl: './dec.component.html',
  styleUrl: './dec.component.css',
  imports: [],
})
export class DecComponent {
  @Input() sets: any = [];
}
