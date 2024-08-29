import { model, models, Schema } from 'mongoose';

export interface IMessage {
    name: string;
    email: string;
    message: string;
    type: string;
}

const messageSchema = new Schema<IMessage>(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        email: {
            type: String,
            required: true,
            min: 5,
            max: 50
        },
        message: {
            type: String,
            required: true,
            min: 20,
            max: 1000
        },
        type: {
            type: String,
            required: true,
            enum: ['message', 'review'],
            default: 'message'
        }
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
    }
);

const Message = models.Message || model('Message', messageSchema);
export default Message;
