import { Component, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { InstitutesPage } from '../institutes/institutes.page';
import { SubmitButtonChipPage } from '../../components/submit-button-chip/submit-button-chip.page';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InstitutesPage,
    SubmitButtonChipPage,
  ],
})
export class FilterPage implements OnInit {
  isModalOpen = false;
  retrunData = output<any>();
  proccedData = output<any>();
  tuitionRange = {
    lower: 50000,
    upper: 120000,
  };

  min = 0;
  max = 200000;

  leftButton = {
    name: 'Clear all',
    position: '',
    icon: '',
  };
  rightButton = {
    name: `View ${1024} Results`,
    position: 'right',
    icon: 'assets/arrow-right-normal.svg',
  };

  selectedInstitutes: string[] = [];

  constructor() {}

  ngOnInit() {}

  selectInstitutes(isOpen: boolean) {
    // Navigate or open modal for selection
    this.isModalOpen = isOpen;
  }

  getPercentage(val: number): number {
    return ((val - this.min) / (this.max - this.min)) * 100;
  }

  formatK(value: number): string {
    return `${value / 1000}k`;
  }
  formatNumber(val: number): string {
    return val.toLocaleString(); // Adds commas for thousands
  }
  returnData() {
    this.selectInstitutes(false);
    console.log('back :>> ');
  }
  proceedData() {
    this.selectInstitutes(false);
    console.log('proceed :>> ');
  }
  return() {
    this.retrunData.emit('');
    console.log('back :>> ');
  }
  proceed() {
    this.proccedData.emit('');
    console.log('proceed :>> ');
  }
}
