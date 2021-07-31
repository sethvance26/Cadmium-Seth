const { AuthenticationError } = require("apollo-server-express");
const { User, Event, Category, List } = require("../models");
const { signToken } = require("../utils/auth");

//HIDE
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    events: async (parent) => {
      const params = {};


      // if (name) {
      //   params.name = {
      //     $regex: name,
      //   };
      // }
      // If name refers to event name (title) vs. category name
      // events: async (parent, { category, title }) => {
      //     const params = {};

      //     if (category) {
      //       params.category = category;
      //     }

      //     if (title) {
      //       params.title = {
      //         $regex: title
      //       };
      //     }

      const res = await Event.find().populate("category");
      console.log('hello', res);
      return res
    },
    event: async (parent, { _id }) => {
      return await Event.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "lists.events",
          populate: "category",
        });

        user.lists.sort((a, b) => b.savedDate - a.savedDate);

        return user;
      }

      throw new AuthenticationError(
        "User not logged in. Please log in to your account and try again"
      );
    },
    list: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "lists.events",
          populate: "category",
        });

        return user.lists.id(_id);
      }

      throw new AuthenticationError(
        "User not logged in. Please log in to your account and try again."
      );
    },
    // Is this where we would have stuff to then email, print, or share on social? Or should that be in the corresponding front-end file (Cart.js?).
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const list = new List({ events: args.events });
      const line_items = [];

      const { events } = await list.populate("events").execPopulate();

      for (let i = 0; i < events.length; i++) {
        const event = await stripe.events.create({
          name: event[i].name,
          description: events[i].description,
          images: [`${url}/images/${events[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addList: async (parent, { events }, context) => {
      console.log(context);
      if (context.user) {
        const list = new List({ events });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { lists: list },
        });

        return list;
      }

      throw new AuthenticationError(
        "User not logged in. Please log in to your account and try again."
      );
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError(
        "User not logged in. Please log in to your account and try again."
      );
    },
    // We could use this for removing an event?
    deleteEvent: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Event.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(
          "Incorrect login credentials. Please try again."
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError(
          "Incorrect login credentials. Please try again."
        );
      }

      const token = signToken(user);

      return { token, user };
    },

    // I don't think this is correct, but it's a starting point?
    addEvent: async (parent, {events}, context) => {
      console.log(context);

      if (context.user) {
        const event = new Event({event});

        await User.findByIdAndUpdate(context.user._id, {
          $push: {events: event},
        });

        return event;
      };

      throw new AuthenticationError(
        "User not logged in. Please log in to your account and try again."
      );
    },
  },
};

module.exports = resolvers;