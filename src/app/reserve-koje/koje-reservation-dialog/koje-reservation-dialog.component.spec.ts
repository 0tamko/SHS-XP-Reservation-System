import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KojeReservationDialogComponent } from './koje-reservation-dialog.component';

describe('KojeReservationDialogComponent', () => {
  let component: KojeReservationDialogComponent;
  let fixture: ComponentFixture<KojeReservationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KojeReservationDialogComponent]
    });
    fixture = TestBed.createComponent(KojeReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
