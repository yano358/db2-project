import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    loginAccessTokenApiV1LoginAccessTokenPost: build.mutation<
      LoginAccessTokenApiV1LoginAccessTokenPostApiResponse,
      LoginAccessTokenApiV1LoginAccessTokenPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/login/access-token`,
        method: "POST",
        body: queryArg.bodyLoginAccessTokenApiV1LoginAccessTokenPost,
      }),
    }),
    testTokenApiV1LoginLoginTestTokenGet: build.query<
      TestTokenApiV1LoginLoginTestTokenGetApiResponse,
      TestTokenApiV1LoginLoginTestTokenGetApiArg
    >({
      query: () => ({ url: `/api/v1/login/login/test-token` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type LoginAccessTokenApiV1LoginAccessTokenPostApiResponse =
  /** status 200 Successful Response */ Token;
export type LoginAccessTokenApiV1LoginAccessTokenPostApiArg = {
  bodyLoginAccessTokenApiV1LoginAccessTokenPost: BodyLoginAccessTokenApiV1LoginAccessTokenPost;
};
export type TestTokenApiV1LoginLoginTestTokenGetApiResponse =
  /** status 200 Successful Response */ User;
export type TestTokenApiV1LoginLoginTestTokenGetApiArg = void;
export type Token = {
  access_token: string;
  token_type: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type BodyLoginAccessTokenApiV1LoginAccessTokenPost = {
  grant_type?: string;
  username: string;
  password: string;
  scope?: string;
  client_id?: string;
  client_secret?: string;
};
export type User = {
  id?: number;
  username: string;
  email: string;
  hashed_password: string;
  is_superuser?: boolean;
  created_date?: string;
  updated_date?: string;
};
export const {
  useLoginAccessTokenApiV1LoginAccessTokenPostMutation,
  useTestTokenApiV1LoginLoginTestTokenGetQuery,
  useLazyTestTokenApiV1LoginLoginTestTokenGetQuery,
} = injectedRtkApi;
