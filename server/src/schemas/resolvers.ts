import { signToken, AuthenticationError } from '../utils/auth.js';
import User from '../models/User.js';

interface User {
    username: string;
    email: string;
    password: string;
    bookCount: number;
}

interface userArgs {
    _id: string;
}

interface AddUserArgs {
    username: string;
    email: string;
    password: string;
}

const resolvers = {
    Query: {
        User: async (_parent: any, { _id }: userArgs): Promise<User | null> => {
            return await User.findOne({ _id });
        },
    },
    Mutation: {
        addUser: async (_parent: any, { username, email, password }: AddUserArgs): Promise<{ token: string; user: User }> => {
            const user = await User.create({ username, email, password });
            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        login: async (_parent: any, { email, password }: { email: string; password: string }): Promise<{ token: string; user: User }> => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user.username, user.email, user.password);
            return { token, user };
        },  
    },
};

export default resolvers;