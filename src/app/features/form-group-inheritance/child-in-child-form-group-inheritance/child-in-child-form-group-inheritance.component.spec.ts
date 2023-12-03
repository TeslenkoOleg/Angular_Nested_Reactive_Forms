import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInChildFormGroupInheritanceComponent } from './child-in-child-form-group-inheritance.component';

describe('ChildInChildFormGroupInheritanceComponent', () => {
  let component: ChildInChildFormGroupInheritanceComponent;
  let fixture: ComponentFixture<ChildInChildFormGroupInheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChildInChildFormGroupInheritanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildInChildFormGroupInheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
