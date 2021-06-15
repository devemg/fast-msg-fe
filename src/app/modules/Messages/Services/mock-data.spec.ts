import { Contact } from "../models/contact";
import { UserProfile } from "../models/user";

export const dummyContactList: Contact[] = [
    {
       "_id":"1ff2c8f3-ad5a-5f15-a003-d9be2b2de223",
       "image":"//www.gravatar.com/avatar/c3f72afeceae817c75f3ff62cff3654b",
       "name":"Verna Ruiz",
       "email":"beof@fastmessages.com"
    },
    {
       "_id":"a43ff970-b65e-5b1e-a2e0-1c5d70fc92fe",
       "image":"//www.gravatar.com/avatar/855ff36e47e4d158aeece6029f844bd3",
       "name":"Roger Guzman",
       "email":"eg@fastmessages.com"
    },
    {
       "_id":"b35aa9bf-411b-576b-b1af-3a1a2bbc153f",
       "image":"//www.gravatar.com/avatar/77f298d4c241a70d55e60bc089b4a97b",
       "name":"Maud Wilkerson",
       "email":"se@fastmessages.com"
    },
    {
       "_id":"73f365a4-70a1-5826-a2b1-dca157fa2458",
       "image":"//www.gravatar.com/avatar/d910226005e7dbc7c9e254e9ff5769ba",
       "name":"Lucy Burton",
       "email":"osaicekij@fastmessages.com"
    },
    {
       "_id":"c2f64e21-abe8-5737-9392-5604e7378e3b",
       "image":"//www.gravatar.com/avatar/4a97bf21cf6200f6a4b4235ab3e92356",
       "name":"Isabelle Mason",
       "email":"omtal@fastmessages.com"
    }
 ];


export const userProfile: UserProfile = {
   "_id":"1ff2c8f3-ad5a-5f15-a003-d9be2b2de223",
   "image":"//www.gravatar.com/avatar/c3f72afeceae817c75f3ff62cff3654b",
   "name":"Verna Ruiz",
   "email":"beof@fastmessages.com",
   "password":"123456789"
};