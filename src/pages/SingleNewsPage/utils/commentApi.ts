import { env } from "../../../config/config";
import { ROUTES } from "../../../config/consts";
import { getRequestConfig } from "../../../shared/utils/utils";

const commentRequest = async (newsId: string, comment: string) => {
  const token = localStorage.getItem("token") || "";
  const config = getRequestConfig({
    method: "POST",
    body: JSON.stringify({ comment }),
    token,
  });

  const rawResponse = await fetch(
    `${env.API_URL}${ROUTES.news}/${newsId}${ROUTES.comment}`,
    config
  );
  const commentResponse = await rawResponse.json();
  console.log("commentResponse: ", commentResponse);
  return commentResponse;
};

export { commentRequest };
