import UserProfileInterface from "./user-profile.interface";

interface UserAndTokenInterface {
  tokenData: {
    expiresIn: number,
    token: string
  };
  user: UserProfileInterface;
  newAuthToken: {
    expiresIn: number,
    token: string
  };
}

export default UserAndTokenInterface;
