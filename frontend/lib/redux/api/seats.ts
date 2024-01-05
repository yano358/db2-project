import { emptySlitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllSeatsApiV1SeatsGet: build.query<
      GetAllSeatsApiV1SeatsGetApiResponse,
      GetAllSeatsApiV1SeatsGetApiArg
    >({
      query: () => ({ url: `/api/v1/seats` }),
    }),
    createSeatApiV1SeatsPost: build.mutation<
      CreateSeatApiV1SeatsPostApiResponse,
      CreateSeatApiV1SeatsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/seats`,
        method: "POST",
        body: queryArg.seatsCreate,
      }),
    }),
    deleteSeatApiV1SeatsSeatIdDelete: build.mutation<
      DeleteSeatApiV1SeatsSeatIdDeleteApiResponse,
      DeleteSeatApiV1SeatsSeatIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/seats/${queryArg.seatId}/`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetAllSeatsApiV1SeatsGetApiResponse =
  /** status 200 Successful Response */ Seats[];
export type GetAllSeatsApiV1SeatsGetApiArg = void;
export type CreateSeatApiV1SeatsPostApiResponse =
  /** status 200 Successful Response */ Seats;
export type CreateSeatApiV1SeatsPostApiArg = {
  seatsCreate: SeatsCreate;
};
export type DeleteSeatApiV1SeatsSeatIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteSeatApiV1SeatsSeatIdDeleteApiArg = {
  seatId: number;
};
export type Seats = {
  id?: number;
  plane_id?: number;
  taken_status?: boolean;
  class_type?: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type SeatsCreate = {
  plane_id: number;
  taken_status: boolean;
  class_type: string;
};
export const {
  useGetAllSeatsApiV1SeatsGetQuery,
  useLazyGetAllSeatsApiV1SeatsGetQuery,
  useCreateSeatApiV1SeatsPostMutation,
  useDeleteSeatApiV1SeatsSeatIdDeleteMutation,
} = injectedRtkApi;
