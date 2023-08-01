import { env } from "../../../config/config";
import { ROUTES } from "../../../config/consts";
import { getRequestConfig } from "../../../shared/utils/utils";

const likeRequest = async (newsId: string) => {
  const token = localStorage.getItem("token") || "";
  const config = getRequestConfig({
    method: "POST",
    token,
  });

  const rawResponse = await fetch(
    `${env.API_URL}${ROUTES.news}/${newsId}${ROUTES.like}`,
    config
  );
  const likeResponse = await rawResponse.json();
  console.log("likeResponse: ", likeResponse);
  return likeResponse;
};

export { likeRequest };
