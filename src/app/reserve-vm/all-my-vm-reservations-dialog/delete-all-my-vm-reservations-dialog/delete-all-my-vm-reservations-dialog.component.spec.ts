import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllMyVmReservationsDialogComponent } from './delete-all-my-vm-reservations-dialog.component';

describe('DeleteAllMyVmReservationsDialogComponent', () => {
  let component: DeleteAllMyVmReservationsDialogComponent;
  let fixture: ComponentFixture<DeleteAllMyVmReservationsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAllMyVmReservationsDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteAllMyVmReservationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
