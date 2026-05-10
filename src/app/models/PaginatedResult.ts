export interface PaginatedResult<T> {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  data: T[];
}