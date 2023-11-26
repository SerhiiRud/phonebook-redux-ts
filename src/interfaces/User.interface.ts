export default interface IUser {
  user: { name: null | string; email: null | string };
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
