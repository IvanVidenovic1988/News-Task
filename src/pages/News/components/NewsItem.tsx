import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../config/consts";
import { FC } from "react";

type Props = {
    item: {
        id: string;
        source: string;
        trending?: boolean;
        imageUrl: string;
        title: string;
    };
}

const NewsItem: FC<Props> = (props) => {
    const { item } = props;

    return (
        <div className="w-[49%] border-[2px] border-red-700 mb-5" key={item.id}>
            <div className="flex items-center justify-between px-5 py-2">
                <h2 className="text-2xl font-bold text-gray-500">{item.source}</h2>
                {item.trending &&
                    <span className="text-xl text-green-600 border-[1px] border-green-600 px-2">Trending</span>
                }
            </div>
            <div className="w-[calc(100%-40px)] mx-auto mb-2 border-b-[2px] border-gray-500"></div>
            <div className="w-[calc(100%-40px)] h-[400px] mx-auto">
                <img className="object-cover w-full h-full" src={item.imageUrl} alt="failed to load image" />
            </div>
            <div className="w-[calc(100%-40px)] mx-auto mt-2 mb-3 border-b-[2px] border-gray-500"></div>
            <div className="w-[calc(100%-40px)] mx-auto flex-center text-center">
                <h1 className="text-xl font-bold leading-5">{item.title}</h1>
            </div>
            <NavLink
                to={`${ROUTES.news}/${item.id}`}
                className="w-[calc(100%-40px)] mx-auto flex-center mt-5 mb-2"
            >
                <button className="login-btn">Open</button>
            </NavLink>
        </div>
    );
}

export default NewsItem;