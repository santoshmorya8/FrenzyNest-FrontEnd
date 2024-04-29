import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMainComponent } from './log-main.component';

describe('LogMainComponent', () => {
  let component: LogMainComponent;
  let fixture: ComponentFixture<LogMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
