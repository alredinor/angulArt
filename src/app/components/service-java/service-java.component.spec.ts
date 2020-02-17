import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceJavaComponent } from './service-java.component';

describe('ServiceJavaComponent', () => {
  let component: ServiceJavaComponent;
  let fixture: ComponentFixture<ServiceJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
