import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('secondDialog') secondDialog: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }

  openOtherDialog() {
    this.dialog.open(this.secondDialog);
  }
}
