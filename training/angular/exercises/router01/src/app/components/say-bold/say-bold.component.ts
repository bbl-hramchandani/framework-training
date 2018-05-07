import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-say-bold',
  templateUrl: './say-bold.component.html',
  styleUrls: ['./say-bold.component.css']
})
export class SayBoldComponent implements OnInit {

  public paramvalue: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(dataparams => {
      this.paramvalue = dataparams.paramvalue;
    });
  }

}
