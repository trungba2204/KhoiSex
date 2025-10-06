import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  profile = PROFILE_DATA;
}
