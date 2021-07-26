import "source-map-support/register";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const main: APIGatewayProxyHandlerV2<unknown> = async (event) => {
  const body = JSON.parse(event.body ?? "{}");
  return {
    message: `Hello ${body?.name ?? "Unknown"}!`,
    event,
  };
};
