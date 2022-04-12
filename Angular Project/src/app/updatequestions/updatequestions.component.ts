import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-updatequestions',
  templateUrl: './updatequestions.component.html',
  styleUrls: ['./updatequestions.component.css']
})
export class UpdatequestionsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref)
  }
}
