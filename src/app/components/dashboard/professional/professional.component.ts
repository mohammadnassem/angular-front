import {Component, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  dataLabels: ApexDataLabels | any;
  colors: any[]| any;
  plotOptions: ApexPlotOptions| any;
};

export type SemiDonut = {
  series: ApexNonAxisChartSeries| any;
  chart: ApexChart| any;
  responsive: ApexResponsive[]| any;
  plotOptions: ApexPlotOptions| any;
  grid: ApexGrid| any;
};

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart2") chart2!: ChartComponent;
  public chartOptionsSemiDonut: Partial<SemiDonut>;

  constructor() {

    this.chartOptions = {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: 'total',
                formatter: function (w:any) {
                  return w.globals.seriesTotals.reduce((a:any, b:any) => {
                    return (a+b)
                  })
                }
              }
            }
          }
        }
      },
      series: [10, 55, 41, 15],
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
      colors: ['#FF5B35', '#80BC00', '#FFB35B', '#A4A4A4'],
      chart: {
        width: 380,
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient"
      },
      legend: {

        show: true,
        position: 'bottom',
        offsetX: -15,
        horizontalAlign: 'center'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };




    this.chartOptionsSemiDonut = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 380,
        type: "donut"
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };


  }
}
