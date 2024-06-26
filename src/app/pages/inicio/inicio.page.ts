import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonList, IonItem, IonIcon,
  IonButtons, IonBackButton, MenuController,IonMenuToggle
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { alertCircleOutline, americanFootball, arrowDownCircleOutline, beakerOutline, calendarOutline, carOutline, cardOutline, checkmarkCircleOutline, codeWorkingOutline, gridOutline, hammerOutline, infiniteOutline, list, listOutline, phonePortraitOutline, radioButtonOffOutline, refreshCircleOutline, reorderThreeOutline, tabletPortraitOutline } from 'ionicons/icons';
import { HeaderComponent } from "../../components/header/header.component";
import { Componente } from 'src/app/interfaces/Componente';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonIcon, IonItem, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, HeaderComponent]
})
export class InicioPage {

  private menuCtrl = inject(MenuController);
  private dataService=inject(DataService);

  componentes: Observable<Componente[]>;
  constructor() {
    addIcons({ arrowDownCircleOutline,codeWorkingOutline,tabletPortraitOutline,phonePortraitOutline,refreshCircleOutline, reorderThreeOutline, listOutline, hammerOutline, infiniteOutline, gridOutline, carOutline, calendarOutline, checkmarkCircleOutline, americanFootball, alertCircleOutline, beakerOutline, radioButtonOffOutline, cardOutline });
    this.componentes=this.dataService.getMenuOpts();
  }

  openMenu() {
    this.menuCtrl.open('cosito')
  }

}
