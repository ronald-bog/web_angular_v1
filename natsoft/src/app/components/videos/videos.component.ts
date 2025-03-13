import { Component, HostListener } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent {
  public widthPage: number;
  width: number=500;
  height: number=300;
  videos: any = [];

  constructor(private news: NewsService) {
    this.widthPage = window.innerWidth;
  }

  ngOnInit() {
    this.news.videos().subscribe(data => {
      this.videos = data.videos;
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.widthPage = event.target.innerWidth;

    if (this.widthPage < 550) {
      this.width = 380;
      this.height = 228;
    } else {
      this.width = 500;
      this.height = 300;
    }
  }
}
