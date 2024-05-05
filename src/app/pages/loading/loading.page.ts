import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLoading } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-loading',
    templateUrl: './loading.page.html',
    styleUrls: ['./loading.page.scss'],
    standalone: true,
    imports: [IonLoading, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class LoadingPage  {

  private loadingCtrl=inject(LoadingController);

  loading :HTMLIonLoadingElement| null =null;

    mostrarLoading() {

      this.presentLoading('Esto es una carga diferida');
      setTimeout(()=>{
        this.loading?.dismiss();
      },2000);

    }
async presentLoading(message:string){
  this.loading = await this.loadingCtrl.create({
    message,
    duration: 3000,
  });

  this.loading.present();
}


}
