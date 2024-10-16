"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const article_controller_1 = require("./article.controller");
const article_service_1 = require("./article.service");
const pending_article_schema_1 = require("./pending-article.schema");
const approved_article_schema_1 = require("./approved-article.schema");
const rejected_article_schema_1 = require("./rejected-article.schema");
let ArticleModule = class ArticleModule {
};
exports.ArticleModule = ArticleModule;
exports.ArticleModule = ArticleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: pending_article_schema_1.PendingArticle.name, schema: pending_article_schema_1.PendingArticleSchema },
                { name: approved_article_schema_1.ApprovedArticle.name, schema: approved_article_schema_1.ApprovedArticleSchema },
                { name: rejected_article_schema_1.RejectedArticle.name, schema: rejected_article_schema_1.RejectedArticleSchema },
            ]),
        ],
        controllers: [article_controller_1.ArticleController],
        providers: [article_service_1.ArticleService],
    })
], ArticleModule);
//# sourceMappingURL=articles.module.js.map