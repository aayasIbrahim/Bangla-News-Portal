import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "@/types/user";

export interface IGetUsersResponse {
  users: IUser[];
}

export interface IUpdateRoleRequest {
  id: string;
  role: "admin" | "user";
}

export interface IUpdateRoleResponse {
  message: string;
  user: IUser;
}

export interface IDeleteUserResponse {
  message: string;
  userId: string;
}

/* ------------------ API Slice ------------------ */

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),

  tagTypes: ["Users"],

  endpoints: (builder) => ({

    /* ------------------ GET USERS ------------------ */
    getUsers: builder.query<IGetUsersResponse, void>({
      query: () => `/users`,
      providesTags: ["Users"],
    }),

    /* ------------------ UPDATE ROLE ------------------ */
    updateRole: builder.mutation<IUpdateRoleResponse, IUpdateRoleRequest>({
      query: ({ id, role }) => ({
        url: `/users/${id}/role`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["Users"],
    }),

    /* ------------------ DELETE USER ------------------ */
    deleteUser: builder.mutation<IDeleteUserResponse, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

  }),
});

/* ------------------ HOOK EXPORT ------------------ */

export const {
  useGetUsersQuery,
  useUpdateRoleMutation,
  useDeleteUserMutation,
} = userApi;
