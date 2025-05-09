import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstitutesPage } from './institutes.page';

describe('InstitutesPage', () => {
  let component: InstitutesPage;
  let fixture: ComponentFixture<InstitutesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
