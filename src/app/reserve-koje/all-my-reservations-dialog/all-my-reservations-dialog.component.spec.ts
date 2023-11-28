import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyReservationsDialogComponent } from './all-my-reservations-dialog.component';

describe('AllMyReservationsDialogComponent', () => {
  let component: AllMyReservationsDialogComponent;
  let fixture: ComponentFixture<AllMyReservationsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMyReservationsDialogComponent]
    });
    fixture = TestBed.createComponent(AllMyReservationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
