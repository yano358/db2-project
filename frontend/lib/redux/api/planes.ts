import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    readAllPlanesApiV1PlanesGet: build.query<
      ReadAllPlanesApiV1PlanesGetApiResponse,
      ReadAllPlanesApiV1PlanesGetApiArg
    >({
      query: () => ({ url: `/api/v1/planes` }),
    }),
    createPlanesApiV1PlanesPost: build.mutation<
      CreatePlanesApiV1PlanesPostApiResponse,
      CreatePlanesApiV1PlanesPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/planes`,
        method: "POST",
        body: queryArg.planesCreate,
      }),
    }),
    deletePlanesApiV1PlanesPlanesIdDelete: build.mutation<
      DeletePlanesApiV1PlanesPlanesIdDeleteApiResponse,
      DeletePlanesApiV1PlanesPlanesIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/planes/${queryArg.planesId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type ReadAllPlanesApiV1PlanesGetApiResponse =
  /** status 200 Successful Response */ Planes[];
export type ReadAllPlanesApiV1PlanesGetApiArg = void;
export type CreatePlanesApiV1PlanesPostApiResponse =
  /** status 200 Successful Response */ Planes;
export type CreatePlanesApiV1PlanesPostApiArg = {
  planesCreate: PlanesCreate;
};
export type DeletePlanesApiV1PlanesPlanesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePlanesApiV1PlanesPlanesIdDeleteApiArg = {
  planesId: number;
};
export type Planes = {
  id?: number;
  model?: string;
  airline?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type PlanesCreate = {
  model: string;
  airline: string;
};
export const {
  useReadAllPlanesApiV1PlanesGetQuery,
  useLazyReadAllPlanesApiV1PlanesGetQuery,
  useCreatePlanesApiV1PlanesPostMutation,
  useDeletePlanesApiV1PlanesPlanesIdDeleteMutation,
} = injectedRtkApi;
