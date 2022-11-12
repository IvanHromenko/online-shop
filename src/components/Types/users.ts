export type Role = "admin" | "user"

export interface User {
    id: number,
    email: string,
    password: string,
    name: string,
    role: Role,
    avatar: string
}

export interface UserReducer {
    users: User[],
    currentUser: User | undefined
};

export interface UserLoginCredentials {
    email: string,
    password: string
}