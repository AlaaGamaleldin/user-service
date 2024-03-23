export interface User{
    userId: string,
    username: string,
    userEmail: string,
    firstName: string,
    middleName: string,
    lastName: string,
    userTitle: string,
    userAvatarUrl: string,
    friendsVisibility: string, //Create enum with the name of Visibility having the follwoing values FRIENDS, PUBLIC, PRIVATE, then use the enum as datatype here 
    phones: [{ // extract the phone into separate interface 
        phoneId: string,
        title: string,
        number: number,
        visibility: string,
 } ]
 addresses: [
    { // extract the Address into separate interface 
      addressId: string,
      title: string,
      country: string,
      provenance: string,
      city: string,
      street: string,
      zipCode: number,
      buildingNumber: string,
      apartmentNumber: string,
      visibility: string
    }
  ],
  socialMedia: [
    { // extract the ScoialMedia into separate interface 
      socialId: string,
      title: string,
      url: string,
      visibility: string,
    }
  ],
  friends: [
    { // extract the Friens into separate interface 
      friendId: string,
      username: string,
      firstName: string,
      middleName: string,
      lastName: string,
      userAvatarUrl: string
    }],
}
