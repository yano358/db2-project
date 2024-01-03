import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createAirportApiV1AirportsPost: build.mutation<
      CreateAirportApiV1AirportsPostApiResponse,
      CreateAirportApiV1AirportsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/airports`,
        method: "POST",
        body: queryArg.airportsCreate,
      }),
    }),
    deleteAirportApiV1AirportsAirportIdDelete: build.mutation<
      DeleteAirportApiV1AirportsAirportIdDeleteApiResponse,
      DeleteAirportApiV1AirportsAirportIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/airports/${queryArg.airportId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type CreateAirportApiV1AirportsPostApiResponse =
  /** status 200 Successful Response */ Airports;
export type CreateAirportApiV1AirportsPostApiArg = {
  airportsCreate: AirportsCreate;
};
export type DeleteAirportApiV1AirportsAirportIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAirportApiV1AirportsAirportIdDeleteApiArg = {
  airportId: number;
};
export type Airports = {
  id?: number;
  name?: string;
  city?: string;
  country?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type AirportsCreate = {
  name: string;
  city: string;
  country: string;
};
export const {
  useCreateAirportApiV1AirportsPostMutation,
  useDeleteAirportApiV1AirportsAirportIdDeleteMutation,
} = injectedRtkApi;
