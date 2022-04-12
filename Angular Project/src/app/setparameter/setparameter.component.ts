import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-setparameter',
  templateUrl: './setparameter.component.html',
  styleUrls: ['./setparameter.component.css']
})
export class SetparameterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref)
  }
}
