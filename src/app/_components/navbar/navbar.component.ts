import { Component, Output, output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  blocks = [
    { name: 'Amonkhet', abbrev: 'AMO' },
    { name: 'Ixalan', abbrev: 'IXA' },
    { name: 'Zendikar', abbrev: 'ZEN' },
    { name: 'Ravnica', abbrev: 'RAV' },
    { name: 'Onslaught', abbrev: 'ONS' },
  ];

  @Output() dataSerchEvent = new EventEmitter<{
    name: string;
    block: string;
  }>();

  name = '';
  block = '';
  testInput: string = '';

  onValueChange(event: any) {
    const name = event.target.value;
    this.name = name;
  }

  onSearch() {
    this.dataSerchEvent.emit({ name: this.name, block: this.block });
  }

  onSelect(event: any) {
    const block = event.target.value;
    this.block = block;
  }

  allCards(){
    window.location.reload()
  }
}
