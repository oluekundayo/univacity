import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-feed-chip',
  templateUrl: './feed-chip.page.html',
  styleUrls: ['./feed-chip.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule]
})
export class FeedChipPage implements OnInit {
  @Input() feed: any;

  constructor() { }

  ngOnInit() {
  }

}
