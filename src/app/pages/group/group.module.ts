import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { EditGroupComponent } from './edit-group/edit-group.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewGroupComponent } from './new-group/new-group.component';
import { DeleteDialogBoxComponent } from '../shared/delete-dialog-box/delete-dialog-box.component';
@NgModule({
  declarations: [GroupComponent, EditGroupComponent, NewGroupComponent, DeleteDialogBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: GroupComponent,
      },
    ]),
  ],
})

export class GroupModule {}
