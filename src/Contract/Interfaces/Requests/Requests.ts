export type TSearchQuery = { lookupText: string; searchAllFields: boolean; fields?: never } | { lookupText: string; fields: string[]; searchAllFields?: never };

export interface IQueryParams {
  pagination?: {
    page: number;
    pageSize: number;
  };
  selectFields?: string[];
  search?: TSearchQuery;
}
