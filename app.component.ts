import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface course {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>courses</h1>
    <ul>
      <li *ngFor="let course of courses">
        {{ course.title }} by {{ course.description }}
      </li>
    </ul>
  `,
})
export class AppComponent implements OnInit {
  courses: course[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<course[]>('http://localhost:4000/courses')
      .subscribe(
        courses => this.courses = courses,
        error => console.log(error)
      );
  }
}