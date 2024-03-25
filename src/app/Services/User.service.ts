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
}