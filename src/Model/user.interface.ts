import { Addresses } from "./addresses.interface";
import { Visibility } from "./enums/friendsVidibility.enum";
import { Frinds } from "./frinds.interface";
import { Phone } from "./phone.interface";
import { SocialMedia } from "./socialMedia.interface";
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
