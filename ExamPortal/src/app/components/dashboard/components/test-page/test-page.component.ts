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
  public mySentences: Array<any> = [
    { id: 1, text: 'what is AngularTutorial?', review: -1, answers: { 'a': 'answer a', 'b': 'answer a', 'c': 'answer a', 'd': 'answer a' } },
    { id: 2, text: 'What is javaspring?', review: -1, answers: { 'a': 'answer b', 'b': 'answer b', 'c': 'answer b', 'd': 'answer b' } },
    { id: 3, text: 'What is web api?', review: -1, answers: { 'a': 'answer c', 'b': 'answer c', 'c': 'answer c', 'd': 'answer c' } },
    { id: 4, text: 'What is async call?', review: -1, answers: { 'a': 'answer d', 'b': 'answer d', 'c': 'answer d', 'd': 'answer d' } },
  ];
  constructor(private dialog: MatDialog) {
    // this.questionsmodel = TestQuestions;
    this.questionnumber = this.mySentences[0].id;
    this.displayquestion = this.mySentences[0].text;
    this.displayanswer = this.mySentences[0].answers;
    this.allotedtime = (this.time * 60);
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
  ngOnDestroy() {
    //clearing interval
    clearInterval(this.timer)
  }
}
function moment() {
  throw new Error('Function not implemented.');
}
