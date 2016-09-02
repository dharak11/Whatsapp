export interface Chat
{
     _id?: string;
     messages:string;
     date:Date;
     read:boolean;
     chatBetween:ChatBetween
}

export interface ChatBetween{
    _id?:string;
    from:string;
    to:string;
}
