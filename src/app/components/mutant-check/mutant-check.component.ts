import { Component } from '@angular/core';
import { isMutant } from '../../utils/mutant.util';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

    if (adn.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'ADN vacío',
        text: 'Por favor ingrese al menos una línea de ADN.',
        confirmButtonColor: '#6366f1' // Indigo-500
      });
      return;
    }

    const is = isMutant(adn);
    this.result = is ? 'Es mutante' : 'No es mutante';

    Swal.fire({
      title: is ? '🧬 Mutante detectado' : '🧬 ADN humano',
      text: is ? 'Este ADN pertenece a un mutante.' : 'Este ADN NO corresponde a un mutante.',
      icon: is ? 'success' : 'error',
      confirmButtonColor: is ? '#16a34a' : '#dc2626'
    });
  }
}
