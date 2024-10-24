import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InfinitePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  data: any[] = Array(20);
  constructor() { }

  loadData(event: InfiniteScrollCustomEvent) {
    //console.log(event)
    if (this.data.length >= 60) {
      this.infiniteScroll.disabled = true;
    }
    setTimeout(() => {

      const nuevoArray = Array(20);
      this.data.push(...nuevoArray)
      event.target.complete();

    }, 1500);
  }

}
