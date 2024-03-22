import axios from "axios";
import { AppBar } from "./appbar";
import { CiCirclePlus } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col max-w-6xl mx-auto p-4 ">
      <AppBar />
      <div className="w-full mt-6">
        <div className="flex items-center">
          <CiCirclePlus className="w-10 h-10" />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="p-6 w-full text-3xl focus-within:outline-none font-bold border-b rounded-xl"
          />
        </div>
        <div className="flex items-start">
          <TbGridDots className="w-10 h-10 mt-4" />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tell your story.."
            rows={10}
            className="w-full text-lg font-semibold p-6 focus-within:outline-none"
          />
        </div>
      </div>
      <button
        onClick={async () => {
          const responce = await axios.post(
            `${BACKEND_URL}/api/v1/blog`,
            {
              title,
              content,
            },
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );
          navigate(`/blog/${responce.data.id}`);
        }}
        className="self-end p-3 w-40 bg-blue-600 text-white font-semibold rounded-lg mt-6 hover:opacity-90"
      >
        Publish Post
      </button>
    </div>
  );
};
