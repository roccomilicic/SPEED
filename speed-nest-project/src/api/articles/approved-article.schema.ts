import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ApprovedArticleDocument = HydratedDocument<ApprovedArticle>;

@Schema({ collection: 'approved' })
export class ApprovedArticle {
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
    default: 'Approved', // Default to 'Approved' in the approved collection
  })
  status: 'Pending' | 'Approved' | 'Rejected';
}

export const ApprovedArticleSchema = SchemaFactory.createForClass(ApprovedArticle);
