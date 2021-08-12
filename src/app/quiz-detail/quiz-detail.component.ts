import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {


  requstService: any = [];
  answerArray: any = [];
  userAns: any = [];
  score: number = 0;
  formValidated: boolean = false;
  constructor(private Api: QuizService) { }

  ngOnInit(): void {
    this.Api.httpRequestService().subscribe(data => {
      // console.warn(data)
      this.requstService = data;
      for (let i in this.requstService) {
        this.answerArray.push(this.requstService[i]['ans']);
      }
    })
  }
  submitData(questionform: NgForm) {
    if (questionform.submitted) {
      for (const [key, value] of Object.entries(questionform.value)) {
        this.userAns.push(value)
      }
      this.formValidated = true;
    }
    else {
      this.formValidated = false;
    }

  }
  scoredata() {
    if (this.score == 0)
      for (let i = 0; i < (this.answerArray).length; i++) {
        for (let j = 0; j < (this.userAns).length; j++) {
          if (this.answerArray[i] == this.userAns[j]) {
            this.score = this.score + 10;

          }

        }

      }

  }
}


