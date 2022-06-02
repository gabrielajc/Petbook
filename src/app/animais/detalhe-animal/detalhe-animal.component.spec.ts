import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAnimalComponent } from './detalhe-animal.component';

describe('DetalheAnimalComponent', () => {
  let component: DetalheAnimalComponent;
  let fixture: ComponentFixture<DetalheAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
