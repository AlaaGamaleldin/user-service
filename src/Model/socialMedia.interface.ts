import { Visibility } from "./enums/friendsVidibility.enum";
export interface SocialMedia {
  socialId: string;
  title: string;
  url: string;
  visibility: Visibility;
}