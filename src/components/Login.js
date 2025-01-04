// import React, { useState } from "react";
// import app from  '../fire'; 
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const db = getFirestore(app);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (email && password){
//         try{
//             await addDoc(collection(db, "users"), {
//                 email: email,
//                 password: password,
//                 timestamp: new Date()
//             });
//             onLogin();
//         } catch (error){
//             setError("Error in login. Please try again");
//         } 
//     }else{
//         setError("Please fill all the fields");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {error && <p className="error-message">{error}</p>}
//         <label>Email</label>
//         <input
//           type="text"
//           value={email}
//           placeholder="Enter Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           placeholder="Enter Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import app from "../fire"; // Ensure this points to your Firebase configuration file

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formatDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const db = getDatabase(app);
        const newDoc = push(ref(db, "users/names")); // Create a new unique child node in "users"
        await set(newDoc, {
          email: email,
          password: password, // Consider encrypting passwords in a real application
          timestamp: formatDate(),
        });
        onLogin();
      } catch (err) {
        setError("Error saving data: " + err.message);
      }
    } else {
      setError("Please fill all the fields");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

