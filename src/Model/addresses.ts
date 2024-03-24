import { Visibility } from "./enums/friendsVidibility.enum";

export interface Addresses {
  addressId: string;
  title: string;
  country: string;
  provenance: string;
  city: string;
  street: string;
  zipCode: number;
  buildingNumber: string;
  apartmentNumber: string;
  visibility: Visibility;
}