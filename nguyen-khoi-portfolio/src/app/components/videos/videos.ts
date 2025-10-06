import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROFILE_DATA, Video } from '../../data/profile.data';

@Component({
  selector: 'app-videos',
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class VideosComponent {
  videos = PROFILE_DATA.videos || [];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getEmbedUrl(video: Video): string {
    if (video.type === 'youtube') {
      // Extract video ID from various YouTube URL formats
      const videoId = this.extractYouTubeId(video.url);
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (video.type === 'vimeo') {
      const videoId = video.url.split('/').pop() || '';
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return video.url;
  }

  private extractYouTubeId(url: string): string {
    // Handle various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  }
}
