import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-item-chip',
  templateUrl: './item-chip.page.html',
  styleUrls: ['./item-chip.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ItemChipPage implements OnInit {
  @Input() info: any;
  @Output()  itemClicked = new EventEmitter<any>();
  data: any

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = this.info;
    }, 2000); // during this delay, the skeleton will show
  }
  gotoDetails(data: any) {
    this.itemClicked.emit(data)
  }

}
