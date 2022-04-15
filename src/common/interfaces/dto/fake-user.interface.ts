export interface IFakeUser {
    id: number,
    name: {
        first: string,
        last: string;
    },
    login: {
        username: string;
    },
    registered: {
        age: number;
    },
    dob: {
        age: number;
    },
    username: string,
    problems: number,
    solves: number,
    location: {
        country: string,
        city: string;
    },
    picture: {
        large: string;
    };
}
