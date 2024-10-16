import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PendingArticle, PendingArticleDocument } from './pending-article.schema';
import { ApprovedArticle, ApprovedArticleDocument } from './approved-article.schema';
import { RejectedArticle, RejectedArticleDocument } from './rejected-article.schema';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(PendingArticle.name) private pendingArticleModel: Model<PendingArticleDocument>,
    @InjectModel(ApprovedArticle.name) private approvedArticleModel: Model<ApprovedArticleDocument>,
    @InjectModel(RejectedArticle.name) private rejectedArticleModel: Model<RejectedArticleDocument>,
  ) {}

  // Test function
  test(): string {
    return 'This is a test method in ArticleService.';
  }

  // Find all pending articles
  async findAll(): Promise<PendingArticle[]> {
    return await this.pendingArticleModel.find().exec();
  }

  async findAllPending(): Promise<PendingArticle[]> {
    return await this.pendingArticleModel.find().exec();
  }
  
  async findAllApproved(): Promise<ApprovedArticle[]> {
    return await this.approvedArticleModel.find().exec();
  }
  
  async findAllRejected(): Promise<RejectedArticle[]> {
    return await this.rejectedArticleModel.find().exec();
  }
  

  async findOne(id: string): Promise<PendingArticle> {
    return await this.pendingArticleModel.findById(id).exec();
  }

  async create(createArticleDto: CreateArticleDto): Promise<PendingArticle> {
    const newArticle = new this.pendingArticleModel(createArticleDto);
    return newArticle.save();
  }

  async update(id: string, createArticleDto: CreateArticleDto): Promise<PendingArticle> {
    return await this.pendingArticleModel.findByIdAndUpdate(id, createArticleDto, { new: true }).exec();
  }

  async delete(id: string): Promise<PendingArticle> {
    return await this.pendingArticleModel.findByIdAndDelete(id).exec();
  }

  async approveArticle(articleId: string): Promise<void> {
    try {
      const article = await this.pendingArticleModel.findById(articleId).exec();
      if (article) {
        console.log('Article found in pending:', article);
  
        // Remove from 'pending' collection
        await this.pendingArticleModel.findByIdAndDelete(articleId).exec();
        console.log('Article removed from pending');
  
        // Add to 'approved' collection
        const approvedArticle = new this.approvedArticleModel(article.toObject());
        approvedArticle.status = 'Approved';
        await approvedArticle.save();
        console.log('Article saved to approved collection');
      } else {
        console.log('Article not found in pending');
      }
    } catch (error) {
      console.error('Error during approval process:', error);
    }
  }
  
  

  async rejectArticle(articleId: string): Promise<void> {
    const article = await this.pendingArticleModel.findById(articleId).exec();
    if (article) {
      await this.pendingArticleModel.findByIdAndDelete(articleId).exec();
      const rejectedArticle = new this.rejectedArticleModel(article.toObject());
      rejectedArticle.status = 'Rejected';
      await rejectedArticle.save();
    }
  }
}
