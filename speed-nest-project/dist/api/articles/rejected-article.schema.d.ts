import { HydratedDocument } from 'mongoose';
export type RejectedArticleDocument = HydratedDocument<RejectedArticle>;
export declare class RejectedArticle {
    title: string;
    authors: string;
    source: string;
    year_of_publication: number;
    doi: string;
    summary: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}
export declare const RejectedArticleSchema: import("mongoose").Schema<RejectedArticle, import("mongoose").Model<RejectedArticle, any, any, any, import("mongoose").Document<unknown, any, RejectedArticle> & RejectedArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RejectedArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RejectedArticle>> & import("mongoose").FlatRecord<RejectedArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
