import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PendingArticleDocument = HydratedDocument<PendingArticle>;

@Schema({ collection: 'pending' })
export class PendingArticle {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string;

  @Prop({ required: true })
  source: string;

  @Prop({ required: true })
  year_of_publication: number;

  @Prop({ required: true })
  doi: string;

  @Prop()
  summary: string;

  @Prop({
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  })
  status: 'Pending' | 'Approved' | 'Rejected';
}

export const PendingArticleSchema = SchemaFactory.createForClass(PendingArticle);
