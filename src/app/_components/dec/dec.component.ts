import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-dec',
  standalone: true,
  templateUrl: './dec.component.html',
  styleUrl: './dec.component.css',
  imports: [],
})
export class DecComponent {

  @Input() sets: any = [];
  @Input() loading!: boolean;

  showBooster(): void{
  this.loading = true;
  }
}
