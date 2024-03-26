import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/Model/user.interface';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  user!: User;
 constructor(private route: ActivatedRoute, private http: HttpClient, private userService: UserService){}
 ngOnInit(){
  this.route.paramMap.subscribe((param: ParamMap) => {
    let id = param.get('id') as string;
    console.log(id);
    console.log(this.userService.getUserById(id))
  });
 }
 
}
