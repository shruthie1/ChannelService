import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ collection: 'activeChannels', versionKey: false, autoIndex: true })  // Specify the collection name here
export class ActiveChannel extends Document {
  @Prop({ required: true, unique: true })
  channelId: string;

  @Prop({ default: false })
  broadcast: boolean;

  @Prop({ default: true })
  canSendMsgs: boolean;

  @Prop({ required: true })
  id: string;

  @Prop({ type: mongoose.Schema.Types.Number, default: 0 })
  participantsCount: number;

  @Prop({ default: false })
  restricted: boolean;

  @Prop({ default: false })
  sendMessages: boolean;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  username: string;

  @Prop({ type: mongoose.Schema.Types.Number, default: 0 })
  wordRestriction: number;

  @Prop({ type: mongoose.Schema.Types.Number, default: 0 })
  dMRestriction: number;

  @Prop({ type: [String], default: [] })
  availableMsgs: string[];

  @Prop({ type: [String], default: [] })
  reactions: string[];

  @Prop({ default: false })
  banned: boolean;

  @Prop({ default: true })
  megagroup: boolean;

  @Prop({ default: false })
  reactRestriction: boolean;
}

export const ActiveChannelSchema = SchemaFactory.createForClass(ActiveChannel);