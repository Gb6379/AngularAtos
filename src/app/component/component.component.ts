import { Component, OnInit } from '@angular/core';
import { Photo } from './../models/Photo.model';
import { Album } from './../models/Album.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  albums: Album;
  idAlbum: number = null;
  erro: any;

  constructor(private albumService: ServiceService) {
    this.getter();
   }

   getter() {
     this.albumService.getAlbums().subscribe(
       (data:Album) => {
         this.albums = data;

         console.log("waht's in data", data);
         console.log("this.albums", this.albums);
       },
       (error:any) => {
         this.erro = error;
         console.log("Error", this.erro);
       }
     )
   }

  ngOnInit(): void {
  }

  select(album:Album) {
    this.idAlbum = album.id;
  }

  clean(){
    this.idAlbum = null;
  }

}
