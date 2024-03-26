import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Model/user.interface';
import { UserService } from '../Services/User.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Addresses } from 'src/Model/addresses.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: User | undefined;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id') as string;
      this.userService.getUserById(id).subscribe((us: User | undefined) => this.user = us)
    });
  }

  // Address is inside an array, to get to it you can provide the array from the front
  // then handle it in the component
  getUserCountry(addresses: Addresses[] | undefined): string {
    if (addresses && addresses.length > 0) {
      return addresses[0].country || 'Unknown';
    } else {
      return 'Unknown';
    }
  }
}
