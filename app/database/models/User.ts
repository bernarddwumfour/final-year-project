import { model, models, Schema } from 'mongoose';  
  
export interface Iuser {  
    firstname: string;  
    surname: string;  
    email: string;  
    password: string;  
}  
const userSchema = new Schema<Iuser>(  
    {  
        firstname: {
          type: String,
          required: true,
          min : 3,
          max : 20
        },  
        surname: {
          type: String,
          required: true,
          min : 3,
          max : 20
        },  
        email: {
          type: String,
          required: true,
          min : 3,
          max : 20
        },  
        password: {
          type: String,
          required: true,
          min : 3,
          max : 20
        },   
    },  
    {  
        timestamps: true,  
        toJSON: {  
            versionKey: false,  
            virtuals: true,  
            transform: (_, ret) => {  
                delete ret._id;  
            },  
        },  
    },  
);  
const user = models.user || model('user', userSchema);  
export default user;