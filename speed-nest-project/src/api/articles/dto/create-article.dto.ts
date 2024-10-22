export class CreateArticleDto {
  title: string;
  authors: string;
  source: string;
  year_of_publication: number;
  doi: string;
  claim: string;   
  evidence: string; 
  rating: string;   
  summary: string;
  status: 'Pending' | 'Approved' | 'Rejected'; 


}
