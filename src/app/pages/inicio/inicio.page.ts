import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import {  RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { alertCircleOutline, americanFootball } from 'ionicons/icons';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];
  constructor() {
    addIcons({
      americanFootball,
      alertCircleOutline


    })
  }

  ngOnInit() {
  }

}
