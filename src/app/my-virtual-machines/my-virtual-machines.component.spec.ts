import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVirtualMachinesComponent } from './my-virtual-machines.component';

describe('MyVirtualMachinesComponent', () => {
  let component: MyVirtualMachinesComponent;
  let fixture: ComponentFixture<MyVirtualMachinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyVirtualMachinesComponent]
    });
    fixture = TestBed.createComponent(MyVirtualMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
