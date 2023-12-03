import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFormGroupInheritanceComponent } from './child-form-group-inheritance.component';

describe('ChildFormGroupInheritanceComponent', () => {
  let component: ChildFormGroupInheritanceComponent;
  let fixture: ComponentFixture<ChildFormGroupInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChildFormGroupInheritanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildFormGroupInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
