import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  @Input() carData: any = { car_name: '', car_desc: '', car_price: 0 };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getCarsById(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.carData = data;
    });
  }

  updateCar() {
    this.rest.updateCar(this.route.snapshot.params.id, this.carData).subscribe((result) => {
      this.router.navigate(['/car-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
