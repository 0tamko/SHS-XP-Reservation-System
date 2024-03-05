import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOffDialogComponent } from './power-off-dialog.component';

describe('PowerOffDialogComponent', () => {
  let component: PowerOffDialogComponent;
  let fixture: ComponentFixture<PowerOffDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerOffDialogComponent]
    });
    fixture = TestBed.createComponent(PowerOffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
