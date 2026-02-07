import { useEffect, useState } from "react";
import { dummyRecentMessagesData } from "../assets/assets";
import { Link } from "react-router-dom";
import moment from "moment";

const RecentsMessages = () => {
  const [messages, setMessages] = useState([]);
  const fetchRecentMessages = async () => {
    setMessages(dummyRecentMessagesData);
  };
  useEffect(() => {
    fetchRecentMessages();
  }, []);
  return (
    <div className="bg-white max-w-xs p-4 min-h-20 rounded-md shadow text-xs text-state-800">
      <h3 className="font-semibold text-slate-800 mb-4">Recent Messages</h3>
      <div className="flex flex-col max-h-56 overflow-y-scroll no-scrollbar">
        {messages.map((message, index) => {
          return (
            <Link
              key={index}
              className="flex items-start gap-3 py-2 hover:bg-slate-100"
              to={`/messages/${message.from_user_id._id}`}
            >
              <img
                src={message.from_user_id.profile_picture}
                className="w-8 h-8 rounded-full"
                alt=""
              />

              <div className="w-full">
                <div className="flex justify-between">
                  <p className="font-meduim">
                    {message.from_user_id.full_name}
                  </p>
                  <p className="text-[10px]">
                    {moment(message.createdAt).fromNow()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-grey-500">
                    {message.text ? message.text : "media"}
                  </p>
                  {!message.seen && (
                    <p className="bg-indigo-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px]">
                      1
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecentsMessages;
