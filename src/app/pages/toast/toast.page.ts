import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ToastController } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ToastPage implements OnInit {
  private toastCtrl = inject(ToastController);

  public toast!: HTMLIonToastElement;
  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  async onClick(message:string,color:'danger'|'success') {

    this.toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom",
      color:color
    })
    this.toast.present();
  }
  async onClick2(message:string,color:'danger'|'success') {

    this.toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "bottom",
      color:color,
      buttons:this.toastButtons
    })
    this.toast.present();
  }
}
