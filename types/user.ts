export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "admin"  | "user";
  createdAt?: string;
  updatedAt?: string;
}
export interface IDeleteUserRequest {
  _id: string;
}

export interface IDeleteUserResponse {
  message: string;
  userId: string;
}
