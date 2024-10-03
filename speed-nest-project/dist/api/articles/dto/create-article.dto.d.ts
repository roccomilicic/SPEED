export declare class CreateArticleDto {
    title: string;
    authors: string;
    source: string;
    year_of_publication: number;
    doi: string;
    summary: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}
