import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonButton, IonCheckbox, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class CheckboxPage implements OnInit {
[x: string]: any;

  data = [
    {
      name: 'primary',
      selected: 'false'
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: 'false'
    },
    {
      name: 'success',
      selected: true
    }];

    constructor() { }

  ngOnInit() {
  }

  onClick(item:IonCheckbox){
    console.log(item.checked,item.name)

  }
  verData(){
console.log(this.data)
  }
}
