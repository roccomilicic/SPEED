import { HydratedDocument } from 'mongoose';
export type PendingArticleDocument = HydratedDocument<PendingArticle>;
export declare class PendingArticle {
    title: string;
    authors: string;
    source: string;
    year_of_publication: number;
    doi: string;
    summary: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}
export declare const PendingArticleSchema: import("mongoose").Schema<PendingArticle, import("mongoose").Model<PendingArticle, any, any, any, import("mongoose").Document<unknown, any, PendingArticle> & PendingArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PendingArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PendingArticle>> & import("mongoose").FlatRecord<PendingArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
