import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { ArticleModule } from './../src/api/articles/articles.module';
import { CreateArticleDto } from './../src/api/articles/dto/create-article.dto';

describe('ArticleController (e2e)', () => {
  let app: INestApplication;
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        ArticleModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    if (mongod) {
      await mongod.stop();
    }
    await app.close();
  });

  it('/api/articles/test (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/articles/test')
      .expect(200)
      .expect('article route testing');
  });

  it('/api/articles (POST)', () => {
    const newArticle: CreateArticleDto = {
      title: 'Test Article',
      authors: 'John Doe',
      source: 'Test Source',
      year_of_publication: 2023,
      doi: '10.1000/testdoi',
      summary: 'This is a test summary',
      status: 'Pending',
    };
    return request(app.getHttpServer())
      .post('/api/articles')
      .send(newArticle)
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('_id');
        expect(response.body.title).toBe(newArticle.title);
        expect(response.body.authors).toBe(newArticle.authors);
        expect(response.body.source).toBe(newArticle.source);
        expect(response.body.year_of_publication).toBe(newArticle.year_of_publication);
        expect(response.body.doi).toBe(newArticle.doi);
        expect(response.body.summary).toBe(newArticle.summary);
        expect(response.body.status).toBe(newArticle.status);
      });
  });

  it('/api/articles (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/articles')
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/api/articles/:id (GET)', async () => {
    const newArticle: CreateArticleDto = {
      title: 'Another Test Article',
      authors: 'Jane Doe',
      source: 'Another Test Source',
      year_of_publication: 2023,
      doi: '10.1000/anotherdoi',
      summary: 'This is another test summary',
      status: 'Approved',
    };
    const createdArticle = await request(app.getHttpServer())
      .post('/api/articles')
      .send(newArticle)
      .expect(201);

    console.log('Created article response:', createdArticle.body);

    return request(app.getHttpServer())
      .get(`/api/articles/${createdArticle.body._id}`)
      .expect(200)
      .then((response) => {
        expect(response.body.title).toBe(newArticle.title);
        expect(response.body.authors).toBe(newArticle.authors);
        expect(response.body.source).toBe(newArticle.source);
        expect(response.body.year_of_publication).toBe(newArticle.year_of_publication);
        expect(response.body.doi).toBe(newArticle.doi);
        expect(response.body.summary).toBe(newArticle.summary);
        expect(response.body.status).toBe(newArticle.status);
      });
  });

  it('/api/articles/:id (PUT)', async () => {
    const newArticle: CreateArticleDto = {
      title: 'Update Test Article',
      authors: 'John Smith',
      source: 'Update Test Source',
      year_of_publication: 2023,
      doi: '10.1000/updatedoi',
      summary: 'This is an article to be updated',
      status: 'Pending',
    };
    const createdArticle = await request(app.getHttpServer())
      .post('/api/articles')
      .send(newArticle)
      .expect(201);

    const updatedArticle: CreateArticleDto = {
      title: 'Updated Title',
      authors: 'John Smith',
      source: 'Updated Source',
      year_of_publication: 2024,
      doi: '10.1000/updateddoi',
      summary: 'Updated summary',
      status: 'Approved',
    };
    return request(app.getHttpServer())
      .put(`/api/articles/${createdArticle.body._id}`)
      .send(updatedArticle)
      .expect(200)
      .then((response) => {
        expect(response.body.title).toBe(updatedArticle.title);
        expect(response.body.authors).toBe(updatedArticle.authors);
        expect(response.body.source).toBe(updatedArticle.source);
        expect(response.body.year_of_publication).toBe(updatedArticle.year_of_publication);
        expect(response.body.doi).toBe(updatedArticle.doi);
        expect(response.body.summary).toBe(updatedArticle.summary);
        expect(response.body.status).toBe(updatedArticle.status);
      });
  });

  it('/api/articles/:id (DELETE)', async () => {
    const newArticle: CreateArticleDto = {
      title: 'Delete Test Article',
      authors: 'Jane Smith',
      source: 'Delete Test Source',
      year_of_publication: 2023,
      doi: '10.1000/deletedoi',
      summary: 'This article will be deleted',
      status: 'Rejected',
    };
    const createdArticle = await request(app.getHttpServer())
      .post('/api/articles')
      .send(newArticle)
      .expect(201);

    return request(app.getHttpServer())
      .delete(`/api/articles/${createdArticle.body._id}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('_id', createdArticle.body._id);
      });
  });
});