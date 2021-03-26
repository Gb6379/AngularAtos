import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id:string;

  constructor(private photoService: ServiceService) {//, private activateRoute: ActivatedRoute) {//activateRoute is used on helping to pass the parameter on the query string
    //this.id = this.activateRoute.snapshot.queryParams["albumId"];
    this.getter();
  }

  getter() {
    this.photoService.getPhotos().subscribe(
      (data:Photo) => {

        this.photos = data;

      },
      (error:any) => {

        this.erro = error;

      }
    )
  }

  ngOnInit(): void {
  }

}
