import {Mongo} from 'meteor/mongo';
import { Chat , ChatBetween} from '../interfaces/messages.interface'; 
export const Chats = new Mongo.Collection<Chat>('chats');
export const ChatBetweenUsers = new Mongo.Collection<ChatBetween>('chatbetweensers');
function loggedIn() {
    return !!Meteor.user();
}

Chats.allow({
    insert: loggedIn,
    remove: loggedIn,
    update: loggedIn
});

ChatBetweenUsers.allow({
    insert: loggedIn,
    remove: loggedIn,
    update: loggedIn
});