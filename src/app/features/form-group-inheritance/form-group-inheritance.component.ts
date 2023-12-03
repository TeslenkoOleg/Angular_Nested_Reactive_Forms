import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {
  ChildFormGroupInheritanceComponent
} from "./child-form-group-inheritance/child-form-group-inheritance.component";

interface IUserForm {
  name: FormControl<string | null> ;
  age: FormControl<number | null>;
  address: FormGroup<IAddress>;
}
interface IAddress {
  country: FormControl<string | null>;
  city: FormControl<string | null>;
  contacts: FormGroup<IContacts>;
}
interface IContacts {
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
}
@Component({
  selector: 'app-form-group-inheritance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChildFormGroupInheritanceComponent],
  templateUrl: './form-group-inheritance.component.html',
  styleUrls: ['./form-group-inheritance.component.scss']
})
export class FormGroupInheritanceComponent {
  public form: FormGroup<IUserForm>;

  constructor() {
    this.form = new FormGroup<IUserForm>({
      name: new FormControl('Max'),
      age: new FormControl(20),

      address: new FormGroup<IAddress>({
        country: new FormControl('Poland'),
        city: new FormControl('Wroclaw'),

        contacts: new FormGroup<IContacts>({
          phone: new FormControl('123456789'),
          email: new FormControl('test@test.com'),
        }),

      })
    });
  }
}
