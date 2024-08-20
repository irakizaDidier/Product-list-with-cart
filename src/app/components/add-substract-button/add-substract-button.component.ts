import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-add-substract-button',
  templateUrl: './add-substract-button.component.html',
  styleUrl: './add-substract-button.component.scss',
})
export class AddSubstractButtonComponent {
  quantity = input.required<number>();

  add = output();
  substract = output();

  onAdd(): void {
    this.add.emit();
  }

  onSubstract(): void {
    this.substract.emit();
  }
}
