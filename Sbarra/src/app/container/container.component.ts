import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  names: string[];  
  constructor() { 
     this.names = ['Escavatore', 'Pala meccanica', 'Ruspa', 'Bulldozer', 'Gru cingolata', 'Carroponte', 'Autocarro', 'Compressore', 'Betoniera', 'Mini escavatore']; 
  }
}
