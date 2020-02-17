import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceJavaComponent } from './edit-service-java.component';

describe('EditServiceJavaComponent', () => {
  let component: EditServiceJavaComponent;
  let fixture: ComponentFixture<EditServiceJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
