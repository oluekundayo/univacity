import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemChipPage } from './item-chip.page';

describe('ItemChipPage', () => {
  let component: ItemChipPage;
  let fixture: ComponentFixture<ItemChipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
