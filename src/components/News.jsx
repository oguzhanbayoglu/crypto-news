import React from "react";
import { useGetNewsQuery } from "../services/newsApi";
import moment from "moment/moment";

const boilerUrl =
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const boilerNews = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    className="fill-current scale-[0.4] -m-2"
    width="48"
  >
    <path d="M7 42q-1.25 0-2.125-.875T4 39V6l3.35 3.35L10.65 6 14 9.35 17.35 6l3.3 3.35L24 6l3.35 3.35L30.65 6 34 9.35 37.35 6l3.3 3.35L44 6v33q0 1.25-.875 2.125T41 42Zm0-3h15.5V25H7v14Zm18.5 0H41v-5.5H25.5Zm0-8.5H41V25H25.5ZM7 22h34v-6H7Z" />
  </svg>
);

const News = ({ newsCategory }) => {
  const { data: news, isFetching } = useGetNewsQuery({
    newsCategory: newsCategory || "cryptocurrency",
    count: 50,
  });
  console.log(news);

  if (isFetching)
    return (
      <div className="w-full flex justify-center items-center h-[10rem]">
        <p>Loading</p>
      </div>
    );

  return (
    <>
      {news?.value.map((cnew) => (
        <a
          href={cnew.url}
          target="_blank"
          key={cnew.name}
          rel="noreferrer"
          className="card card-compact p-6 gap-8 flex-1 bg-base-300 justify-between"
        >
          <div className="flex items-start justify-between gap-8">
            <h3 className="font-bold">{cnew.name}</h3>
            <img
              src={cnew.image?.thumbnail?.contentUrl || boilerUrl}
              alt="img"
              className="h-[7rem] w-[7rem] object-cover rounded-2xl"
            />
          </div>
          <p className="text-sm">
            {cnew.description.length > 100
              ? `${cnew.description.substring(0, 130)}...`
              : cnew.description}
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              {cnew.provider[0]?.image?.thumbnail?.contentUrl ? (
                <img
                  src={cnew.provider[0]?.image?.thumbnail?.contentUrl}
                  alt="avatar"
                  className="h-4"
                />
              ) : (
                boilerNews
              )}
              <p className="text-sm">{cnew.provider[0]?.name}</p>
            </div>
            <p className="text-sm">
              {moment(cnew.datePublished).startOf("ss").fromNow()}
            </p>
          </div>
        </a>
      ))}
    </>
  );
};

export default News;
