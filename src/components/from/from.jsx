import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const From = () => {
  const { handleSubmit, reset, register } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch({ type: "AddUser", value: { id: nanoid(), ...data } });
    reset();
  };
  return (
    <div className="Container">
      <form className="text-center mt-[100px] " onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="py-[10px] bg-cyan-400 px-[5px] outline-none capitalize"
            {...register("userList")}
            type="text"
          />
        </div>
        <div>
          <button className="bg-green-400 p-[10px] rounded-[5px] mt-[10px]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
