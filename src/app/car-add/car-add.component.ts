import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  @Input() carData = { car_name: '', car_desc: '', car_price: 0 };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addCar() {
    this.rest.addCar(this.carData).subscribe((result) => {
      this.router.navigate(['/car-detail/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }

}
