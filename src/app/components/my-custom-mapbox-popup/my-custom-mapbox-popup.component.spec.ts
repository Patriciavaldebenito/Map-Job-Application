import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomMapboxPopupComponent } from './my-custom-mapbox-popup.component';

describe('MyCustomMapboxPopupComponent', () => {
  let component: MyCustomMapboxPopupComponent;
  let fixture: ComponentFixture<MyCustomMapboxPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomMapboxPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomMapboxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
