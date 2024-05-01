import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { alertCircleOutline, americanFootball, beakerOutline, calendarOutline, carOutline, cardOutline, checkmarkCircleOutline, gridOutline, hammerOutline, infiniteOutline, list, listOutline, radioButtonOffOutline } from 'ionicons/icons';

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
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite'
    }
    ,
    {
      icon: 'hammer-outline',
      name: 'Inputs',
      redirectTo: '/input'
    } ,
    {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list'
    }
  ];
  constructor() {
    addIcons({ listOutline,hammerOutline,infiniteOutline,gridOutline,carOutline, calendarOutline, checkmarkCircleOutline, americanFootball, alertCircleOutline, beakerOutline, radioButtonOffOutline, cardOutline });
  }

  ngOnInit() {
  }

}
