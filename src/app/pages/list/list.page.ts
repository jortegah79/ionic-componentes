import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ListPage implements OnInit {
  private dataService = inject(DataService);
  usuarios: Observable<any>;
  constructor() {
    this.usuarios = this.dataService.getUsuarios();
  }

  ngOnInit(): void {

  }


}
