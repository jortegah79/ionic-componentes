import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonList, IonFab, IonLabel, IonItem, IonIcon, IonFabButton, IonFabList, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { add, colorPalette, document, globe, logoAngular, logoApple, logoFacebook, logoGithub, logoIonic, logoLaravel, logoTwitter, logoYoutube } from 'ionicons/icons';

@Component({
    selector: 'app-fab',
    templateUrl: './fab.page.html',
    styleUrls: ['./fab.page.scss'],
    standalone: true,
    imports: [IonCol, IonFabList, IonFabButton, IonIcon, IonItem, IonLabel, IonFab, IonList, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class FabPage implements OnInit {

  data=Array(50)
  constructor() {

    addIcons({
      add,document,colorPalette,globe,logoYoutube,logoFacebook,logoTwitter,logoLaravel,logoGithub,logoApple
    })
  }

  ngOnInit() {
  }

}
