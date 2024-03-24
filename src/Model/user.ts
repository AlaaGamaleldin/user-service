import { Visibility } from "src/app/enums/friendsVidibility.enum";
export interface User{
    userId: string,
    username: string,
    userEmail: string,
    firstName: string,
    middleName: string,
    lastName: string,
    userTitle: string,
    userAvatarUrl: string,
    friendsVisibility: Visibility,
   
}
