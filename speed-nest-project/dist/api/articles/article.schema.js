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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = exports.Article = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Article = class Article {
};
exports.Article = Article;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Article.prototype, "year_of_publication", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "doi", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'not given' }),
    __metadata("design:type", String)
], Article.prototype, "claim", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'not given' }),
    __metadata("design:type", String)
], Article.prototype, "evidence", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: '3' }),
    __metadata("design:type", String)
], Article.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "summary", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    }),
    __metadata("design:type", String)
], Article.prototype, "status", void 0);
exports.Article = Article = __decorate([
    (0, mongoose_1.Schema)()
], Article);
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(Article);
//# sourceMappingURL=article.schema.js.map