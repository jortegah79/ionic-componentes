import { Component, OnInit, inject } from '@angular/core';
import { IonList,IonItem,IonLabel,PopoverController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-popover-info',
  standalone:true,
  imports:[
IonList,IonItem,IonLabel
  ],
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent {
private popoverCtrl=inject(PopoverController);
  items = Array(7);

  onClick(valor:number){
    this.popoverCtrl.dismiss({
      item:valor
    })
  }
}
