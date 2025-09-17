export interface ApiResponse<T> {
  success: boolean;
  code: number;
  statusCode: string;
  message: string;
  data: T;
}