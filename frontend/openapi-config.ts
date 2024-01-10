import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:8000/api/v1/openapi.json",
  apiFile: "./lib/redux/api/emptyApi.ts",
  apiImport: "emptySlitApi",
  exportName: "api",
  hooks: { queries: true, lazyQueries: true, mutations: true },
  outputFiles: {
    "./lib/redux/api/users.ts": { filterEndpoints: [/users/i] },
    "./lib/redux/api/login.ts": { filterEndpoints: [/login/i] },
    "./lib/redux/api/planes.ts": { filterEndpoints: [/planes/i] },
    "./lib/redux/api/airports.ts": { filterEndpoints: [/airports/i] },
    "./lib/redux/api/luggage.ts": { filterEndpoints: [/luggage/i] },
    "./lib/redux/api/clients.ts": { filterEndpoints: [/clients/i] },
    "./lib/redux/api/flights.ts": { filterEndpoints: [/flights/i] },
    "./lib/redux/api/tickets.ts": { filterEndpoints: [/tickets/i] },
    "./lib/redux/api/seats.ts": { filterEndpoints: [/seats/i] },
  },
};

export default config;
