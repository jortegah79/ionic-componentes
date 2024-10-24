import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonCard, IonImg, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.page.html',
    styleUrls: ['./grid.page.scss'],
    standalone: true,
    imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonImg, IonCard, IonRow, IonCol, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
