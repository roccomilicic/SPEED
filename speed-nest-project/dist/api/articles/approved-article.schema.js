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
exports.ApprovedArticleSchema = exports.ApprovedArticle = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ApprovedArticle = class ApprovedArticle {
};
exports.ApprovedArticle = ApprovedArticle;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ApprovedArticle.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ApprovedArticle.prototype, "authors", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ApprovedArticle.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ApprovedArticle.prototype, "year_of_publication", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ApprovedArticle.prototype, "doi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ApprovedArticle.prototype, "summary", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Approved',
    }),
    __metadata("design:type", String)
], ApprovedArticle.prototype, "status", void 0);
exports.ApprovedArticle = ApprovedArticle = __decorate([
    (0, mongoose_1.Schema)({ collection: 'approved' })
], ApprovedArticle);
exports.ApprovedArticleSchema = mongoose_1.SchemaFactory.createForClass(ApprovedArticle);
//# sourceMappingURL=approved-article.schema.js.map