import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRefresherContent,
  IonRefresher,
  IonModal,
} from '@ionic/angular/standalone';
import { StudySelectsPage } from 'src/app/components/study-selects/study-selects.page';
import { TagChipPage } from '../../components/tag-chip/tag-chip.page';
import { ItemChipPage } from '../../components/item-chip/item-chip.page';
import { NavigationExtras, Router } from '@angular/router';
import { FilterPage } from '../filter/filter.page';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StudySelectsPage,
    TagChipPage,
    ItemChipPage,
    FilterPage,
  ],
})
export class HomePage implements OnInit {
  courseCategories = ['Computer Technologies', 'Business', 'Science'];
  selectedCourse = 'Computer Technologies';
  filterCount = 3;
  tags = [
    'Design',
    'Programming',
    'Business',
    'Computer Technologies',
    'Science',
  ];
  schoolDetails: any;
  isModalOpen = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.schoolDetails = [
      {
        imageUrl: 'assets/university-building.png',
        course: 'Computer Technologies and Environmental Engineering',
        school: 'University of Liverpool',
        flag: 'CAD',
        country: 'Canada',
        degree: 'BSC',
        duration: 'Fulltime',
        period: '4 years',
        language: 'English Language',
        currency: 'eruo',
        amount: '€763.36',
      },
      {
        imageUrl: 'assets/university-building.png',
        course: 'Computer Technologies and Environmental Engineering',
        school: 'University of Liverpool',
        flag: 'CAD',
        country: 'Canada',
        degree: 'Masters',
        duration: 'Fulltime',
        priod: '2 years',
        language: 'English Language',
        currency: 'eruo',
        amount: '€363.36',
      },
      {
        imageUrl: 'assets/university-building.png',
        course: 'Computer Technologies and Environmental Engineering',
        school: 'University of Liverpool',
        flag: 'CAD',
        country: 'Canada',
        degree: 'PHD',
        duration: 'Fulltime',
        priod: '1 years',
        language: 'English Language',
        currency: 'eruo',
        amount: '€163.36',
      },
      {
        imageUrl: 'assets/university-building.png',
        course: 'Computer Technologies and Environmental Engineering',
        school: 'University of Liverpool',
        flag: 'CAD',
        country: 'Canada',
        degree: 'Masters',
        duration: 'Fulltime',
        priod: '2 years',
        language: 'English Language',
        currency: 'eruo',
        amount: '€363.36',
      },
      {
        imageUrl: 'assets/university-building.png',
        course: 'Computer Technologies and Environmental Engineering',
        school: 'University of Liverpool',
        flag: 'CAD',
        country: 'Canada',
        degree: 'Masters',
        duration: 'Fulltime',
        priod: '2 years',
        language: 'English Language',
        currency: 'eruo',
        amount: '€363.36',
      },
    ];
  }

  onCategoryChange(newCategory: string) {
    this.selectedCourse = newCategory;
    console.log('Selected:', newCategory);
  }

  handleSort() {
    console.log('Sort clicked');
  }

  handleFilter() {
      this.isModalOpen = true;
    //   const navigationExtras: NavigationExtras = {
    //   state: {
    //     // details: data,
    //   },
    // };
    // this.router.navigate(['filter'], navigationExtras);
    console.log('Filter clicked');
  }
  selectInstitutes(isOpen: boolean) {
    // Navigate or open modal for selection
    this.isModalOpen = isOpen;
  }

  doRefresh(data: any) {
    console.log('Begin async operation');
    setTimeout(() => {
      // Simulate data update
      console.log('Async operation has ended');
      data.target.complete(); // VERY IMPORTANT to stop the spinner
    }, 2000);
  }

  handleBack(data: any) {}

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  gotoDetails(data: any) {
    console.log('data :>> ', data);
    const navigationExtras: NavigationExtras = {
      state: {
        details: data,
      },
    };
    this.router.navigate(['details'], navigationExtras);
  }
  returnData() {
    this.selectInstitutes(false)
      console.log('back :>> ');
    }
    proceedData() {
      this.selectInstitutes(false)
      console.log('proceed :>> ');
    }
}
