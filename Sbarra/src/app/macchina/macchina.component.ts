import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
  @Input() nomemacchina!: string ;
  pezzi: string[];  
  constructor() { 
     this.pezzi = ['Bulloni', 'Viti', 'Ferro']; 
  }
}
