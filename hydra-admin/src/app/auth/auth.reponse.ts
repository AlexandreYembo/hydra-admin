export interface AuthResponse {
    RefreshToken: string,
    AccessToken: string,
    ExpiresIn: number,
    UserToken: UserToken
}

export interface UserToken {
    Id: string,
    Email: string,
    Claims: Claims[]
}

export interface Claims {
    Value: string,
    Type: string
}