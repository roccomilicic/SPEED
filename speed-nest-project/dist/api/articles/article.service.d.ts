import { Model } from 'mongoose';
import { PendingArticle, PendingArticleDocument } from './pending-article.schema';
import { ApprovedArticle, ApprovedArticleDocument } from './approved-article.schema';
import { RejectedArticle, RejectedArticleDocument } from './rejected-article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticleService {
    private pendingArticleModel;
    private approvedArticleModel;
    private rejectedArticleModel;
    constructor(pendingArticleModel: Model<PendingArticleDocument>, approvedArticleModel: Model<ApprovedArticleDocument>, rejectedArticleModel: Model<RejectedArticleDocument>);
    test(): string;
    findAll(): Promise<PendingArticle[]>;
    findAllPending(): Promise<PendingArticle[]>;
    findAllApproved(): Promise<ApprovedArticle[]>;
    findAllRejected(): Promise<RejectedArticle[]>;
    findOne(id: string): Promise<PendingArticle>;
    create(createArticleDto: CreateArticleDto): Promise<PendingArticle>;
    update(id: string, createArticleDto: CreateArticleDto): Promise<PendingArticle>;
    delete(id: string): Promise<PendingArticle>;
    approveArticle(articleId: string): Promise<void>;
    rejectArticle(articleId: string): Promise<void>;
}
