import { Article } from './article.schema';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticleService {
    private articleModel;
    constructor(articleModel: Model<Article>);
    test(): string;
    findAll(): Promise<Article[]>;
    findOne(id: string): Promise<Article>;
    create(createArticleDto: CreateArticleDto): Promise<Article>;
    update(id: string, createArticleDto: CreateArticleDto): Promise<Article>;
    delete(id: string): Promise<Article>;
}
