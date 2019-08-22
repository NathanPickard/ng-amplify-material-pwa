import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOSInstallComponent } from './i-osinstall.component';

describe('IOSInstallComponent', () => {
  let component: IOSInstallComponent;
  let fixture: ComponentFixture<IOSInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOSInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOSInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
