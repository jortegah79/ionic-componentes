import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, AlertController, IonAlert } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonAlert, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AlertPage implements OnInit {

  alertCtrl = inject(AlertController);
  constructor() { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async presentAlertWithButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Second Alert',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass:'rojo'
      },
      {
        text: 'Ok',
        handler: () => {
          console.log('Pulsaste OK!!!')
        }

      }],
    });

    await alert.present();
  }
  public alertButtons = [{
    text: 'Cancel',
    role: 'cancel',
    cssClass:'rojo'
  },
  {
    text: 'Ok',
    handler: (data:any) => {
      console.log(data)
    }

  }];
  public alertInputs = [
    {
      placeholder: 'Name',
      name:'nombre',
      type:'text'
    },
    {
      placeholder:'password',
      name:'password',
      type:'password'
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      type:'text',
      name:'nick',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      name:'age',
      min: 1,
      max: 100,
    },
    {
      type: 'date',
      placeholder: 'Birthday',
      name:'birthday',
      min: '1966-01-01',
      max: '2025-12-31',
    },
    {
      type: 'textarea',
      name:'description',
      placeholder: 'A little about yourself',
    },
  ];
}
