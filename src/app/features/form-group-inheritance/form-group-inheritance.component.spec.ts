import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupInheritanceComponent } from './form-group-inheritance.component';

describe('FormGroupInheritanceComponent', () => {
  let component: FormGroupInheritanceComponent;
  let fixture: ComponentFixture<FormGroupInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormGroupInheritanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
