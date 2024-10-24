import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonList, IonLabel, IonItem, IonRange, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { snowOutline, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRange, IonItem, IonLabel, IonList, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ProgressPage {

  constructor() {
    addIcons({
      snowOutline, sunnyOutline
    })
  }
  public porcentaje: number = 0.05;
  public min: number = 2;
  public max: number = 80

  rangeChange(e: CustomEvent) {
    this.porcentaje = e.detail.value / 100;
  }
  dual(e: CustomEvent) {
    const { lower, upper } = e.detail.value;
    this.min = lower;
    this.max = upper;
  }
  pinFormatter(value: number) {
    return `${value}%`;
  }
}
