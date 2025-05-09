import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tag-chip',
  templateUrl: './tag-chip.page.html',
  styleUrls: ['./tag-chip.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TagChipPage implements OnInit {
  @Input() label!: string;
  @Output() removed = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onRemove() {
    this.removed.emit();
  }
}
