import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
goals:any;
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}
