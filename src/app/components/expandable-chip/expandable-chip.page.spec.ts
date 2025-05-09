import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandableChipPage } from './expandable-chip.page';

describe('ExpandableChipPage', () => {
  let component: ExpandableChipPage;
  let fixture: ComponentFixture<ExpandableChipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
