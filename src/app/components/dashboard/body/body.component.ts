import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() right = false;
  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768 && !this.right) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && !this.right) {
      styleClass = 'body-md-screen';
    }else if (this.collapsed && this.screenWidth > 768 && this.right) {
      styleClass = 'body-trimmed-right';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && this.right) {
      styleClass = 'body-md-screen-right';
    }
    return styleClass;

  }
}
