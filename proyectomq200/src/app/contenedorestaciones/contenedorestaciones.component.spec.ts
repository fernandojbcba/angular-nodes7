import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorestacionesComponent } from './contenedorestaciones.component';

describe('ContenedorestacionesComponent', () => {
  let component: ContenedorestacionesComponent;
  let fixture: ComponentFixture<ContenedorestacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorestacionesComponent]
    });
    fixture = TestBed.createComponent(ContenedorestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
