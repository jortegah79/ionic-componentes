import { Component, inject } from '@angular/core';
import { IonMenuButton,IonMenuToggle, IonMenu, IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonLabel, IonList, IonItem, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alertCircleOutline, americanFootball, beakerOutline, calendarOutline, carOutline, cardOutline, checkmarkCircleOutline, codeWorkingOutline, gridOutline, hammerOutline, infiniteOutline, listOutline, menuOutline, phonePortraitOutline, radioButtonOffOutline, refreshCircleOutline, reorderThreeOutline, tabletPortraitOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/Componente';
import { DataService } from './services/data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonToggle,IonMenuToggle, CommonModule,IonItem, IonList, IonLabel, IonIcon, IonButton, IonMenuButton, IonMenu, IonButtons, IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet, RouterLink],
})
export class AppComponent {
  private dataService = inject(DataService);

  componentes: Observable<Componente[]>;
  constructor() {
    addIcons({
      refreshCircleOutline, reorderThreeOutline,
      listOutline, hammerOutline, infiniteOutline,
      gridOutline, carOutline, calendarOutline,
      checkmarkCircleOutline, americanFootball,
      alertCircleOutline, beakerOutline,
      radioButtonOffOutline, cardOutline,menuOutline,phonePortraitOutline,
      tabletPortraitOutline,codeWorkingOutline
    })
    this.componentes = this.dataService.getMenuOpts();
  }


}
