import React from "react";
import { useSelector, useDispatch } from "react-redux";
export const Card = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const DeleteUser = (id) => {
    dispatch({ type: "DeleteUser", id });
  };
  const EditUser = (id) => {
    const UserEdit = prompt("qwertyu");
    if (EditUser) {
      dispatch({ type: "EditUser", id, value: { userList: UserEdit } });
    }
  };
  return (
    <>
      <div className="container text-red-500 text-center mt-[30px]">
        {userList.map((item) => (
          <div
            className=" bg-blue-400 rounded-[10px] w-[400px] p-[20px] mx-auto mb-[20px]"
            key={item.id}
          >
            <h1 className="text-white mb-[10px]">{item.userList}</h1>
            <div className="flex  justify-center gap-[10px]">
              <button
                onClick={() => DeleteUser(item.id)}
                className="bg-red-500 p-[10px] rounded-[5px] text-white"
              >
                Delete
              </button>
              <button
                onClick={() => EditUser(item.id)}
                className="bg-green-500 p-[10px] rounded-[5px] text-white"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
