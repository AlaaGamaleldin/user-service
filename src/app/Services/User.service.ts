import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { User } from "src/Model/user.interface";
@Injectable({
    providedIn: 'root'
})
export class UserService{
    
    constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('./assets/UserService.json');
  }
  getUserById(id: string){
    let userFound: User;
     this.getUser().subscribe((user: User[]) => {
      userFound = user.find((userId: User) => userId.userId === id) as User
    });
    return userFound;
  }
}