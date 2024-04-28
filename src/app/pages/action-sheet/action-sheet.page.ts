import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-action-sheet',
    templateUrl: './action-sheet.page.html',
    styleUrls: ['./action-sheet.page.scss'],
    standalone: true,
    imports: [IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
