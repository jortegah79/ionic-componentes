import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton,ActionSheetController } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { closeOutline, shareSocialOutline, trashOutline } from 'ionicons/icons';

@Component({
    selector: 'app-action-sheet',
    templateUrl: './action-sheet.page.html',
    styleUrls: ['./action-sheet.page.scss'],
    standalone: true,
    imports: [IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ActionSheetPage {

  private actionSheetCtrl=inject(ActionSheetController);

  constructor(){
    addIcons({
      trashOutline,
      closeOutline,
      shareSocialOutline
    })
  }
  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumes',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Delete',
          icon:'trash-outline',
          role: 'destructive',
          cssClass:'rojo',
          data: {
            action: 'delete',
          },
          handler:()=>console.log('Delete item')
        },
        {
          text: 'Share',
          icon:'share-social-outline',
          data: {
            action: 'share',
          },
          handler:()=>console.log('Shared item')
        },
        {
          text: 'Cancel',
          icon:'close-outline',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler:()=>console.log('Cancel item')
        },
      ],
    });

    await actionSheet.present();
  }

}
