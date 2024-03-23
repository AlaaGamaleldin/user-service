export interface User{
    userId: string,
    username: string,
    userEmail: string,
    firstName: string,
    middleName: string,
    lastName: string,
    userTitle: string,
    userAvatarUrl: string,
    friendsVisibility: string,
    phones: [{
        phoneId: string,
        title: string,
        number: number,
        visibility: string,
 } ]
 addresses: [
    {
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
    {
      socialId: string,
      title: string,
      url: string,
      visibility: string,
    }
  ],
  friends: [
    {
      friendId: string,
      username: string,
      firstName: string,
      middleName: string,
      lastName: string,
      userAvatarUrl: string
    }],
}