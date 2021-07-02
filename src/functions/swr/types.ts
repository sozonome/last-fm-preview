export type SWRHookResp<DataType, ErrorType = boolean> = {
  isLoading: boolean;
  data?: DataType;
  isError: ErrorType;
};
