import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculetteComponent } from './calculette.component';

describe('CalculetteComponent', () => {
  let component: CalculetteComponent;
  let fixture: ComponentFixture<CalculetteComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should calculate the sum correctly', () => {
    component.operande1.setValue(9);
    component.operande2.setValue(3);
    component.operateur.setValue('/');
    component.calcul();
    expect(component.resultat).toBe(3);
  });
  it('should handle invalid input', () => {
    component.operande1.setValue('string');
    component.operande2.setValue('string');
    component.operateur.setValue('+');
    component.calcul();
    expect(component.errorMessage).toBe('Ce nest pas un chiffre');
    expect(component.resultat).toBe();
  });




});
