import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyVmReservationsDialogComponent } from './all-my-vm-reservations-dialog.component';

describe('AllMyVmReservationsDialogComponent', () => {
  let component: AllMyVmReservationsDialogComponent;
  let fixture: ComponentFixture<AllMyVmReservationsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMyVmReservationsDialogComponent]
    });
    fixture = TestBed.createComponent(AllMyVmReservationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
