import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {

  @ViewChild('sidenavMain') sidenavMain!: ElementRef ;
  @ViewChild('logoImg') logoImg!: ElementRef ;
  @ViewChild('navItemTitleA') navItemTitleA!: ElementRef ;
  @ViewChild('navItemTitleB') navItemTitleB!: ElementRef;

  isOpen: boolean = true;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');
      this.sidenavMain.nativeElement.removeAttribute('style');
      this.logoImg.nativeElement.removeAttribute('style');
      this.navItemTitleA.nativeElement.removeAttribute('style');
      this.navItemTitleB.nativeElement.removeAttribute('style');
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');

      this.sidenavMain.nativeElement.style.width = '64px';
      this.logoImg.nativeElement.style.display = 'none';
      this.navItemTitleA.nativeElement.style.display = 'none';
      this.navItemTitleB.nativeElement.style.display = 'none';
    }
  }
}
