import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { addIcons } from 'ionicons';
import { heartOutline, shareOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemSliding, IonItemOption, IonItemOptions, IonItem, IonList, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionlist!:IonList;
  private dataService = inject(DataService);
  usuarios: Observable<any>;
  constructor() {
    addIcons({
      heartOutline, shareOutline,trashOutline
    })
    this.usuarios = this.dataService.getUsuarios();
  }

  ngOnInit(): void {

  }
  favorite(user: any) {
    this.ionlist.closeSlidingItems();
    console.log('favorite',{ user })
  }
  share(user: any) {
    this.ionlist.closeSlidingItems();
    console.log('share',{ user })
  }
delete(user:any){
  this.ionlist.closeSlidingItems();
  console.log('Ha sido borrado el usuario '+user)
}
}
