import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navBarData} from "./nav-data";
import {INavbarDta} from "./helper";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;
  right=false;
  navData = navBarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth,right:this.right});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth,right:this.right});

  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth,right:this.right});

  }

  handleClick(item: INavbarDta): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item != modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }


      }
    }
    item.expanded = !item.expanded;

  }


}
