import { Contact } from './../models/Contact';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})

export class BoardUserComponent implements OnInit {

  content?: string;

  displayedColumns: string[] = ['id' , 'name', 'lastName', 'birthDate', 'kinship', 'phones', 'actions'];


  contacts: Contact;
  erro:any;
  currentUser: any;
  errorMessage = '';
  currentContact: Contact = {
    name: '',
    lastName: '',
    birthDate: '',
    kinship: '',
    phones: '',
  };


  constructor(private userService: UserService,
    private token: TokenStorageService, private router: Router, private route: ActivatedRoute) {
    this.getter();
   }

  // phones:any[];

 /*  splitPhones() {
     if(this.contacts.phones != null) {
        this.phones = this.contacts.phones.split(";");
     }
   }*/

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
   // this.getContact(this.route.snapshot.params.id)
    //this.splitPhones()
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;

      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  getter() {
    this.userService.getAllContacts().subscribe(
      (data: Contact) => {
        this.contacts = data;
      },
      (error: any) => {
        this.erro = error;
      }
    )
  }

  getContact(id: number) {
    this.userService.getContactById(id).subscribe(
      (data : Contact) => {
        this.contacts = data;
        console.log(data);
        this.router.navigate([`updateContact/${id}`])
      }, error => {
        console.log(error);
      }
    );
  }


  deleteContact(id: number) {
    this.userService.deleteContact(id).subscribe(
      (data : Contact) => {
        console.log(data);
        this.getter()
      },error => {
        console.log(error);
      }
    )
  }


}


