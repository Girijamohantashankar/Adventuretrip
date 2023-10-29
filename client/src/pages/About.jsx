import React from "react";
const headingStyle = {
  color: "red", // Change the color to your desired value
};

const listItemStyle = {
  color: "blue", // Change the color to your desired value
};
function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Welcome to Adventure Trip - Your Gateway to Unforgettable Adventures!
      </h1>
      <p className="mb-4 text-slate-700">
        <h2 style={headingStyle}>Our Mission</h2>
        At Your Adventure Trip, our mission is to ignite the spirit of adventure
        in every traveler's heart. We believe that life is an incredible
        journey, and it's our goal to help you make the most of it. We're
        passionate about curating extraordinary adventures that take you to the
        far corners of the Earth, providing unforgettable experiences, and
        fostering a deep connection with the world's natural wonders.
      </p>
      <p className="mb-4 text-slate-700">
        <h2 style={headingStyle}>Our Team</h2>
        Adventure Trip is more than just a platform; it's a community of
        adventure enthusiasts, explorers, and travel experts who have dedicated
        their lives to exploring the world and sharing their passion with
        others. Our team comprises experienced adventurers, travel writers,
        photographers, and experts in various fields who are dedicated to
        bringing you the best in adventure travel.
        <h2>Meet a few key members of our team:</h2>
        <li style={listItemStyle}>Founder/CEO Name: Girija Shankar Mohanta</li>
        <li style={listItemStyle}>
          Adventure Expert Name: Bhabani Shankar Mohanta
        </li>
        <li style={listItemStyle}>Travel Writer Name: Babun Kumar Mohanta</li>
        <li style={listItemStyle}>Photographer Name: Manas Ranjan Mohanta</li>
      </p>
      <p className="mb-4 text-slate-700">
        Thank you for choosing Adventure Trip. We look forward to helping you
        make your travel dreams a reality!
      </p>
    </div>
  );
}
export default About;
