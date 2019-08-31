import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-breaker-front';
  startMessage: any;
  resultMessage: any;

  constructor(
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  setSecret(number){
    this.http.get<any>(`http://localhost:3000/setsecret/${number}`, {}).subscribe(res => {
      this.startMessage = res.message;
      console.log(res.message);
      
    });
  }

  guess(number){
    this.http.get<any>(`http://localhost:3000/guess/${number}`, {}).subscribe(res => {
      this.resultMessage = res.result;
      console.log(res.result);
      
    });
  }
}
