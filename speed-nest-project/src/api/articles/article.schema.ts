import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
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

  @Prop({ required: true, default: 'not given' })
  claim: string;

  @Prop({ required: true, default: 'not given' })
  evidence: string;

  @Prop({ required: true, default: '3' })
  rating: string;

  @Prop()
  summary: string;

  @Prop({ 
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending'
  })
  status: 'Pending' | 'Approved' | 'Rejected';  



}

export const ArticleSchema = SchemaFactory.createForClass(Article);