export type Article = {
  _id?: string;
  title?: string;
  authors?: string;
  source?: string;
  year_of_publication?: number;
  doi?: string;
  summary?: string;
  status?: 'Pending' | 'Approved' | 'Rejected';
};

export const DefaultEmptyArticle: Article = {
  _id: undefined,
  title: '',
  authors: '',
  source: '',
  year_of_publication: undefined,
  doi: '',
  summary: '',
  status: 'Pending', 
};
