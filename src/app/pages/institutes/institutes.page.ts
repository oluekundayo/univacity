import { Component, OnInit, output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { SubmitButtonChipPage } from '../../components/submit-button-chip/submit-button-chip.page';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgFor, SubmitButtonChipPage],
})
export class InstitutesPage implements OnInit {
  retrunData = output<any>();
  proccedData = output<any>();
  searchTerm = '';
  selectedInstitute: any = null;

  leftButton = {
    name: 'Clear all',
    position: '',
    icon: '',
  };
  rightButton = {
    name: `Apply Filter`,
    position: '',
    icon: '',
  };
  constructor() {}
  ngOnInit(): void {}

  institutes = [
    {
      name: 'University of Graz',
      countryLogo: 'assets/canada.svg',
      country: 'Canada',
      count: 629,
      logo: 'assets/schoolLogo.svg',
    },
    {
      name: 'University of Manitoba',
      countryLogo: 'assets/canada.svg',
      country: 'Canada',
      count: 629,
      logo: 'assets/schoolLogo.svg',
    },
    {
      name: 'University of Toronto',
      countryLogo: 'assets/canada.svg',
      country: 'Canada',
      count: 850,
      logo: 'assets/schoolLogo.svg',
    },
    {
      name: 'McGill University',
      countryLogo: 'assets/canada.svg',
      country: 'Canada',
      count: 720,
      logo: 'assets/schoolLogo.svg',
    },
    {
      name: 'University of Alberta',
      countryLogo: 'assets/canada.svg',
      country: 'Canada',
      count: 655,
      logo: 'assets/schoolLogo.svg',
    },
    {
      name: 'Western University',
      countryLogo: 'assets/canada.svg',
      country: 'Canada',
      count: 610,
      logo: 'assets/schoolLogo.svg',
    },
  ];

  filteredInstitutes = [...this.institutes];

  filterInstitutes() {
    const term = this.searchTerm.toLowerCase();
    this.filteredInstitutes = this.institutes.filter((i) =>
      i.name.toLowerCase().includes(term)
    );
  }

  clearSelection() {
    this.selectedInstitute = null;
  }

  applyFilter() {
    console.log('Applied filter:', this.selectedInstitute);
    // Add logic for applying filter
  }

  return() {
    this.retrunData.emit('')
    console.log('back :>> ');
  }
  proceed() {
    this.proccedData.emit('')
    console.log('proceed :>> ');
  }
}
