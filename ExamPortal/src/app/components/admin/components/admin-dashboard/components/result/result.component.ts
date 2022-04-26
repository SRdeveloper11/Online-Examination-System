import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Result } from 'src/app/components/admin/components/admin-dashboard/model/result';
import { ResultService } from 'src/app/components/admin/components/admin-dashboard/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resDetail !: FormGroup;
  resObj: Result = new Result();
  resList: Result[] = [];

  constructor(private formBuilder: FormBuilder, private resService: ResultService) { }

  ngOnInit(): void {

    this.getAllResults();

    this.resDetail = this.formBuilder.group({
      id : [''],
      username : [''],
      questionAttempted : [''],
      correct : [''],
      wrong : [''],
      totalMarks : [''],

    });

  }

  addResult() {
    console.log(this.resDetail);
    this.resObj.id = this.resDetail.value.id;
    this.resObj.username = this.resDetail.value.username;
    this.resObj.questionAttempted = this.resDetail.value.questionAttempted;
    this.resObj.correct = this.resDetail.value.correct;
    this.resObj.wrong = this.resDetail.value.wrong;
    this.resObj.totalMarks = this.resDetail.value.totalMarks;
    this.resService.addResult(this.resObj).subscribe(res=>{
        console.log(res);
        this.getAllResults();
    },err=>{
        console.log(err);
    });

  }

  getAllResults() {
    this.resService.getAllResults().subscribe(res=>{
        this.resList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

}
