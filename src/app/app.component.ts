import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { initFlowbite } from 'flowbite';
interface  SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
  right:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dha';
  ngOnInit(): void {
    initFlowbite();
  }
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

isSideNavCollapsed = false;
  screenWidth = 0;
  right=false;
  onToggleSideNav(data:SideNavToggle):void{
this.isSideNavCollapsed=data.collapsed;
this.screenWidth=data.screenWidth;
this.right=data.right;
  }
}
