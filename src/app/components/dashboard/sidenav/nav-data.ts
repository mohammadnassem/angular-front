import {INavbarDta} from "./helper";

export const navBarData:INavbarDta[] = [
  {
    routeLink: 'professional',
    icon: 'fa fa-home',
    lable: 'Dashboard'
  },
  {
    routeLink: 'facility',
    icon: 'fa fa-trash',
    lable: 'Products'
  },
  {
    routeLink: 'profile-specialities',
    icon: 'fa fa-tags',
    lable: 'Statistics',
    items: [
      {
        routeLink: 'statistics/list',
        lable: 'List Statistics',
      }, {
        routeLink: 'statistics/create',
        lable: 'Create Statistics',
        items:[
          {
            routeLink: 'statistics/list',
            lable: 'List Statistics'
          }
        ]
      }
    ]
  }
  , {
    routeLink: 'coupons',
    icon: 'fa fa-file',
    lable: 'Coupons'
  }
]

