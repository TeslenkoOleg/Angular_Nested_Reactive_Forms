import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-child-in-child-form-group-inheritance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child-in-child-form-group-inheritance.component.html',
  styleUrls: ['./child-in-child-form-group-inheritance.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ChildInChildFormGroupInheritanceComponent implements OnInit{
  private formGroupDirective = inject(FormGroupDirective);
  public parentForm!: FormGroup;
  public contactsForm!: FormGroup;

  ngOnInit(): void {
    this.parentForm = this.formGroupDirective.form;
    this.contactsForm = this.parentForm.get('address')?.get('contacts') as FormGroup;
  }
}
