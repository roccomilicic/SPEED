import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticlesController {
    createArticle(createArticleDto: CreateArticleDto): {
        message: string;
        data: CreateArticleDto;
    };
}
