import { Component, inject } from '@angular/core';
import { IonMenuButton,IonMenuToggle, IonMenu, IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonLabel, IonList, IonItem, IonToggle, IonSplitPane } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { albumsOutline, alertCircleOutline, americanFootball, arrowDownCircleOutline, beakerOutline, calendarOutline, carOutline, cardOutline, checkmarkCircleOutline, codeWorkingOutline, cogOutline, copyOutline, gridOutline, hammerOutline, infiniteOutline, listOutline, menuOutline, phonePortraitOutline, pricetagOutline, radioButtonOffOutline, refreshCircleOutline, reorderThreeOutline, searchOutline, tabletPortraitOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/Componente';
import { DataService } from './services/data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonSplitPane, IonToggle,IonMenuToggle, CommonModule,IonItem, IonList, IonLabel, IonIcon, IonButton, IonMenuButton, IonMenu, IonButtons, IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet, RouterLink],
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
      tabletPortraitOutline,codeWorkingOutline,arrowDownCircleOutline,searchOutline,copyOutline
      ,cogOutline,albumsOutline,pricetagOutline
    })
    this.componentes = this.dataService.getMenuOpts();
  }


}
