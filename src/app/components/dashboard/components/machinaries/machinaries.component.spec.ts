import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinariesComponent } from './machinaries.component';

describe('MachinariesComponent', () => {
  let component: MachinariesComponent;
  let fixture: ComponentFixture<MachinariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachinariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachinariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
