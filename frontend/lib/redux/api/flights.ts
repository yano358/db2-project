import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllFlightsApiV1FlightsGet: build.query<
      GetAllFlightsApiV1FlightsGetApiResponse,
      GetAllFlightsApiV1FlightsGetApiArg
    >({
      query: () => ({ url: `/api/v1/flights` }),
    }),
    createFlightApiV1FlightsPost: build.mutation<
      CreateFlightApiV1FlightsPostApiResponse,
      CreateFlightApiV1FlightsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/flights`,
        method: "POST",
        body: queryArg.flightsCreate,
      }),
    }),
    deleteFlightApiV1FlightsFlightIdDelete: build.mutation<
      DeleteFlightApiV1FlightsFlightIdDeleteApiResponse,
      DeleteFlightApiV1FlightsFlightIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/flights/${queryArg.flightId}/`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetAllFlightsApiV1FlightsGetApiResponse =
  /** status 200 Successful Response */ Flights[];
export type GetAllFlightsApiV1FlightsGetApiArg = void;
export type CreateFlightApiV1FlightsPostApiResponse =
  /** status 200 Successful Response */ Flights;
export type CreateFlightApiV1FlightsPostApiArg = {
  flightsCreate: FlightsCreate;
};
export type DeleteFlightApiV1FlightsFlightIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteFlightApiV1FlightsFlightIdDeleteApiArg = {
  flightId: number;
};
export type Flights = {
  id?: number;
  plane_id?: number;
  start_airport_id?: number;
  destination_airport_id?: number;
  price?: number;
  departure_time?: string;
  arrival_time?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type FlightsCreate = {
  plane_id: number;
  start_airport_id: number;
  destination_airport_id: number;
  price: number;
  departure_time: string;
  arrival_time: string;
};
export const {
  useGetAllFlightsApiV1FlightsGetQuery,
  useLazyGetAllFlightsApiV1FlightsGetQuery,
  useCreateFlightApiV1FlightsPostMutation,
  useDeleteFlightApiV1FlightsFlightIdDeleteMutation,
} = injectedRtkApi;
