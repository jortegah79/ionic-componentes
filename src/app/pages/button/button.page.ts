import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { add, heart, heartOutline, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
    selector: 'app-button',
    templateUrl: './button.page.html',
    styleUrls: ['./button.page.scss'],
    standalone: true,
    imports: [IonBackButton, IonButtons, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ButtonPage implements OnInit {

  favorito:boolean=false;
  constructor() {
    addIcons({
      logoApple,settingsSharp,heart,star,heartOutline

    })
  }

  ngOnInit() {
  }
onClick(){
 this.favorito=!this.favorito;
}
}
