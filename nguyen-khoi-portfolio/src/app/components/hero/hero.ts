import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile.data';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit {
  profile = PROFILE_DATA;
  imageExists = false;

  ngOnInit(): void {
    this.checkImageExists();
  }

  checkImageExists(): void {
    const img = new Image();
    img.onload = () => {
      this.imageExists = true;
    };
    img.onerror = () => {
      this.imageExists = false;
    };
    img.src = this.profile.image;
  }

  onImageError(): void {
    this.imageExists = false;
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToProjects(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
