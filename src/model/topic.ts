import { Document, Schema, model } from 'mongoose';

export interface TopicDocument extends Document {
  id: string;
  title: string;
  owner: string;
  create_time?: string;
}

const TopicSchema = new Schema<TopicDocument>({
  id: String,
  title: String,
  owner: String,
  create_time: String
});

export default model<TopicDocument>('Topic', TopicSchema);
