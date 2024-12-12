import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  names: string[];  
  constructor() { 
     this.names = ['Escavatore', 'Pala meccanica', 'Ruspa', 'Bulldozer', 'Gru cingolata', 'Carroponte', 'Autocarro', 'Compressore', 'Betoniera', 'Mini escavatore']; 
  }
}
