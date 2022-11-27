import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaMarinaFormComponent } from './logistica-marina-form.component';

describe('LogisticaMarinaFormComponent', () => {
  let component: LogisticaMarinaFormComponent;
  let fixture: ComponentFixture<LogisticaMarinaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaMarinaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaMarinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
