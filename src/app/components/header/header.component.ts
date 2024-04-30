import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonToolbar, IonBackButton, IonTitle, IonAvatar, IonButton, IonIcon } from '@ionic/angular/standalone'

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [IonIcon, IonButton, IonAvatar, IonTitle, IonBackButton, IonToolbar, IonButtons, IonHeader],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
@Input()title:string="";
}
