import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-settings-professional',
  templateUrl: './settings-professional.component.html',
  styleUrls: ['./settings-professional.component.css']
})
export class SettingsProfessionalComponent {
  navData = [
    {

       lable: 'CPD/CME Accreditation'
    },
    {

       lable: 'Medical Training and Conferences'
    },
    {
      lable: 'Training Centers Accreditation'
    }
  ];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;

constructor() {

}
  setTab(index:number) {
    this.activatedTab = index;
    //this.onTabChange.emit(this.activatedTab);
  }
}
