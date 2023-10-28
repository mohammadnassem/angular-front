import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navBarData} from "./nav-data";
import {INavbarDta} from "./helper";

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent  implements OnInit {
  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;
  right=true;
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
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth,right:true});

  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth,right:true});

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
