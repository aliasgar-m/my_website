import { Component } from '@angular/core';
import { contact_details } from 'src/assets/data/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact_details = contact_details;
}
