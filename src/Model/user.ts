import { Addresses } from "./addresses";
import { Visibility } from "./enums/friendsVidibility.enum";
import { Frinds } from "./frinds";
import { Phone } from "./phone";
import { SocialMedia } from "./socialMedia";
export interface User{
    userId: string;
    username: string;
    userEmail: string;
    firstName: string;
    middleName: string;
    lastName: string;
    userTitle: string;
    userAvatarUrl: string;
    phones: Phone[];
    addresses: Addresses[];
    socialMedia: SocialMedia[];
    friends: Frinds[];
    friendsVisibility: Visibility;
}
