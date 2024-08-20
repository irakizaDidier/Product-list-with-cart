import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-substract-button',
  templateUrl: './add-substract-button.component.html',
  styleUrls: ['./add-substract-button.component.css'],
})
export class AddSubtractButtonComponent {
  @Input() quantity!: number;

  @Output() add = new EventEmitter<void>();
  @Output() subtract = new EventEmitter<void>();

  onAdd(): void {
    this.add.emit();
  }

  onSubtract(): void {
    this.subtract.emit();
  }
}
