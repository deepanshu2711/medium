import { SignupInput } from "@deepanshu2711/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const responce = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = await responce.data.jwt;
      console.log(jwt);
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Some error occured try again");
      console.log("AUTH_ERROR", error);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center px-10 py-3">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-slate-400">
            {type === "signup"
              ? "Already have an account? "
              : "Dont have an account ?"}
            <Link
              className="hover:underline text-blue-500"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              Link
            </Link>
          </p>
        </div>
        <div className="flex flex-col  gap-3">
          <LabledInput
            type="email"
            lable="Email"
            placeholder="Deepanshusaini2711@gmail.com"
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                email: e.target.value,
              }));
            }}
          />
          {type === "signup" && (
            <LabledInput
              type="text"
              lable="Username"
              placeholder="Deepanshu2711"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />
          )}
          <LabledInput
            type="password"
            lable="Password"
            placeholder="********"
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                password: e.target.value,
              }));
            }}
          />
        </div>
        <button
          onClick={sendRequest}
          className="bg-gray-800 text-white p-2 mt-3 rounded-lg hover:opacity-90"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

interface LabledInputProps {
  lable: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabledInput({ lable, placeholder, onChange, type }: LabledInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{lable}</label>
      <input
        type={type}
        id="first_name"
        className="p-2 rounded-lg border w-full"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}
