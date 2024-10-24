import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ModalInfoPage {
  private modalCtrl = inject(ModalController);
  @Input()nombre:string="";
  @Input()pais:string="";

  constructor(){
    addIcons({ closeOutline  })
  }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre:'Fernando',
      pais:'España'
    });
  }
}
