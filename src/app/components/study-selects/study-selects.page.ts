import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonBadge } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-study-selects',
  templateUrl: './study-selects.page.html',
  styleUrls: ['./study-selects.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class StudySelectsPage implements OnInit {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = '';
  @Input() activeFilters: number = 0;
  @Input() addBackBtn: boolean = true;

  @Output() categoryChanged = new EventEmitter<string>();
  @Output() sortClicked = new EventEmitter<void>();
  @Output() filterClicked = new EventEmitter<void>();
  @Output() backClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onCategoryChange(value: string) {
    this.categoryChanged.emit(value);
  }

  onSort() {
    this.sortClicked.emit();
  }

  onFilter() {
    this.filterClicked.emit();
  }
}
