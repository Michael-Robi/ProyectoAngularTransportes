import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaTerrestreFormComponent } from './logistica-terrestre-form.component';

describe('LogisticaTerrestreFormComponent', () => {
  let component: LogisticaTerrestreFormComponent;
  let fixture: ComponentFixture<LogisticaTerrestreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaTerrestreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaTerrestreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
