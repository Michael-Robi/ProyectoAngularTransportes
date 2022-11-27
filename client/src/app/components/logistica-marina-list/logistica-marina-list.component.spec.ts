import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaMarinaListComponent } from './logistica-marina-list.component';

describe('LogisticaMarinaListComponent', () => {
  let component: LogisticaMarinaListComponent;
  let fixture: ComponentFixture<LogisticaMarinaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaMarinaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaMarinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
