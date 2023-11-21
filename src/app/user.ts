export class User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
  role?: string;
  refreshToken?: string
}
