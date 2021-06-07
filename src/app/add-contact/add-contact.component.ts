import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = {
    name: '',
    lastName: '',
    birthDate: '',
    kinship: '',
    phones:  '',
  }



  errorMessage = '';

  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save() {
    this.userService.saveContact(this.contact).subscribe(
      response => {
        console.log(response)
        this.submitted = true;
      }, err => {
        this.errorMessage = err.error.message;
      }
    )
  }

}
