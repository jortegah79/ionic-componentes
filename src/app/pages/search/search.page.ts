import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonLabel, IonItem, IonToggle } from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { FiltroPipe } from "../../pipes/filtro.pipe";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonToggle, IonItem, IonLabel, IonList, IonSearchbar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FiltroPipe]
})
export class SearchPage implements OnInit {

  private dataService = inject(DataService);
  albumes: any[] = [];
  textoBuscar: string = "";

  constructor() { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albumes => {
      this.albumes = albumes;
    })
  }
  onSearchChange(event: CustomEvent) {
    this.textoBuscar = event.detail.value;
  }
}
