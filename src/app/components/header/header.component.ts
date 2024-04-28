import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonButtons, IonToolbar, IonBackButton, IonTitle } from '@ionic/angular/standalone'

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [IonTitle, IonBackButton, IonToolbar, IonButtons, IonHeader],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
@Input()title:string="";
}
