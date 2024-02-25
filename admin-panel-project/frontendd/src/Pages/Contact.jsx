import React, { useState, useEffect } from "react";
import "../Components/Css/Contact.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Store/Auth";
import { toast } from 'react-toastify';

export default function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (user && user.userData) {
      setContact({
        username: user.userData.username || "",
        email: user.userData.email || "",
      });
    }
  }, [user]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const contactSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/v2/form/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...contact, message }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setContact({
          username: user.userData.username || "",
          email: user.userData.email || "",
        });
        setMessage("");
        toast.success("Message Sent Successfully");
      }
    } catch (error) {
      toast.error("Please Login First");
      console.log("Error During Submitting of 'Message' Contact 'FORM' ", error);
    }
  };

  return (
    <>
      <div className="contactOutter">
        <div className="contactLHS">
          <div className="contactLHSsecond">
            <div className="contacticonTag">
              <div className="contactLHScontentHeading">
                <h1>Get In Touch</h1>
                <p>
                  We value your feedback and are always eager to hear from you.
                  If you have any questions, suggestions, or inquiries, please
                  don't hesitate to contact us. Our friendly team is here to
                  help!
                </p>
              </div>
              <div className="contactLHSBTN">
                <button className="contactLHSBTNone">
                  <NavLink to="/register" className={"contactNavLink"}>
                    Get Start
                  </NavLink>
                </button>
                <button className="contactLHSBTNsecond">
                  <NavLink to="/register" className={"contactNavLink"}>
                    Get Next
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="contactRHS">
          <div className="formRhs">
            <form onSubmit={contactSubmitHandler}>
              <div className="inputRHS">
                <label htmlFor="uname"></label>
                <input
                  type="text"
                  id="uname"
                  name="username"
                  placeholder="Enter UserName"
                  value={contact.username}
                  onChange={e => setContact({ ...contact, username: e.target.value })}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="inputRHS">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contact.email}
                  placeholder="Enter Email"
                  onChange={e => setContact({ ...contact, email: e.target.value })}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="inputRHS">
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Enter Message"
                />
              </div>
              <div className="inputRHS btncontactRHS">
                <button type="submit">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


















// import React, { useEffect, useState } from "react";
// import "../Components/Css/Contact.css";
// import { NavLink } from "react-router-dom";
// import { useAuth } from "../Store/Auth";
// import { toast } from 'react-toastify';

// //Controlled Aproach and username,email,textarea follow Controlled Approach 

// export default function Contact() {
//   const [contact, setContact] = useState({
//     username: "",
//     email: "",
//     // message: "",
//   });

//   const [message, setMessage] = useState("");

//   const [userInfo, setUserInfo] = useState(true);
//   const { user } = useAuth();

//   const changeHandler = (e) => {
//     //on Every Entry or KeyStroke Component Will be Re-render bz of State Change
//     const name = e.target.name;
//     const value = e.target.value;
//     setContact({
//       ...contact,
//       [name]: value,
//     });
//   };

//     const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };


//   if (userInfo && user) {
//     setContact({
//       username: user.userData.username,
//       email: user.userData.email,
//       // message: "",
//     });
//     setMessage({message:""});
//     setUserInfo(false);
//   }





//   const contactSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("Before Fetch");
//       const response = await fetch(
//         "http://localhost:5000/api/v2/form/contact",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           // body: JSON.stringify(contact),
//           body: JSON.stringify({ ...contact, message }), //its Request Body And Acctual Place from the Field Data will send to Backend
//         }
//       );
//       console.log("Response Hai Bhai:", response);

//       if (response.ok) {
//         console.log("Inside the Response Body")
//         const data = await response.json();
//         console.log("data Hai Bhai :", data);
//         console.log("Inside the Response Body222")
//         setContact({
//           username: user.userData.username,
//           email: user.userData.email,
//         });
//         // console.log("userName :", username,email);
//         console.log("Inside the Response Body333");
//         setMessage("");
//         console.log("data :", data);
//         alert("Message Sent Successfully");
//         // toast.success("Message Sent Successfully");
//       }
//     } catch (error) {
//       toast.error("Please Login First");
//       console.log(
//         "Error During Submitting of 'Message' Contact 'FORM' ",
//         error
//       );
//     }
//   };


//   return (
//     <>
//       <div className="contactOutter">
//         <div className="contactLHS">
//           {/* <div className="contactLHSfirst">
//             <h1>Contact Us</h1>
//           </div> */}
//           <div className="contactLHSsecond">
//             <div className="contacticonTag">
//               <div className="contactLHScontentHeading">
//                 <h1>Get In Touch</h1>
//                 <p>
//                   We value your feedback and are always eager to hear from you.
//                   If you have any questions, suggestions, or inquiries, please
//                   don't hesitate to contact us. Our friendly team is here to
//                   help!
//                 </p>
//               </div>
//               <div className="contactLHSBTN">
//                 <button className="contactLHSBTNone">
//                   <NavLink to="/register" className={"contactNavLink"}>
//                     Get Start
//                   </NavLink>
//                 </button>
//                 <button className="contactLHSBTNsecond">
//                   <NavLink to="/register" className={"contactNavLink"}>
//                     Get Next
//                   </NavLink>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="contactRHS">
//           <div className="formRhs">
//             <form onSubmit={contactSubmitHandler}>
//               <div className="inputRHS">
//                 {/* <label htmlFor="uname">UserName</label> */}
//                 <label htmlFor="uname"></label>
//                 <input
//                   type="text"
//                   id="uname"
//                   name="username"
//                   placeholder="Enter UserName"
//                   value={contact.username}
//                   onChange={changeHandler}
//                   autoComplete="off"
//                   required
//                 />
//               </div>
//               <div className="inputRHS">
//                 {/* <label htmlFor="email">Email</label> */}
//                 <label htmlFor="email"></label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={contact.email}
//                   placeholder="Enter Email"
//                   onChange={changeHandler}
//                   autoComplete="off"
//                   required
//                 />
//               </div>
//               <div className="inputRHS">
//                 {/* <label htmlFor="message">Message</label> */}
//                 <label htmlFor="message"></label>
//                 <textarea
//                   id="message"
//                   // cols={30}
//                   // rows={10}
//                   // value={contact.textareamessage}
//                   value={message}
//                   onChange={handleMessageChange}
//                   placeholder="Enter Message"
//                 />
//               </div>
//               <div className="inputRHS btncontactRHS">
//                 <button type="submit">Contact Us</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
