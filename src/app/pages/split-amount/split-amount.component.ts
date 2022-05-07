import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  memberName: string;
  type: number;
  value: number;
}



@Component({
  selector: 'app-split-amount',
  templateUrl: './split-amount.component.html',
  styleUrls: ['./split-amount.component.scss']
})

export class SplitAmountComponent implements OnInit {
  resetFormGroup: FormGroup;
  displayedColumns: Array<{ key: string, header: string }> = [
    {
      key: 'memberName',
      header: 'memberName',
    },
    {
      key: 'type',
      header: 'type',
    },
    {
      key: 'value',
      header: 'value',
    },
  ];
  displayedColumnsKeys: string[];
  // displayedColumns: string[] = ['memberName', 'type', 'value'];
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
    this.displayedColumnsKeys = this.displayedColumns.map((col) => col.key);
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
