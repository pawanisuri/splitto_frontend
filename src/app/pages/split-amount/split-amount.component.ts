import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  memberName: string;
  type: number;
  value: number;
}

const ELEMENT_DATA: PeriodicElement[] = [


];

@Component({
  selector: 'app-split-amount',
  templateUrl: './split-amount.component.html',
  styleUrls: ['./split-amount.component.scss']
})

export class SplitAmountComponent implements OnInit {
  resetFormGroup: FormGroup;
  displayedColumns: string[] = ['memberName', 'type', 'value'];
  dataSource = ELEMENT_DATA;
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
    }
  );
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
      // memberName:  this.resetFormGroup.get('memberName').value? this.resetFormGroup.get('memberName').value: '',
      // type:  this.resetFormGroup.get('type').value,
      // value:  this.resetFormGroup.get('value').value
    }
    this.dataSource.push(memberObj);
    console.log(this.dataSource, memberObj)
  }

}
