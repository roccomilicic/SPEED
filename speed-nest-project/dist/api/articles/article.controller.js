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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("./dto/create-article.dto");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getPendingArticles() {
        return this.articleService.findAllPending();
    }
    async getApprovedArticles() {
        return this.articleService.findAllApproved();
    }
    async getRejectedArticles() {
        return this.articleService.findAllRejected();
    }
    async createArticle(createArticleDto) {
        return await this.articleService.create(createArticleDto);
    }
    async approveArticle(articleId) {
        try {
            console.log('Approving article:', articleId);
            await this.articleService.approveArticle(articleId);
            return { message: 'Article approved and moved to approved collection' };
        }
        catch (error) {
            console.error('Error approving article:', error);
            throw new common_1.HttpException('Article not found or approval failed', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async rejectArticle(articleId) {
        try {
            console.log('Rejecting article:', articleId);
            await this.articleService.rejectArticle(articleId);
            return { message: 'Article rejected and moved to rejected collection' };
        }
        catch (error) {
            console.error('Error rejecting article:', error);
            throw new common_1.HttpException('Article not found or rejection failed', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ArticleController = ArticleController;
__decorate([
    (0, common_1.Get)('/pending'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getPendingArticles", null);
__decorate([
    (0, common_1.Get)('/approved'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getApprovedArticles", null);
__decorate([
    (0, common_1.Get)('/rejected'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getRejectedArticles", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Put)(':id/approve'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "approveArticle", null);
__decorate([
    (0, common_1.Put)(':id/reject'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "rejectArticle", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('api/articles'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map