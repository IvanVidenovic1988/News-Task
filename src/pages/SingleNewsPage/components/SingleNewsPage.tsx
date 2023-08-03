import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../../config/consts";
import { env } from "../../../config/config";
import { useAppSelector } from "../../../shared/redux/hooks";
import { likeRequest } from "../utils/likeApi";
import { commentRequest } from "../utils/commentApi";

type SingleEvent = {
    id?: string;
    title?: string;
    trending?: boolean;
    source?: string;
    text?: string;
    imageUrl?: string;
    likes?: string[];
    comments?:
    {
        id: string;
        comment: string;
        user: string;
        date: string;
    }[];
}

const SingleNewsPage = () => {

    const { newsId } = useParams();

    const [singleNews, setSingleNews] = useState<SingleEvent>({});
    const [loading, setLoading] = useState(true);

    // const [isCommentAreaOpen, setIsCommentAreaOpen] = useState(false)
    const [comment, setComment] = useState('')

    const user = useAppSelector((state) => state.login.user)
    const hasUserLiked = singleNews.likes?.includes(user?.id || "")
    console.log('user: ', user);

    const fetchSingleNews = async () => {
        setLoading(true);

        const rawResponse = await fetch(`${env.API_URL}${ROUTES.news}/${newsId}`, {
            method: 'GET',
        });
        const singleNewsResponse = await rawResponse.json();
        console.log('singleNewsResponse: ', singleNewsResponse);
        setSingleNews(singleNewsResponse);

        setLoading(false);
    };

    const sendLike = async () => {
        try {
            const likeResponse = await likeRequest(newsId || "");
            setSingleNews(likeResponse);
        } catch (error) {
            console.error("Error while performing like request:", error);
        }
    };


    const sendComment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const commentResponse = await commentRequest(newsId || "", comment);
            setSingleNews(commentResponse);
            setComment('');
        } catch (error) {
            console.error("Error while posting comment:", error);
        }
    };

    useEffect(() => {
        fetchSingleNews();
    }, []);

    if (loading) {
        return <p>loading</p>;
    }

    return (
        <div className="w-[70%] mx-auto">
            <div>{singleNews.title}</div>
            <div className="w-full h-[500px]">
                <img className="object-cover w-full h-full" src={singleNews.imageUrl} alt="failed to load image" />
            </div>
            <div>{singleNews.text}</div>
            {hasUserLiked ?
                <button onClick={sendLike}>unlike</button>
                :
                <button onClick={sendLike}>like</button>
            }
            <form onSubmit={sendComment}>
                <button type="submit" >Save</button>
                <textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    className="w-full h-[100px] border-[2px] border-black"
                />
            </form>

            <div>
                {singleNews.comments?.map((comment) => (
                    <div className="pb-2" key={comment.id}>
                        <p>{comment.user}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default SingleNewsPage;