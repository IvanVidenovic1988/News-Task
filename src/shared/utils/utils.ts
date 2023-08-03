type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

type RequestParams = {
  method: RequestMethod;
  token?: string;
  body?: string | FormData;
};

export function getRequestConfig({ method, token, body }: RequestParams) {
  return {
    method,
    headers: new Headers({
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }),
    ...(body ? { body } : {}),
  };
}
