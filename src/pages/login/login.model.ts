export class credentialModel {
    username: string;
    password: string;
}

export class AuthorizeModel {
    displayName: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    profileImageURL: string;
    roles: Array<string>;
}