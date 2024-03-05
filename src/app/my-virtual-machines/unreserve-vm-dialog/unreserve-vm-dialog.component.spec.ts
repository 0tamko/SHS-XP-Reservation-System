import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreserveVmDialogComponent } from './unreserve-vm-dialog.component';

describe('UnreserveVmDialogComponent', () => {
  let component: UnreserveVmDialogComponent;
  let fixture: ComponentFixture<UnreserveVmDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnreserveVmDialogComponent]
    });
    fixture = TestBed.createComponent(UnreserveVmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
