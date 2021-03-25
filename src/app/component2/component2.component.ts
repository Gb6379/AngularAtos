import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models/Photo.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  photos:Photo;
  erro:any;
  @Input() idAlbum:number;

  constructor(private photoService: ServiceService) {
    this.getter();
  }

  getter() {
    this.photoService.getPhotos().subscribe(
      (data:Photo) => {
        this.photos = data;

        console.log("waht's in data", data);
        console.log("this.photos", this.photos);
      },
      (error:any) => {
        this.erro = error;
        console.log("Error", this.erro);
      }
    )
  }

  ngOnInit(): void {
  }

}
