export enum ApiRoutes {
  Offers = '/six-cities/offers',
  Offer = '/six-cities/offers/{offerId}',
  OffersNearby = '/six-cities/offers/{offerId}/nearby',
  Favorite = '/six-cities/favorite',
  FavoriteStatus = '/six-cities/favorite/{offerId}/{status}',
  Comments = '/six-cities/comments/{offerId}',
  Login = '/six-cities/login',
  Logout = '/six-cities/logout',
}
