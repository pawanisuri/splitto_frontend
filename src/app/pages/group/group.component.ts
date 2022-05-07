import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { LayoutService } from 'src/app/_metronic/layout';
import { EditGroupComponent } from './edit-group/edit-group.component';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogBoxComponent } from '../shared/delete-dialog-box/delete-dialog-box.component';
export interface PeriodicElement {

  id: number;
  name: string;
  address: string;
  number: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Pawani', address: 'Colombo', number: '0715645677'},
  {id: 2, name: 'Piyumi', address: 'Kandy', number: '0715209588'},
  {id: 3, name: 'Nuwani', address: 'Colombo', number: '0771105677'},
  {id: 4, name: 'Malinga', address: 'Colombo', number: '0715221677'},
  {id: 5, name: 'Sarath', address: 'Colombo', number: '0775645555'},
  {id: 6, name: 'Kasun', address: 'Matara', number: '0785655677'},
  {id: 7, name: 'Dinuka', address: 'Colombo', number: '0755999677'},
  {id: 8, name: 'Kashmira', address: 'Kurunagala', number: '0710005677'},
  {id: 9, name: 'Dinusha', address: 'Kandy', number: '0705648347'},
  {id: 10, name: 'Thusitha', address: 'Matara', number: '0781425677'},
];
type Tabs = 'Header' | 'Toolbar' | 'PageTitle' | 'Aside' | 'Content' | 'Footer';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['group.component.scss']

})

export class GroupComponent implements OnInit {
  groupForm:FormGroup;
  displayedColumns: string[] = ['id', 'name', 'address', 'number'];
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
    this.groupForm = new FormGroup({
    });
    console.log(this.dataSource,this.displayedColumns)
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


  delete(): void {
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
      position:{top:'10%', bottom:'10%'},
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
