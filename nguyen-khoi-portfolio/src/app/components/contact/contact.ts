import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contact = PROFILE_DATA.contact;
  social = PROFILE_DATA.social;
}
