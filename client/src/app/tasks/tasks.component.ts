import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ConfirmationService } from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  display: boolean = false;
  
      showDialog() {
          this.display = true;
      }
      taskList: any;
  constructor(private http:Http,private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/api/tasks")
    .map((response: Response) => {
      return response.json();
    })
    .subscribe(data => {
      console.log(data);
      this.taskList = data;
    })
  }

}
