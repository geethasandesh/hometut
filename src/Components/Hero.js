import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import tutor from "../Images/imagee1.png"
const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    area: "",
    class: "",
    parentMobile: "",
    board: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle button click
  const handleGetStartedClick = () => setShowForm(true);

  // Function to close the form
  const handleCloseForm = () => setShowForm(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      await axios.post("http://localhost:5000/send-email", formData);

      setSuccessMessage("Registration successful! Details sent to email.");
      setFormData({
        studentName: "",
        area: "",
        class: "",
        parentMobile: "",
        board: "",
      });
      setTimeout(() => {
        setShowForm(false);
        setSuccessMessage("");
      }, 3000); // Close form after 3 seconds
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error: Unable to send details. Try again later.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center relative">
      {!showForm ? (
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4 md:px-8">
          {/* Text and Button Section */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Find the Best Tutors for Home Tuitions
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Quality education at your doorstep for all subjects.
            </p>
            
            <button
              onClick={handleGetStartedClick}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition ml-28"
            >
              Get Started
            </button>
          </div>

          {/* GIF Image Section */}
          <div className="flex-1 flex justify-center mt-6 md:mt-0 ml-10">
            <img
              src={tutor}
              alt="tutor"
              className="w-80 md:w-96"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/3 absolute z-50">
          <button
            onClick={handleCloseForm}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
            Register for Home Tuition
          </h2>

          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="studentName"
                className="block text-gray-700 font-medium mb-1"
              >
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
                placeholder="Enter student name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="area"
                className="block text-gray-700 font-medium mb-1"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
                placeholder="Enter your area"
                required
              />
            </div>
            <div>
              <label
                htmlFor="class"
                className="block text-gray-700 font-medium mb-1"
              >
                Class
              </label>
              <select
                id="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
                required
              >
                <option value="">Select Class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="parentMobile"
                className="block text-gray-700 font-medium mb-1"
              >
                Parent Mobile Number
              </label>
              <input
                type="tel"
                id="parentMobile"
                value={formData.parentMobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
                placeholder="Enter parent mobile number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="board"
                className="block text-gray-700 font-medium mb-1"
              >
                Select Board
              </label>
              <select
                id="board"
                value={formData.board}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500"
                required
              >
                <option value="">Select Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                <option value="IGCSE">IGCSE</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Hero;
