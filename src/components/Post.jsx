import { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.like_count);
  const currentUser = dummyUserData;
  const handleLike = async () => {};
  const postWithHashtags = post.content
    ? post.content.replace(/(#\w+)/g, `<span class="text-indigo-600">$&</span>`)
    : "";
  const cleanHTML = DOMPurify.sanitize(postWithHashtags);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/profile/` + post.user._id);
      }}
      className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <img
          src={post.user?.profile_picture}
          className="w-10 h-10 rounded-full shadow"
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <span>{post.user?.full_name}</span>
            <BadgeCheck />
          </div>
          <div className="text-green-500 text-sm">
            {post.user?.username} * {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {post.content && (
        <div
          className="text-grey-800 text-sm whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
      )}
      <div>
        {post.image_urls?.map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              key={index}
              className={`w-full h-48 object-cover rounded-lg ${post.image_urls.length === 1 && "col-span-2 h-auto"}`}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-grey-300">
        <div className="flex items-center gap-1">
          <Heart
            className={`w-4 h-4 cursor-pointer ${likes?.includes(currentUser._id) && "text-red-500 fill-red-500"}`}
            onClick={handleLike}
          />
          <span>{likes?.length}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>{12}</span>
        </div>
        <div className="flex items-center gap-1">
          <Share2 className="w-4 h-4" />
          <span>{7}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
