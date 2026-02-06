import { dummyPostsData, assets } from "../assets/assets";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import StoriesBar from "../components/StoriesBar";
import "../index.css";
import Post from "../components/Post";
import RecentsMessages from "../components/RecentsMessages";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);

    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar flex items-start justify-between xl:gap-8 mt-2">
      <div>
        <StoriesBar />
        <div className="p-4 space-y-6">
          {feeds.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </div>
      </div>
      <div>
        <div className="max-xl:hidden sticky top-0">
          <div className="max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow">
            <h1 className="text-slate-800 font-semibold">Sponsored</h1>
            <img
              src={assets.sponsored_img}
              className="w-75 h-50 rounded-md"
              alt=""
            />
            <p className="text-slate-600">Email Marketing</p>
            <p className="text-slate-400">
              Supercharge your marketing with a powerful, easy-to-use platform
              built for results.
            </p>
          </div>
          <RecentsMessages />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
