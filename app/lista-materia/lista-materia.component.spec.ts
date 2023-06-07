import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMateriaComponent } from './lista-materia.component';

describe('ListaMateriaComponent', () => {
  let component: ListaMateriaComponent;
  let fixture: ComponentFixture<ListaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
