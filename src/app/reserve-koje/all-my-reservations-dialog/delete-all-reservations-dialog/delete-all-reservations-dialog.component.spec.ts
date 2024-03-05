import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllReservationsDialogComponent } from './delete-all-reservations-dialog.component';

describe('DeleteAllReservationsDialogComponent', () => {
  let component: DeleteAllReservationsDialogComponent;
  let fixture: ComponentFixture<DeleteAllReservationsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAllReservationsDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteAllReservationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
