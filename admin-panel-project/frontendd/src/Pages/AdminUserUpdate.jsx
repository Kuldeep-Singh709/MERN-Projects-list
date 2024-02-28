import React, { useEffect, useState } from "react";
import "../Components/Css/AdminUserUpdate.css";
import { useAuth } from "../Store/Auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminUserUpdate() {
  const [user, setUser] = useState({ username: "", email: "", phone: "" });
  const { authoritionToken } = useAuth();
  const { id } = useParams();

  const getUserDataByAdmin = async () => {
    try {
      const getSingleUser = await fetch(
        `http://localhost:5000/api/admin/users/singleuser/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authoritionToken,
          },
        }
      );
      const getSingleUserData = await getSingleUser.json();
      console.log("Single User Data:", getSingleUserData);
      // setUser(getSingleUserData);
      setUser({
        username: getSingleUserData.user.username,
        email: getSingleUserData.user.email,
        phone: getSingleUserData.user.phone,
      });
    } catch (error) {
      console.log(
        "Error While Fetching User Data by Admin inside AdminUserUpdate Component",
        error
      );
    }
  };

  useEffect(() => {
    getUserDataByAdmin();
  }, []);

  const adminUserUpdateHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/user/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authoritionToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        toast.success("User Data Updated Successfully");
      } else {
        toast.success("User Data Not Updated");
      }
    } catch (error) {
      console.log("Error While Updating User Data By Admin", error);
    }
  };

  return (
    <>
      <div className="adminUserUpadteOutterDiv">
        <div className="adminUserUpadteInnerDiv">
          <div className="adminuserObjectIdtag">
            <h2>
              <span className="adminuserObjectIdtagSpan">User ID</span>{" "}
              <span className="adminuserObjectIdtagSpanSecond">:</span> {id}
            </h2>
          </div>
          <form
            onSubmit={adminUserUpdateHandler}
            className="AdminUserUpdateFormTag"
          >
            <div className="adminuserFirstInputDiv adminuserInputDivs">
              <label htmlFor="uname" className="adminuserLabel">
                Username
              </label>
              <input
                type="text"
                id="uname"
                name="username"
                placeholder="Enter UserName"
                value={user.username}
                // onChange={(e) => setUser({ ...user, username: e.target.value })}
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
                autoComplete="off"
                required
              />
            </div>
            <div className="adminuserSecondInputDiv adminuserInputDivs">
              <label htmlFor="email" className="adminuserLabel">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                placeholder="Enter Email"
                // onChange={(e) => setUser({ ...user, email: e.target.value })}
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                autoComplete="off"
                required
              />
            </div>
            <div className="adminuserThirdInputDiv adminuserInputDivs">
              <label htmlFor="number" className="adminuserLabel">
                Phone
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={user.phone || ""}
                placeholder="Enter number"
                onChange={(e) =>
                  setUser((prevState) => ({
                    ...prevState,
                    phone: e.target.value,
                  }))
                }
                // onChange={(e) => setUser({ ...user, phone: e.target.value })}
                autoComplete="off"
                required
              />
            </div>
            <div className="adminuserUpdateBTN">
              <button type="submit">Update User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
