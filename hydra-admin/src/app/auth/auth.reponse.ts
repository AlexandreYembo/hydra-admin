export interface AuthResponse {
    refreshToken: string,
    accessToken: string,
    expiresIn: number,
    userToken: UserToken
}

export interface UserToken {
    id: string,
    email: string,
    claims: Claims[]
}

export interface Claims {
    value: string,
    type: string
}