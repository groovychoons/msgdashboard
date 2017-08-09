import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-view',
  templateUrl: './revenue-view.component.html',
  styleUrls: ['./revenue-view.component.css']
})
export class RevenueViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

    // lineChart
  public lineChartData:Array<any> = [
    {data: [745511, 758321, 829643, 797353, 759488, 788079], label: 'CMS Gross Revenue'},
    {data: [282333, 482333, 402333, 192333, 362333, 272333], label: 'Package Revenue'},
    {data: [183233, 482333, 672333, 633233, 403233, 232337], label: 'Renewal Revenue'}
  ];
  public lineChartLabels:Array<any> = ['January 2017', 'February 2017', 'March 2017', 'April 2017', 'May 2017', 'June 2017'];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    { // orange
      borderColor: '#FF8C61',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // green
      borderColor: '#499a50',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // blue
      borderColor: '#028090',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

}
