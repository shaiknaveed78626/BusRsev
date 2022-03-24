import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPITransactionComponent } from './upitransaction.component';

describe('UPITransactionComponent', () => {
  let component: UPITransactionComponent;
  let fixture: ComponentFixture<UPITransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPITransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPITransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
