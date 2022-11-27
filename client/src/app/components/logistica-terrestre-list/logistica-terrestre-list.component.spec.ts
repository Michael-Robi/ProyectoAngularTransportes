import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaTerrestreListComponent } from './logistica-terrestre-list.component';

describe('LogisticaTerrestreListComponent', () => {
  let component: LogisticaTerrestreListComponent;
  let fixture: ComponentFixture<LogisticaTerrestreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaTerrestreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaTerrestreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
