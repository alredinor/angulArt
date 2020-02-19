import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurAuthentificationComponent } from './erreur-authentification.component';

describe('ErreurAuthentificationComponent', () => {
  let component: ErreurAuthentificationComponent;
  let fixture: ComponentFixture<ErreurAuthentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurAuthentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
