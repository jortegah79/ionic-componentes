import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonListHeader, IonButton, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.page.html',
    styleUrls: ['./date-time.page.scss'],
    standalone: true,
    imports: [IonModal, IonDatetimeButton, IonDatetime, IonButton, IonListHeader, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class DateTimePage implements OnInit {

  public fechaNaci:Date=new Date();
  constructor() { }

  ngOnInit() {
  }
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };
}
