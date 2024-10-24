import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonLabel, IonText, IonButton, IonListHeader } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonButton, IonText, IonLabel, IonInput, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class InputPage {

  nombre: string = "";
  usuario = {
    email: "",
    password: ""
  }
  constructor() { }

onSubmit(formulario:NgForm){
  console.log('entra aqui')
  console.log(this.usuario)
  console.log(formulario);

}
}
