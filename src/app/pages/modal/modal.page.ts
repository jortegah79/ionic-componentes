import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController,IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonModal, IonButtons, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
    standalone: true,
    imports: [IonItem, IonButtons, IonModal, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ModalPage {

  private modalCtrl=inject(ModalController);

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
   console.log(data)
  }
}
