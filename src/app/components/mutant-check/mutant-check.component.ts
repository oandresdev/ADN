import { Component } from '@angular/core';
import { isMutant } from '../../utils/mutant.util';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mutant-check',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgClass],
  templateUrl: './mutant-check.component.html',
  styleUrl: './mutant-check.component.scss'
})
export class MutantCheckComponent {

  adnInput = '';
  result: string | null = null;

  validateADN() {
    const adn = this.adnInput
      .split('\n')
      .map(l => l.trim().toUpperCase())
      .filter(l => l.length > 0);

    const is = isMutant(adn);
    this.result = is ? 'Es mutante' : 'No es mutante';
  }
}
