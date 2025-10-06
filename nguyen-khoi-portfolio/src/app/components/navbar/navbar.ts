import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  menuItems = [
    { label: 'Trang chủ', id: 'hero' },
    { label: 'Giới thiệu', id: 'about' },
    { label: 'Kinh nghiệm', id: 'experience' },
    { label: 'Dự án', id: 'projects' },
    { label: 'Video', id: 'videos' },
    { label: 'Liên hệ', id: 'contact' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
