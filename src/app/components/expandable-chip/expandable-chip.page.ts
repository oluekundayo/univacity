import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-expandable-chip',
  templateUrl: './expandable-chip.page.html',
  styleUrls: ['./expandable-chip.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ExpandableChipPage implements OnInit {
  @Input() expandName: any

  expandedSections: { [key: string]: boolean } = {};
  constructor() {}

  ngOnInit() {}
  toggleDescription(key: string): void {
    this.expandedSections[key] = !this.expandedSections[key];
  }

  isExpanded(key: string): boolean {
    return !!this.expandedSections[key];
  }
}
