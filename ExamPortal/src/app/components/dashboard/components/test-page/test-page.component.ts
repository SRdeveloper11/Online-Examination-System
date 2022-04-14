import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment1 from 'moment';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  currentTime: any;
  timer: any;
  displayquestion: any;
  questionsmodel: any;
  questionnumber: any;
  index: any = 0;
  timeLeft: number = 60;
  interval: any;
  displayanswer: any;
  allotedtime: any;
  time: any = 60;
  objectKeys = Object.keys;
  public mySentences: Array<any> = [
    { id: 1, text: 'what is AngularTutorial?', review: -1, answers: [{ id: 1, value: 'answer a',isselected:false},{ id: 2, value: 'answer a',isselected:false},{ id: 3, value: 'answer a',isselected:false},{ id: 4, value: 'answer a',isselected:false}] },
    { id: 2, text: 'What is javaspring?', review: -1, answers: [{ id: 1, value: 'answer b',isselected:false},{ id: 2, value: 'answer b',isselected:false},{ id: 3, value: 'answer b',isselected:false},{ id: 4, value: 'answer b',isselected:false}] },
    { id: 3, text: 'What is web api?', review: -1, answers: [{ id: 1, value: 'answer c',isselected:false},{ id: 2, value: 'answer c',isselected:false},{ id: 3, value: 'answer c',isselected:false},{ id: 4, value: 'answer c',isselected:false}] },
    { id: 4, text: 'What is async call?', review: -1, answers: [{ id: 1, value: 'answer d',isselected:false},{ id: 2, value: 'answer d',isselected:false},{ id: 3, value: 'answer d',isselected:false},{ id: 4, value: 'answer d',isselected:false}] },
  ];
  constructor(private dialog: MatDialog) {
    // this.questionsmodel = TestQuestions;
    this.questionnumber = this.mySentences[0].id;
    this.displayquestion = this.mySentences[0].text;
    this.displayanswer = this.mySentences[0].answers;
    this.allotedtime = (this.time * 30);
  }

  ngOnInit() {

    this.currentTime = moment1().format('LTS');
    //widget  get updated after every 5000 millisecond
    this.timer = setInterval(() => {
      this.currentTime = moment1().format('LTS')
    }
      , 1000);
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }
  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref)
  }
  openquestion(id: any) {

    console.log(this.mySentences[id].text)
    this.questionnumber = this.mySentences[id].id;
    this.displayquestion = this.mySentences[id].text;
    this.displayanswer = this.mySentences[id].answers;
  }
  review(id: any) {
    console.log(id)
    this.mySentences.forEach((a, index) => {
      if (a.id == id) {
        this.mySentences[index].review = 1;
        this.index = index;
        console.log(index)
      }
    });
  }
  confirm(id: any) {
    console.log(id)
    this.mySentences.forEach((a, index) => {
      if (a.id == id) {
        this.mySentences[index].review = 0;
        this.index = index;
      }
    });
  }
  handleEvent(event: any, ref: TemplateRef<any>) {
    if (event.action == 'done') {
      this.openDialogWithRef(ref);
    }
  }
  isAllSelected(item:any) {
    this.displayanswer.forEach((val: { id: any; isselected: boolean; }) => {
      if (val.id == item.id) val.isselected = !val.isselected;
      else {
        val.isselected = false;
      }
    });
  }
  ngOnDestroy() {
    //clearing interval
    clearInterval(this.timer)
  }
}
function moment() {
  throw new Error('Function not implemented.');
}
