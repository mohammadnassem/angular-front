import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewInit {
  prevLinkInactive: boolean = true;
  nextLinkInactive: boolean = false;
  eventsWrapperWidth: number = 2212;
  selectedElement: boolean[] = [true,false,false,false,false,false,false,false,false,false];
  @ViewChild('eventsWrapper') eventsWrapper!: ElementRef;
  selectedIndex: number = 0;
  private _timelineWrapperWidth = 220;

  @Input()
  set timelineWrapperWidth(value: number) {
    this._timelineWrapperWidth = value;
    this._cdr.detectChanges();
  }

  private _eventsMinDistance: number = 0;

  @Input()
  set eventsMinDistance(value: number) {
    this._eventsMinDistance = value;
   // this.initView();
  }

  constructor(private _cdr: ChangeDetectorRef,private toastr: ToastrService) {
  }



  showSuccess() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

  ngAfterViewInit(): void {
    this._cdr.detach();
   // this._viewInitialized = true;
  //  this.initView();
    this.showSuccess();
  }

  onScrollClick(event: Event, forward: boolean) {
    event.preventDefault();
    this.updateSlide(this.eventsWrapperWidth, forward);
    this._cdr.detectChanges();
  }

  updateSlide(timelineTotWidth: number, forward: boolean) {

    let translateValue = OverviewComponent.getTranslateValue(this.eventsWrapper.nativeElement);
    if (forward) {
      this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth)
    } else {
      this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
    }
  }

  translateTimeline(value: number, totWidth: number | null) {
    console.log(value);

    // only negative translate value
    value = (value > 0) ? 0 : value;
    // do not translate more than timeline width
    value = ( !(totWidth === null) && value < totWidth ) ? totWidth : value;
    OverviewComponent.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
    // update navigation arrows visibility
    this.prevLinkInactive = value === 0;
    this.nextLinkInactive = value === (totWidth);
  }

  private static getTranslateValue(timeline: Element) {
    let timelineStyle = window.getComputedStyle(timeline);
    let timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
      timelineStyle.getPropertyValue('-moz-transform') ||
      timelineStyle.getPropertyValue('-ms-transform') ||
      timelineStyle.getPropertyValue('-o-transform') ||
      timelineStyle.getPropertyValue('transform');

    let translateValue = 0;
    if (timelineTranslate.indexOf('(') >= 0) {
      let timelineTranslateStr = timelineTranslate
        .split('(')[1]
        .split(')')[0]
        .split(',')[4];
      translateValue = Number(timelineTranslateStr);
    }

    return translateValue;
  }

  private static setTransformValue(element: any, property: any, value: any) {
    element.style['-webkit-transform'] = property + '(' + value + ')';
    element.style['-moz-transform'] = property + '(' + value + ')';
    element.style['-ms-transform'] = property + '(' + value + ')';
    element.style['-o-transform'] = property + '(' + value + ')';
    element.style['transform'] = property + '(' + value + ')';
  }


  onEventClick( selectedItem: number) {
    this.selectedElement= [false,false,false,false,false,false,false,false,false,false];
    this.selectedElement[selectedItem]=true;
    this.selectedIndex =selectedItem;
    this._cdr.detectChanges();
  }

}
