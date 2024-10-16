import { HydratedDocument } from 'mongoose';
export type ApprovedArticleDocument = HydratedDocument<ApprovedArticle>;
export declare class ApprovedArticle {
    title: string;
    authors: string;
    source: string;
    year_of_publication: number;
    doi: string;
    summary: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}
export declare const ApprovedArticleSchema: import("mongoose").Schema<ApprovedArticle, import("mongoose").Model<ApprovedArticle, any, any, any, import("mongoose").Document<unknown, any, ApprovedArticle> & ApprovedArticle & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ApprovedArticle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ApprovedArticle>> & import("mongoose").FlatRecord<ApprovedArticle> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
