fetch("https://hometuitions.vercel.app/api/sendEmail", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    studentName: "John Doe", // Replace with actual data
    area: "Downtown",       // Replace with actual data
    class: "10",            // Replace with actual data
    parentMobile: "1234567890", // Replace with actual data
    board: "CBSE",          // Replace with actual data
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.message === "Email sent successfully!") {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  })
  .catch((error) => console.error("Error:", error));
