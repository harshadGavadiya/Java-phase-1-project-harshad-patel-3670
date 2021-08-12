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
        // console.log(this.answerArray);
      }


    })

  }
  submitData(questionform: NgForm) {
    if (questionform.submitted) {
      // questionform.value;
      for (const [key, value] of Object.entries(questionform.value)) {
        this.userAns.push(value)
        // console.log(`${key}: ${value}`);
        // console.log(this.userAns);

      }


      // console.log(this.answerArray);
      this.formValidated = true;
      // this.review(questionform.value);

    }
    else {
      this.formValidated = false;
    }
    // }  
    // }

  }

  // review(formValue: any) {
  //   formValue.each( (key :string, value: string) => {
  //     const id = parseInt(key.replace('question', ''), 10) + 1;
  //     const question = this.requstService.find((question:any) => question.id = id);
  //     if(question) {
  //       const ans = question.ans;
  //       if(value !== ans) {
  //         question.isCorrect = true;
  //       }
  //     }
  //   });

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


// }
