// import React, { useState } from "react";


// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [count, setCount] = useState(0);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent Successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="container d-flex align-items-center justify-content-center min-vh-100">
//       <div className="col-md-8 col-lg-6 p-4 bg-white rounded-4 shadow-lg">
//         <h2 className="text-center mb-4 text-primary fw-bold">Contact Us</h2>

//         {/* Contact Form */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label fw-semibold">Your Name</label>
//             <input
//               type="text"
//               className="form-control border-0 shadow-sm"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Your Email</label>
//             <input
//               type="email"
//               className="form-control border-0 shadow-sm"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label fw-semibold">Your Message</label>
//             <textarea
//               className="form-control border-0 shadow-sm"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               placeholder="Type your message..."
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="btn btn-primary w-100 fw-bold shadow-sm" style={{ transition: "0.3s" }}>
//             Send Message
//           </button>
//         </form>

//         {/* Contact Details */}
//         <div className="mt-4 text-center text-muted">
//           <p><strong>Email:</strong> contact@mywebsite.com</p>
//           <p><strong>Phone:</strong> +1 234 567 890</p>
//           <p><strong>Address:</strong> 123, Main Street, City, Country</p>
//         </div>

//         {/* Counter Feature */}
//         <div className="mt-4 text-center">
//           <h3 className="fw-bold text-dark" style={{ fontSize: "2rem" }}>Counter: {count}</h3>
//           {/* <button className="btn btn-success mx-2 shadow-sm fw-semibold" onClick={() => setCount(count + 1)}>
//             Increase
//           </button>
//           <button className="btn btn-danger mx-2 shadow-sm fw-semibold" onClick={() => setCount(0)}>
//             Reset
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React from 'react'

// const Contact = () => {
//   return (<>
//     <div>Contact</div>
//     <h1>ishu</h1>
//     </>
//   )
// }

// export default Contact



import React from 'react';

const Contact=()=>{
  return (<>
 <div className="shadow  container contact-container my-5 p-4">
    <div className="contact-header text-center mb-4">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you!</p>
    </div>

    {/* Contact Form */}
    <form >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          name="name"
          
          placeholder="Enter your name" 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email"
          
          
          placeholder="Enter your email" 
          required 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea 
          className="form-control" 
          id="message" 
          name="message"
          
      
          rows="4" 
          placeholder="Write your message" 
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">Send Message</button>
    </form>

    {/* Social Media Links */}
    <div className="text-center mt-4">
      <p>Or reach us on social media:</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram-square"></i>
        </a>  
      </div>
    </div>
  </div>
  </>)
}
export default Contact