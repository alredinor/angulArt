import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceJavaComponent } from './add-service-java.component';

describe('AddServiceJavaComponent', () => {
  let component: AddServiceJavaComponent;
  let fixture: ComponentFixture<AddServiceJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
