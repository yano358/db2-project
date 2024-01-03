import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createLuggageApiV1LuggagePost: build.mutation<
      CreateLuggageApiV1LuggagePostApiResponse,
      CreateLuggageApiV1LuggagePostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/luggage`,
        method: "POST",
        body: queryArg.luggageCreate,
      }),
    }),
    deleteLuggageApiV1LuggageLuggageIdDelete: build.mutation<
      DeleteLuggageApiV1LuggageLuggageIdDeleteApiResponse,
      DeleteLuggageApiV1LuggageLuggageIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/luggage/${queryArg.luggageId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type CreateLuggageApiV1LuggagePostApiResponse =
  /** status 200 Successful Response */ Luggage;
export type CreateLuggageApiV1LuggagePostApiArg = {
  luggageCreate: LuggageCreate;
};
export type DeleteLuggageApiV1LuggageLuggageIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteLuggageApiV1LuggageLuggageIdDeleteApiArg = {
  luggageId: number;
};
export type Luggage = {
  id?: number;
  luggage_type?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type LuggageCreate = {
  luggage_type: string;
};
export const {
  useCreateLuggageApiV1LuggagePostMutation,
  useDeleteLuggageApiV1LuggageLuggageIdDeleteMutation,
} = injectedRtkApi;
