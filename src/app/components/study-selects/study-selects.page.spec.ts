import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudySelectsPage } from './study-selects.page';

describe('StudySelectsPage', () => {
  let component: StudySelectsPage;
  let fixture: ComponentFixture<StudySelectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySelectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
