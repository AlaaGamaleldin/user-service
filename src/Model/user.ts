import { Visibility } from "src/app/enums/friendsVidibility.enum";
export class User{
    constructor(userId: string, username: string, userEmail: string, firstName: string, middleName: string, lastName: string, userTitle: string, userAvatarUrl: string, friendsVisibility: Visibility){
        this.userId = userId;
        this.username = username;
        this.userEmail = userEmail;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.userTitle = userTitle;
        this.userAvatarUrl = userAvatarUrl;
        this.friendsVisibility = friendsVisibility;
    }
    userId: string;
    username: string;
    userEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    userTitle: string;
    userAvatarUrl: string;
    friendsVisibility: Visibility;
   
}
