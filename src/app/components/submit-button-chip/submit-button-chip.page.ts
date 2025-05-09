import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-submit-button-chip',
  templateUrl: './submit-button-chip.page.html',
  styleUrls: ['./submit-button-chip.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SubmitButtonChipPage implements OnInit {
  @Input() leftButton: any
  @Input() rightButton: any
  @Output()  leftButtonClicked = new EventEmitter<any>();
  @Output()  rightButtonClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.leftButtonClicked.emit()
  }
  procced() {
    this.rightButtonClicked.emit()
  }

}
