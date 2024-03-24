import { Visibility } from "./enums/friendsVidibility.enum";

export interface Phone {
    phoneId: string;
    title: string;
    number: number;
    visibility: Visibility;
}