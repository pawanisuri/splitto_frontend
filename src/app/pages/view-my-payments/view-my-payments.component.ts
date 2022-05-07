import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout';
import { MatDialog } from '@angular/material/dialog';
import { EditGroupComponent } from '../group/edit-group/edit-group.component';
import { DeleteDialogBoxComponent } from '../shared/delete-dialog-box/delete-dialog-box.component';

export interface PeriodicElement {
  id: number;
  paymentType: String;
  amount: number;
  paymentDate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, paymentType: 'VISA', amount: 100.79, paymentDate: '20th of Jan 2022', status: 'Paid'},
  {id: 2, paymentType: 'CASH', amount: 4002.00, paymentDate: '20th of Jan 2022',status: 'Paid'},
  {id: 3, paymentType: 'VISA', amount: 6041, paymentDate: '25th of Jan 2022',status: 'Paid'},
  {id: 4, paymentType: 'MASTER', amount: 922, paymentDate: '30th of May 2022',status: 'Paid'},
  {id: 5, paymentType: 'VISA', amount: 1011, paymentDate: '1sth of May 2022',status: 'Paid'},
  {id: 6, paymentType: 'CASH', amount: 1207, paymentDate: '20th of Mar 2022',status: 'Paid'},
  {id: 7, paymentType: 'CASH', amount: 14007, paymentDate: '2th of Jan 2022',status: 'Paid'},
  {id: 8, paymentType: 'VISA', amount: 15994, paymentDate: '20th of Apr 2022',status: 'Paid'},
  {id: 9, paymentType: 'VISA', amount: 18984, paymentDate: '8th of Sep 2021',status: 'Paid'},
  {id: 10, paymentType: 'MASTER', amount: 2097, paymentDate: '24th of Nov 2021',status: 'Paid'},
];


type Tabs = 'Header' | 'Toolbar' | 'PageTitle' | 'Aside' | 'Content' | 'Footer';

@Component({
  selector: 'app-view-my-payments',
  templateUrl: './view-my-payments.component.html',
  styleUrls: ['./view-my-payments.component.scss']
})
export class ViewMyPaymentsComponent implements OnInit {


  displayedColumns: string[] = ['id', 'paymentType', 'amount', 'paymentDate','status'];
  dataSource = ELEMENT_DATA;
  activeTab: Tabs = 'Header';
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;

  animal: string;
  name: string;

  constructor(private layout: LayoutService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.model = this.layout.getConfig();
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.refreshConfigToDefault();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.setConfig(this.model);
    location.reload();
  }



  edit(): void {
    const dialogRef = this.dialog.open(EditGroupComponent, {
      position:{top:'10%', bottom:'10%'},
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  // delete(): void {
  //   const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
  //     position:{top:'10%', bottom:'10%'},
  //     data: {name: this.name, animal: this.animal},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}
