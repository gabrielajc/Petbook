import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAnimalComponent } from './novo-animal.component';

describe('NovoAnimalComponent', () => {
  let component: NovoAnimalComponent;
  let fixture: ComponentFixture<NovoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
