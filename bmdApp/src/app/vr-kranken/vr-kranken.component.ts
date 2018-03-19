import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vr-kranken',
  templateUrl: './vr-kranken.component.html',
  styleUrls: ['./vr-kranken.component.scss']
})
export class VrKrankenComponent implements OnInit {

  selectedFranchise: string;
  selectedVModell: string;

  constructor() { }

  ngOnInit() {
  }

}
