import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import StoryModal from "./StoryModal";
import StoryViewer from "./StoryViewer";

const StoriesBar = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setshowModal] = useState(false);
  const [viewStory, setViewStory] = useState(null);

  const fetchStories = async () => {
    setTimeout(() => {
      setStories(dummyStoriesData);
    }, 0);
  };
  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <div className="w-full max-w-[100vw] lg:max-w-2xl overflow-x-auto no-scrollbar pb-4">
      <div className="flex items-center gap-4 w-max px-4">
        <div
          onClick={() => {
            setshowModal(true);
          }}
          className="rounded-xl shadow-sm min-w-30 max-w-30 h-40 flex-shrink-0 cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-200 bg-gradient-to-b from-indigo-50 to-white"
        >
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="size-10 bg-indigo-500 rounded-full flex items-center justify-center ">
              <Plus className="w-5 h-5 text-white " />
            </div>
            <p className="text-sm font-medium text-slate-700 text-center">
              Create Story
            </p>
          </div>
        </div>
        {stories.map((story, index) => {
          return (
            <div
              key={index}
              onClick={() => setViewStory(story)}
              className="relative rounded-xl shadow min-w-30 max-w-30 h-40 flex-shrink-0 cursor-pointer overflow-hidden group active:scale-95 transition-all duration-200"
            >
              <img
                src={story.user.profile_picture}
                alt=""
                className="absolute size-9 top-2 left-2 z-20 rounded-full ring-2 ring-indigo-500 border-2 border-white object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />

              <p className="absolute bottom-2 left-2 right-2 text-white z-20 text-[10px] font-medium leading-tight line-clamp-2">
                {story.user.full_name}
              </p>

              {
                <div className="absolute inset-0 z-1 rounded-lg bg-black overflow-hidden ">
                  {story.media_type === "image" ? (
                    <img
                      src={story.media_url}
                      alt=""
                      className="h-full w-full object-cover hover:scale-110 transition duration-200 opacity-70 hover:opacity-80"
                    />
                  ) : story.media_type === "video" ? (
                    <video
                      src={story.media_url}
                      className="h-full w-full object-cover hover:scale-110 transition duration-200 opacity-70 hover:opacity-80"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
                      <p className="text-white text-[10px] font-bold text-center italic leading-tight">
                        {story.content}
                      </p>
                    </div>
                  )}
                </div>
              }
            </div>
          );
        })}
      </div>
      {showModal && (
        <StoryModal setshowModal={setshowModal} fetchStories={fetchStories} />
      )}
      {viewStory && (
        <StoryViewer viewStory={viewStory} setViewStory={setViewStory} />
      )}
    </div>
  );
};

export default StoriesBar;
