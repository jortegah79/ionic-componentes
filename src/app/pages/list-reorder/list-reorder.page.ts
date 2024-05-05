import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonLabel, IonItem, IonReorderGroup, IonReorder, ItemReorderEventDetail, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { swapVerticalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonReorder, IonReorderGroup, IonItem, IonLabel, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'MUjer Maravilla', 'Flash'];
  active: boolean = false;
  constructor() {
    addIcons({
      swapVerticalOutline
    })
  }

  ngOnInit() {
  }
  doReorder(event: CustomEvent<ItemReorderEventDetail>) {

    const itemMOver = this.personajes.splice(event.detail.from, 1)[0]
    this.personajes.splice(event.detail.to, 0, itemMOver)
    event.detail.complete();
    console.log(this.personajes)
  }
  toggleVisibility() {
    this.active = !this.active;
  }

}
