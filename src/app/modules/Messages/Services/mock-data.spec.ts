import { ChatPreview } from "../models/chat-preview";
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

export const chatList: ChatPreview[] = [
   {
      "id":"a6cfb627-810c-49be-837d-b8815937cd4a",
      "image":"https://cdn.fakercloud.com/avatars/sydlawrence_128.jpg",
      "title":"Dr. Toni Cronin",
      "lastMessage":"Hic exercitationem odit quod rem repudiandae laborum enim laudantium.",
      "contactId":"1ff2c8f3-ad5a-5f15-a003-d9be2b2de223"
   },
   {
      "id":"0314d7eb-82c1-4337-a46f-739adfaf58fb",
      "image":"https://cdn.fakercloud.com/avatars/souperphly_128.jpg",
      "title":"Guy Sauer",
      "lastMessage":"Sed molestiae qui quasi.",
      "contactId":"b372ea1d-cfe4-466c-989d-8b165bb8870a"
   },
   {
      "id":"61acfcf5-f297-43e3-a1b2-b57123632add",
      "image":"https://cdn.fakercloud.com/avatars/n3dmax_128.jpg",
      "title":"Kelli Ledner",
      "lastMessage":"Iure quod iusto blanditiis sunt.",
      "contactId":"7b3539ce-d92f-4b88-9dca-6bc8ebf118e4"
   },
   {
      "id":"0549510c-8bd2-4076-b901-7801de1c5b9b",
      "image":"https://cdn.fakercloud.com/avatars/osvaldas_128.jpg",
      "title":"Melanie Champlin",
      "lastMessage":"Aliquam ea voluptas aut quae.",
      "contactId":"de47df57-b869-4b35-91f2-5fac162d421d"
   },
   {
      "id":"8eac0163-11bd-4db9-91a1-bc62b7ce4fb0",
      "image":"https://cdn.fakercloud.com/avatars/byryan_128.jpg",
      "title":"Timmy Quitzon",
      "lastMessage":"Dolorem corporis in unde voluptas nesciunt.",
      "contactId":"146926b1-8055-45fd-92bf-ceb2066183e0"
   }
];