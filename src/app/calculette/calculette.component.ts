import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculette.component.html',
  styleUrl: './calculette.component.css'
})
export class CalculetteComponent {
  public errorMessage: string | null = null;
  public calculatrice: FormGroup;
  public resultat: number | null = null;


  public operande1: FormControl
  = new FormControl('');
  public operateur: FormControl
  = new FormControl('');
  public operande2: FormControl
  = new FormControl('');

  constructor() {
    this.calculatrice = new FormGroup({
      operande1: this.operande1,
      operateur: this.operateur,
      operande2: this.operande2,
    });
  }

  calcul() {
    const op1 = parseFloat(this.operande1.value);
    const op2 = parseFloat(this.operande2.value);
    const operator = this.operateur.value;

    this.errorMessage = null; // Réinitialiser le message d'erreur

    if (isNaN(op1) || (isNaN(op2)))
    {
      this.errorMessage = 'Veuillez entrer des nombres valides.';
      this.resultat = null; // Affecter la valeur null au résultat
      return;
    }

    switch (operator) {
      case '+':
        this.resultat = op1 + op2;
        break;
      case '-':
        this.resultat = op1 - op2;
        break;
      case '*':
        this.resultat = op1 * op2;
        break;
      case '/':
        this.resultat = op1 / op2;
        break;
      default:
        this.resultat = null;
    }
  }


}
