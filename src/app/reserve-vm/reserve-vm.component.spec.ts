import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveVmComponent } from './reserve-vm.component';

describe('ReserveVmComponent', () => {
  let component: ReserveVmComponent;
  let fixture: ComponentFixture<ReserveVmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveVmComponent]
    });
    fixture = TestBed.createComponent(ReserveVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
