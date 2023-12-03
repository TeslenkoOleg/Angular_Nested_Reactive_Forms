import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule} from "@angular/forms";
import {
  ChildInChildFormGroupInheritanceComponent
} from "../child-in-child-form-group-inheritance/child-in-child-form-group-inheritance.component";

@Component({
  selector: 'app-child-form-group-inheritance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChildInChildFormGroupInheritanceComponent],
  templateUrl: './child-form-group-inheritance.component.html',
  styleUrls: ['./child-form-group-inheritance.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ChildFormGroupInheritanceComponent {

}
