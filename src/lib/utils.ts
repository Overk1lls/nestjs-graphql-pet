import axios from 'axios';
import { ICreatedUser } from '../common/interfaces/created-user.interface';
import { IFakeUser } from '../common/interfaces/dto/fake-user.interface';
import { ErrorCode, ServerError } from '../errors/server-error';

type RandomUserServiceType = {
    results: IFakeUser[];
};

export const createFakeUsers = async (num: number) => {
    const url = `https://randomuser.me/api?results=${num}`;

    const randomUserResult = await axios(url);
    if (randomUserResult.status >= 400) {
        throw new ServerError(ErrorCode.EXTERNAL_SERVICE);
    }
    const users = (randomUserResult.data as RandomUserServiceType).results
        .map((user, index) => ({
            id: index,
            name: `${user.name.first} ${user.name.last}`,
            username: user.login.username,
            problems: user.registered.age,
            solves: user.dob.age,
            location: {
                country: user.location.country,
                city: user.location.city
            },
            avatar: user.picture.large
        })) as ICreatedUser[];

    return users;
};
