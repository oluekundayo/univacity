import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagChipPage } from './tag-chip.page';

describe('TagChipPage', () => {
  let component: TagChipPage;
  let fixture: ComponentFixture<TagChipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TagChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
