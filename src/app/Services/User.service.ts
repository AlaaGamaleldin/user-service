import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { User } from "src/Model/user.interface";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('./assets/UserService.json');
  }

  getUserById(id: string): Observable<User | undefined> {
    return this.getUser().pipe(
      map((users: User[]) => users.find((user: { userId: string; }) => user.userId === id))
    );
  }


// getUserById() now returns an Observable: Instead of directly returning userFound, 
// it now returns an Observable of type User.This is because getUser() returns an Observable, 
// and we want to maintain the asynchronous nature of the method.

// Using RxJS map operator: We use the pipe() method along with the map() 
// operator to transform the emitted array of users into a single user based on the provided id.

// Now, when you call getUserById(), you will receive an Observable that emits the user 
// object with the provided id.You can subscribe to this Observable in the component where you want to use it, 
// and handle the emitted user object accordingly.This separation of concerns makes your code more flexible and easier to test.

}