import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  id: number;
  whom: String;
  amount: number;
  paymentDate: string;
  reason: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {id: 1, whom: 'Thilak Perera', amount: 100.79, paymentDate: '20th of Jun 2022', reason: 'For Building rent'},
  {id: 2, whom: 'Pawani Suriyaarachchi', amount: 4002.00, paymentDate: '20th of May 2022',reason: 'For birthday party'},
  {id: 3, whom: 'Sarath Wickramaarachchi', amount: 6041, paymentDate: '25th of Jun 2022',reason: 'For car'},
  {id: 4, whom: 'Piyumi Herath', amount: 922, paymentDate: '30th of May 2022',reason: 'For party'},
  {id: 5, whom: 'Nuwani Nadeeshani', amount: 1011, paymentDate: '1sth of May 2022',reason: 'For shopping'}
];


type Tabs = 'Header' | 'Toolbar' | 'PageTitle' | 'Aside' | 'Content' | 'Footer';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.scss']
})
export class PendingPaymentsComponent implements OnInit {


  displayedColumns: string[] = ['id', 'whom', 'amount', 'paymentDate','reason'];
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

}
