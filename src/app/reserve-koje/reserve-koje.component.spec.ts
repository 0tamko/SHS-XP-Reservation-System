import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveKojeComponent } from './reserve-koje.component';

describe('ReserveKojeComponent', () => {
  let component: ReserveKojeComponent;
  let fixture: ComponentFixture<ReserveKojeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveKojeComponent]
    });
    fixture = TestBed.createComponent(ReserveKojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
