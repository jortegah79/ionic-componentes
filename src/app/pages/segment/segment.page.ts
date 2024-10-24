import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonList, IonItem, IonButtons, IonBackButton, IonSkeletonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { barbell, basket, call, globe, heart, home, person, pin, star, trash } from 'ionicons/icons';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { FiltroPipe } from "../../pipes/filtro.pipe";

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonSkeletonText, IonBackButton, IonButtons, IonItem, IonList, IonIcon, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, FiltroPipe]
})
export class SegmentPage implements OnInit {
  private dataService = inject(DataService);
  superHeroes: Observable<any>;

  public column: string = "publisher";
  public value: string = "";

  constructor() {
    addIcons({
      pin, star, call, globe, basket, barbell, trash, person, heart, home

    })
    this.superHeroes = this.dataService.getHeroes();
  }

  ngOnInit() {

  }
  segmentChanged(event: CustomEvent) {

  if(event.detail.value!=="todos"){
      this.value=event.detail.value;
    }else{
      this.value="";
    }

  }

}
