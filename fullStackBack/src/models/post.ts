import { Schema, model, Document } from 'mongoose'

const postSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    postContent: {
        type: String,
        required: true,
        min: 4,
    }
});

export default model('Post', postSchema);