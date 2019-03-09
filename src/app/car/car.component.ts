import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.cars = [];
    this.rest.getCars().subscribe((data: {}) => {
      console.log(data);
      this.cars = data;
    });
  }

  add() {
    this.router.navigate(['/car-add']);
  }

  delete(id) {
    this.rest.deleteCar(id)
      .subscribe(res => {
          this.getCars();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
