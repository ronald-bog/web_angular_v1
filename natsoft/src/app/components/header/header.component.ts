import { Component,HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isBurgerOpen = false;
  isMenuOpen = false;
  @HostBinding('class') componentCssClass: any = 'light';

  toggleMenu() {
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }

  theme(e: string) {
    this.componentCssClass = e;
    sessionStorage.setItem('theme', e)
  }

}
