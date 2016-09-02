import {Mongo} from 'meteor/mongo';

import {UserCredentials} from '../interfaces/userCredentials.interface'; 

export const Credentials = new Mongo.Collection<UserCredentials>('credentials');
