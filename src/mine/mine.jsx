// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // src/App.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import ServiceDetails from "./pages/ServiceDetails";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import ForgetPassword from "./pages/ForgetPassword";
// import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/service/:id"
//           element={<ProtectedRoute><ServiceDetails /></ProtectedRoute>}
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/profile"
//           element={<ProtectedRoute><Profile /></ProtectedRoute>}
//         />
//         <Route path="/forget-password" element={<ForgetPassword />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-brand">Career Counseling</Link>
//       <div className="navbar-links">
//         <Link to="/">Home</Link>
//         {user ? (
//           <>
//             <Link to="/profile">Profile</Link>
//             <img src={user.photoURL} alt="User" className="user-image" title={user.displayName} />
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // src/components/Footer.jsx
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; 2024 Career Counseling. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

// // src/components/ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;

// // src/pages/Home.jsx
// import React from "react";
// import Slider from "../components/Slider";
// import ServiceCard from "../components/ServiceCard";
// import services from "../data/services.json";

// const Home = () => {
//   return (
//     <div className="home">
//       <Slider />
//       <section className="services">
//         {services.map(service => (
//           <ServiceCard key={service.id} service={service} />
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Home;

// // src/pages/ServiceDetails.jsx
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import services from "../data/services.json";

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const service = services.find(s => s.id === id);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   const addComment = () => {
//     if (newComment) {
//       setComments([...comments, newComment]);
//       setNewComment("");
//     }
//   };

//   if (!service) return <p>Service not found</p>;

//   return (
//     <div className="service-details">
//       <h2>{service.name}</h2>
//       <p>{service.description}</p>
//       <h3>Comments</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment}</li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//         placeholder="Add a comment"
//       />
//       <button onClick={addComment}>Submit</button>
//     </div>
//   );
// };

// export default ServiceDetails;

// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { useAuth } from "../hooks/useAuth";

// const Login = () => {
//   const { login, loginWithGoogle } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     login(email, password);
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={loginWithGoogle}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;

// // src/pages/Register.jsx
// import React, { useState } from "react";
// import { useAuth } from "../hooks/useAuth";

// const Register = () => {
//   const { register } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [photoURL, setPhotoURL] = useState("");

//   const handleRegister = (e) => {
//     e.preventDefault();
//     register(name, email, password, photoURL);
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Photo URL"
//           value={photoURL}
//           onChange={(e) => setPhotoURL(e.target.value)}
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// // src/pages/Profile.jsx
// import React, { useState } from "react";
// import { useAuth } from "../hooks/useAuth";

// const Profile = () => {
//   const { user, updateProfile } = useAuth();
//   const [name, setName] = useState(user?.displayName || "");
//   const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

//   const handleUpdate = () => {
//     updateProfile(name, photoURL);
//   };

//   return (
//     <div className="profile">
//       <h2>My Profile</h2>
//       <p>Email: {user?.email}</p>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         type="text"
//         value={photoURL}
//         onChange={(e) => setPhotoURL(e.target.value)}
//         placeholder="Photo URL"
//       />
//       <button onClick={handleUpdate}>Update Profile</button>
//     </div>
//   );
// };

// export default Profile;

// // src/pages/ForgetPassword.jsx
// import React, { useState } from "react";
// import { useAuth } from "../hooks/useAuth";

// const ForgetPassword = () => {
//   const { resetPassword } = useAuth();
//   const [email, setEmail] = useState("");

//   const handleReset = () => {
//     resetPassword(email);
//   };

//   return (
//     <div className="forget-password">
//       <h2>Reset Password</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleReset}>Reset Password</button>
//     </div>
//   );
// };

// export default ForgetPassword;

// // src/pages/NotFound.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="not-found">
//       <h2>404 - Page Not Found</h2>
//       <Link to="/">Go to Home</Link>
//     </div>
//   );
// };

// export default NotFound;

// // src/data/services.json
// [
//   {
//     "id": "1",
//     "name": "Career Counseling Session",
//     "description": "Personalized career guidance from experts.",
//     "category": "Online",
//     "price": "$50",
//     "counselor": "Dr. Smith",
//     "rating": 4.8
//   },
//   {
//     "id": "2",
//     "name": "Resume Review",
//     "description": "Get your resume reviewed by professionals.",
//     "category": "Online",
//     "price": "$30",
//     "counselor": "Jane Doe",
//     "rating": 4.7
//   }
// ]
