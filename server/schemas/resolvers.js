const { User } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
        }
    },
    Mutation: {
        loginUser: async(parent, { email, password }) => {
            const user = await User.findOne({ email });
            const correctPass = await User.isCorrectPassword(password);
            const token = signToken(user);

            if(!user) {
                throw AuthenticationError
            }
            if (!correctPass) {
                throw AuthenticationError
            }

            return { token, user };
        },
        addUser: async(parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, profile };
        },
        saveBook: async(parent, { userId, book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    { $addToSet: { savedBooks: book }},
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
        },
        removeBook: async(parent, { book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: book }},
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
    }
};

module.exports = resolvers;
