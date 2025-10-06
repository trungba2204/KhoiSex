import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile.data';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences = PROFILE_DATA.experience;
}
