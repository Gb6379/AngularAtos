import { Contact } from './../models/Contact';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {


  //submitted = false;

 currentContact: Contact = {
   name: '',
    lastName: '',
    birthDate: '',
    kinship: '',
    phones:  '',
  };



  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentContact = new Contact();
    this.getContact(this.route.snapshot.params['id']);

  }

  update() {
    this.userService.updateContact(this.currentContact.id, this.currentContact).subscribe(
      (data: Contact) => {
        console.log(data);
      }
    )
  }

  getContact(id: any) {
    this.userService.getContactById(id).subscribe(
      data => {
        this.currentContact = data;
        console.log(this.currentContact);
      }, error => {
        console.log(error);
      }
    );
  }

}
