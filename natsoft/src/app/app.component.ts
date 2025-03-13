import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'natsoft';
  @HostBinding('class') componentCssClass: any = 'light';
  showButton = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit() {
    sessionStorage.setItem('theme','light');
  }

  ngDoCheck() {
    this.componentCssClass = sessionStorage.getItem('theme');
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > 500;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
