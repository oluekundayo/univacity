import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitButtonChipPage } from './submit-button-chip.page';

describe('SubmitButtonChipPage', () => {
  let component: SubmitButtonChipPage;
  let fixture: ComponentFixture<SubmitButtonChipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitButtonChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
