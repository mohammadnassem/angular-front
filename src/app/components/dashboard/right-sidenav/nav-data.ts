import {INavbarDta} from "./helper";

export const navBarData:INavbarDta[] = [
  {
    routeLink: 'professional',
    icon: 'fa fa-home',
    lable: 'Dashboard'
  },
  {
    routeLink: 'customers',
    icon: 'fa fa-trash',
    lable: 'Customers'
  },
  {
    routeLink: 'customer',
    icon: 'fa fa-tags',
    lable: 'Customer',
    items: [
      {
        routeLink: 'customer/list',
        lable: 'List Statistics',
      }, {
        routeLink: 'customer/create',
        lable: 'Create Statistics',
        items:[
          {
            routeLink: 'customer/edit',
            lable: 'Edit Statistics'
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

