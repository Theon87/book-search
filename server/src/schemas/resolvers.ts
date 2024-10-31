import User from '../models/User.js';

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    bookCount: number;
}

interface userArgs {
    _id: string;
}

const resolvers = {
    Query: {
        getSingleUser: async (_parent: any, { _id }: userArgs): Promise<User | null> => {
            return await User.findOne({ _id });
        },
    },
};

export default resolvers;