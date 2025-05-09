import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FeedChipPage } from '../../components/feed-chip/feed-chip.page';
import { ExpandableChipPage } from '../../components/expandable-chip/expandable-chip.page';
import { SubmitButtonChipPage } from '../../components/submit-button-chip/submit-button-chip.page';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FeedChipPage,
    ExpandableChipPage,
    SubmitButtonChipPage,
  ],
})
export class DetailsPage implements OnInit {
  details: any;
  programFeeds: any;
  feesFeeds: any;
  toastService = inject(ToastService);
  leftButton = {
    name: 'Back',
    position: 'left',
    icon: 'assets/chevron-left-normal.svg',
  };
  rightButton = {
    name: 'Apply now',
    position: 'right',
    icon: 'assets/chevron-right-normal.svg',
  };

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state && nav.extras.state['details']) {
      this.details = nav.extras.state['details'];
    }
  }

  ngOnInit() {
    this.programFeeds = [
      { name: 'Housing Fee', details: '$0' },
      { name: 'Acceptance Fee', details: '$0' },
      { name: 'Tuition Fee', details: '$377.06 per semester' },
      { name: 'Application Fee', details: '$51.88' },
      { name: 'Living Fee', details: '$0' },
    ];
    this.feesFeeds = [
      { name: 'Housing Fee', details: '$0' },
      { name: 'Acceptance Fee', details: '$0' },
      { name: 'Tuition Fee', details: '$377.06 per semesterTuition Fee' },
      { name: '$51.88', details: 'Application Fee' },
      { name: 'Living Fee', details: '$0' },
    ];
  }
  goBack() {
    this.router.navigate(['home']);
  }

  return() {
    this.goBack()
    console.log('back :>> ');
  }
  proceed() {
    this.toastService.addToast({
      type: "success",
      message: `
      <h2>Successful</h2>
      <p>Application Done</p>
      `
    });
    this.goBack()
    console.log('proceed :>> ');
  }
}
