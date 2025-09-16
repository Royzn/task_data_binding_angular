import { Component, EventEmitter, Output } from '@angular/core';
import { Creditur } from '../interface/creditur';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(21), Validators.max(55)]),
      occupation: new FormControl('', [Validators.required]),
      dp: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      salary: new FormControl('',[Validators.required]),
    });
  }


  @Output() dataSubmitted = new EventEmitter<Creditur>();

  onSubmit() {
    const payload = {
      name: this.form.get('name')?.value,
      age: this.form.get('age')?.value,
      occupation: this.form.get('occupation')?.value,
      dp: this.form.get('dp')?.value,
      price: this.form.get('price')?.value,
      salary: this.form.get('salary')?.value
    }

    this.dataSubmitted.emit(payload);
  }
}
