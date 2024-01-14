import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createApiV1TicketsPost: build.mutation<
      CreateApiV1TicketsPostApiResponse,
      CreateApiV1TicketsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/tickets`,
        method: "POST",
        body: queryArg.ticketsCreate,
      }),
    }),
    getAllApiV1TicketsAllGet: build.query<
      GetAllApiV1TicketsAllGetApiResponse,
      GetAllApiV1TicketsAllGetApiArg
    >({
      query: () => ({ url: `/api/v1/tickets/all` }),
    }),
    getForClientApiV1TicketscustomresponseGet: build.query<
      GetForClientApiV1TicketscustomresponseGetApiResponse,
      GetForClientApiV1TicketscustomresponseGetApiArg
    >({
      query: () => ({ url: `/api/v1/ticketscustomresponse` }),
    }),
    deleteApiV1TicketsIdDelete: build.mutation<
      DeleteApiV1TicketsIdDeleteApiResponse,
      DeleteApiV1TicketsIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/tickets/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getFilteredTicketsApiV1TicketsgetFilteredTicketsGet: build.query<
      GetFilteredTicketsApiV1TicketsgetFilteredTicketsGetApiResponse,
      GetFilteredTicketsApiV1TicketsgetFilteredTicketsGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/ticketsgetFilteredTickets`,
        params: {
          flight_id: queryArg.flightId,
          user_id: queryArg.userId,
          luggage_id: queryArg.luggageId,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type CreateApiV1TicketsPostApiResponse =
  /** status 200 Successful Response */ Tickets;
export type CreateApiV1TicketsPostApiArg = {
  ticketsCreate: TicketsCreate;
};
export type GetAllApiV1TicketsAllGetApiResponse =
  /** status 200 Successful Response */ Tickets[];
export type GetAllApiV1TicketsAllGetApiArg = void;
export type GetForClientApiV1TicketscustomresponseGetApiResponse =
  /** status 200 Successful Response */ CustomTicketResponse[];
export type GetForClientApiV1TicketscustomresponseGetApiArg = void;
export type DeleteApiV1TicketsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteApiV1TicketsIdDeleteApiArg = {
  id: number;
};
export type GetFilteredTicketsApiV1TicketsgetFilteredTicketsGetApiResponse =
  /** status 200 Successful Response */ CustomTicketResponse[];
export type GetFilteredTicketsApiV1TicketsgetFilteredTicketsGetApiArg = {
  flightId?: number;
  userId?: number;
  luggageId?: number;
};
export type Tickets = {
  id?: number;
  client_id?: number;
  luggage_id?: number;
  flight_id?: number;
  seat_id?: number;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type TicketsCreate = {
  client_id: number;
  luggage_id: number;
  flight_id: number;
  seat_id: number;
};
export type Luggage = {
  id?: number;
  luggage_type?: string;
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
export type Seats = {
  id?: number;
  plane_id?: number;
  taken_status?: boolean;
  class_type?: string;
};
export type Clients = {
  id?: number;
  user_id?: number;
  first_name?: string;
  last_name?: string;
  country?: string;
  city?: string;
  address?: string;
  postal_code?: string;
};
export type Planes = {
  id?: number;
  model?: string;
  airline?: string;
};
export type Airports = {
  id?: number;
  name?: string;
  city?: string;
  country?: string;
};
export type CustomTicketResponse = {
  luggage_details: Luggage;
  flight_details: Flights;
  seat_details: Seats;
  client_details: Clients;
  plane_details: Planes;
  start_airport_details: Airports;
  destination_airport_details: Airports;
};
export const {
  useCreateApiV1TicketsPostMutation,
  useGetAllApiV1TicketsAllGetQuery,
  useLazyGetAllApiV1TicketsAllGetQuery,
  useGetForClientApiV1TicketscustomresponseGetQuery,
  useLazyGetForClientApiV1TicketscustomresponseGetQuery,
  useDeleteApiV1TicketsIdDeleteMutation,
  useGetFilteredTicketsApiV1TicketsgetFilteredTicketsGetQuery,
  useLazyGetFilteredTicketsApiV1TicketsgetFilteredTicketsGetQuery,
} = injectedRtkApi;
