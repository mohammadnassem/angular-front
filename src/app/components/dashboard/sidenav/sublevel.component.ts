import {Component, Input, OnInit} from '@angular/core';
import {INavbarDta} from "./helper";
import {animate, style, transition, trigger,state} from "@angular/animations";

@Component({
  selector: 'app-sublevel',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length>0"
        [@submenu]="expanded ? {value:'visible',params:{transitionParams:'400ms cubic-bezier(0.86,0,0.07,1)',height:'*'}}
         :{value:'hidden',params:{transitionParams:'400ms cubic-bezier(0.86,0,0.07,1)',height:'0'}}"
        class="sublevel-nav">
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a class="sublevel-nav-link" (click)="handleClick(item)" *ngIf="item.items && item.items.length>0">
          <i class="sublevel-nav-link-icon fa fa-circle"></i>
          <span class="sublevel-nav-link-text" *ngIf="collapsed">{{item.lable}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
             [ngClass]="!item.expanded ? 'fa fa-angle-right':'fa fa-angle-down' "></i>
        </a>
        <a class="sublevel-nav-link" *ngIf="!item.items || (item.items && item.items.length ===0)"
           [routerLink]="[item.routeLink]" routerLinkActive="active-sublevel"
           [routerLinkActiveOptions]="{exact:true}">
          <i class="sublevel-nav-link-icon fa fa-circle"></i>
          <span class="sublevel-nav-link-text" *ngIf="collapsed">{{item.lable}}</span>
        </a>
        <div *ngIf="item.items && item.items.length>0">
          <app-sublevel [data]="item" [collapsed]="collapsed" [multiple]="multiple"
                        [expanded]="item.expanded"></app-sublevel>

        </div>


      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
      })),
      transition('visible <=> hidden', [style({
        overflow: 'hidden'
      }), animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SublevelComponent implements OnInit {
  @Input() data: INavbarDta = {
    routeLink: '',
    icon: '',
    lable: '',
    items: [],
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  ngOnInit(): void {
  }

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item != modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }

        }
      }
    }
    item.expanded = !item.expanded;
  }

}
