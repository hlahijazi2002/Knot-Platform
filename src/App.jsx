import { Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";
import Connections from "./pages/Connections";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import Chat from "./pages/Chat";
import Discover from "./pages/Discover";
import Login from "./pages/Login";
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import "./index.css";

const App = () => {
  const { user } = useUser();
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={!user ? <Login /> : <Layout />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<Chat />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
