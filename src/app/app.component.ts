import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions, IMyDateRangeModel, IMyDate } from 'mydaterangepicker';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Made Simple Dashboard';

  constructor( private http: HttpClient ) { }

  myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd mmm yyyy',
        showClearBtn: false,
        showApplyBtn: false,
        sunHighlight: false,
        selectorWidth: '240',
  };

  public start: IMyDate =  { day: 11, month: 11, year: 2016 };
  public end: IMyDate =  { day: 11, month: 10, year: 2016 };

  public startString: string = this.start.year + "-" + this.start.month + "-" + this.start.day;
  public endString: string = this.end.year + "-" + this.end.month + "-" + this.end.day;

  onDateRangeChanged(event: IMyDateRangeModel) {
    // event properties are: event.beginDate, event.endDate, event.formatted,
    // event.beginEpoc and event.endEpoc
    this.start = event.beginDate;
    this.end = event.endDate;
    
    this.startString = this.start.year + "-" + this.start.month + "-" + this.start.day;
    this.endString = this.end.year + "-" + this.end.month + "-" + this.end.day;

  }
  
  public basic: string;
  public riskfree: string;
  public privacy: string;
  public comprehensive: string;
  public ultimate: string;

  ngOnInit(): void {
    this.http.get('http://192.168.100.118:32647/json/cms/sales_per_product/1313/2016-02-01/2016-03-01').subscribe(data => {
      console.log(data);
      this.basic = JSON.stringify(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    this.http.get('http://192.168.100.118:32647/json/cms/sales_per_product/1314/2016-02-01/2016-03-01').subscribe(data => {
      console.log(data);
      this.riskfree = JSON.stringify(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    this.http.get('http://192.168.100.118:32647/json/cms/sales_per_product/1315/2016-02-01/2016-03-01').subscribe(data => {
      console.log(data);
      this.privacy = JSON.stringify(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    this.http.get('http://192.168.100.118:32647/json/cms/sales_per_product/1316/2016-02-01/2016-03-01').subscribe(data => {
      console.log(data);
      this.comprehensive = JSON.stringify(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    this.http.get('http://192.168.100.118:32647/json/cms/sales_per_product/1317/2016-02-01/2016-03-01').subscribe(data => {
      console.log(data);
      this.ultimate = JSON.stringify(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }

}
