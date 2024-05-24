import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from "@angular/forms"

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {


    blocks = [
        {name: 'Amonkhet', abbrev: 'AMO'},
        {name: 'Ixalan', abbrev: 'IXA'},
        {name: 'Zendikar', abbrev: 'ZEN'},
        {name: 'Ravnica', abbrev: 'RAV'},
        {name: 'Onslaught', abbrev: 'ONS'},
      ];

    
    onSearch(event: any){
        const name = event.target.value;
        console.log(name);
    }

    onSelect(event: any){
      
        const block = event.target.value
        console.log(block);
    }

}
