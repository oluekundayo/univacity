import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedChipPage } from './feed-chip.page';

describe('FeedChipPage', () => {
  let component: FeedChipPage;
  let fixture: ComponentFixture<FeedChipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedChipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
