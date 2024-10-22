export type Article = { 
  _id?: string;
  title?: string;
  authors?: string;
  source?: string;
  year_of_publication?: number;
  doi?: string;
  summary?: string;
  status?: 'Pending' | 'Approved' | 'Rejected';
  
  claim: string;   
  evidence: string; 
  rating: string;   
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

  claim: 'not given',   
  evidence: 'not given', 
  rating: '3',  
};
