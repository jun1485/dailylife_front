// import { Link } from "react-router-dom";
// import "./login.css";
// import axios from "axios";
// import { useState } from "react";
// import userApi from "../../apis/userApi";

// function SignIn() {
//   const [userId, setUserId] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     userApi.postUserInfoForSignUp({
//       userId: userId,
//       userPassword: password,
//       userEmail: email,
//       userName: username,
//       userPhoneNumber: phoneNumber,
//     });
//     // axios
//     //   .post(`${process.env.REACT_APP_HOST}/api/users/join`, {
//     //     userId: userId,
//     //     userPassword: password,
//     //     userEmail: email,
//     //     userName: username,
//     //     userPhoneNumber: phoneNumber,
//     //   })
//     //   .then((res) => console.log(res))
//     //   .catch((err) => console.log(err));
//   }

//   return (
//     <div className="login-page">
//       <div className="form">
//         <form action="/signin" method="POST" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="email address"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input type="text" placeholder="id" onChange={(e) => setUserId(e.target.value)} />
//           <input type="text" placeholder="name" onChange={(e) => setUsername(e.target.value)} />
//           <input
//             type="text"
//             placeholder="phone number"
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             autoComplete="on"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button>create</button>
//           <p className="message">
//             Already registered? <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
