import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref)
  }
}
