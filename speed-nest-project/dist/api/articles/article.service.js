"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pending_article_schema_1 = require("./pending-article.schema");
const approved_article_schema_1 = require("./approved-article.schema");
const rejected_article_schema_1 = require("./rejected-article.schema");
let ArticleService = class ArticleService {
    constructor(pendingArticleModel, approvedArticleModel, rejectedArticleModel) {
        this.pendingArticleModel = pendingArticleModel;
        this.approvedArticleModel = approvedArticleModel;
        this.rejectedArticleModel = rejectedArticleModel;
    }
    test() {
        return 'This is a test method in ArticleService.';
    }
    async findAll() {
        return await this.pendingArticleModel.find().exec();
    }
    async findAllPending() {
        return await this.pendingArticleModel.find().exec();
    }
    async findAllApproved() {
        return await this.approvedArticleModel.find().exec();
    }
    async findAllRejected() {
        return await this.rejectedArticleModel.find().exec();
    }
    async findOne(id) {
        return await this.pendingArticleModel.findById(id).exec();
    }
    async create(createArticleDto) {
        const newArticle = new this.pendingArticleModel(createArticleDto);
        return newArticle.save();
    }
    async update(id, createArticleDto) {
        return await this.pendingArticleModel.findByIdAndUpdate(id, createArticleDto, { new: true }).exec();
    }
    async delete(id) {
        return await this.pendingArticleModel.findByIdAndDelete(id).exec();
    }
    async approveArticle(articleId) {
        try {
            const article = await this.pendingArticleModel.findById(articleId).exec();
            if (article) {
                console.log('Article found in pending:', article);
                await this.pendingArticleModel.findByIdAndDelete(articleId).exec();
                console.log('Article removed from pending');
                const approvedArticle = new this.approvedArticleModel(article.toObject());
                approvedArticle.status = 'Approved';
                await approvedArticle.save();
                console.log('Article saved to approved collection');
            }
            else {
                console.log('Article not found in pending');
            }
        }
        catch (error) {
            console.error('Error during approval process:', error);
        }
    }
    async rejectArticle(articleId) {
        const article = await this.pendingArticleModel.findById(articleId).exec();
        if (article) {
            await this.pendingArticleModel.findByIdAndDelete(articleId).exec();
            const rejectedArticle = new this.rejectedArticleModel(article.toObject());
            rejectedArticle.status = 'Rejected';
            await rejectedArticle.save();
        }
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pending_article_schema_1.PendingArticle.name)),
    __param(1, (0, mongoose_1.InjectModel)(approved_article_schema_1.ApprovedArticle.name)),
    __param(2, (0, mongoose_1.InjectModel)(rejected_article_schema_1.RejectedArticle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ArticleService);
//# sourceMappingURL=article.service.js.map