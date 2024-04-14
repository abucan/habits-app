export interface UserLoginDto {
  user: {
    name: string;
    userId: string;
    role: string;
  };
}

export interface User {
  name: string;
  userId: string;
  role: string;
}
