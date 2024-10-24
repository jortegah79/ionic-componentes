import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverController,IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonBackButton, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';
import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
    standalone: true,
    imports: [IonCol, IonRow, IonGrid, IonFooter, IonBackButton, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class PopoverPage  {

  private popoverCtrl=inject(PopoverController);

  constructor(){
    addIcons({
      personOutline
    })
  }
  async presentPopover(e: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: e,
    });

    await popover.present();

    const { data,role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with data: ${data.item}`);
  }
}
