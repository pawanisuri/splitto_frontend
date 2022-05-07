import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
// export interface PeriodicElement {
//   memberName: string;
//   type: number;
//   value: number;
// }

export interface PeriodicElement {

  totalAmount: number;
  name: string;
  divideType: string;
  value: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {totalAmount: 1000.00, name: 'Pawani', divideType: 'PERCENTAGE', value: 100.00},
  {totalAmount: 2000.00, name: 'Piyumi', divideType: 'FIXED', value: 250.00},
  {totalAmount: 300.00, name: 'Nuwani', divideType: 'FIXED', value: 50.00},
  {totalAmount: 2400.00, name: 'Malinga', divideType: 'PERCENTAGE', value: 300.00},
  {totalAmount: 500.00, name: 'Sarath', divideType: 'PERCENTAGE', value: 150.00},
  {totalAmount: 600.00, name: 'Kasun', divideType: 'FIXED', value: 100.00},
  {totalAmount: 100.00, name: 'Dinuka', divideType: 'PERCENTAGE', value: 50.00},
  {totalAmount: 1000.00, name: 'Kashmira', divideType: 'PERCENTAGE', value: 250.00},
  {totalAmount: 2000.00, name: 'Dinusha', divideType: 'FIXED', value: 1000.00},
  {totalAmount: 600.00, name: 'Thusitha', divideType: 'PERCENTAGE', value: 150.00},
];
@Component({
  selector: 'app-split-amount',
  templateUrl: './split-amount.component.html',
  styleUrls: ['./split-amount.component.scss']
})

export class SplitAmountComponent implements OnInit {
  resetFormGroup: FormGroup;
  dataSource = ELEMENT_DATA;

  displayedColumnsKeys: string[];
  displayedColumns: string[] = ['totalAmount', 'name', 'divideType', 'value'];
  dataSourceObj:any = [ {
    memberName:  "sada",
    type:  "adada",
    value:  "daddad"
  }];
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;

  animal: string;
  name: string;

  ngOnInit(): void {
    this.model = this.layout.getConfig();
    this.resetFormGroup = new FormGroup({
      totalAmount: new FormControl(''),
      memberName: new FormControl(''),
      type: new FormControl(''),
      value: new FormControl('')
    });
    // this.displayedColumnsKeys = this.displayedColumns.map((col) => col.key);
  }

  constructor(private layout: LayoutService,public dialog: MatDialog) {}




  resetPreview(): void {
    this.resetLoading = true;
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.setConfig(this.model);
    location.reload();
  }


  addMember(){
    let memberObj :any =  {
      memberName:  "sada",
      type:  "adada",
      value:  "daddad"
    }
    this.dataSourceObj.push(memberObj);
    console.log(this.dataSourceObj)
  }

}
