import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-refresher',
    templateUrl: './refresher.page.html',
    styleUrls: ['./refresher.page.scss'],
    standalone: true,
    imports: [IonRefresherContent, IonRefresher, IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class RefresherPage implements OnInit {

  items:any[]=[]
  constructor() { }

  ngOnInit() {
  }
  doRefresh(event:any){

    setTimeout(()=>{
      this.items=Array(20);
     event.target.complete()
    },1500);
    console.log('Has refrescado');

    console.log(event)
  }

}
