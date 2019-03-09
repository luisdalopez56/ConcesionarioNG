import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCarsById(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.car = data;
    });
  }

}
