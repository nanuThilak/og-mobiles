import React from "react";

const About = () => {
  return (
    <div className="mt-20 mx-5 flex flex-col gap-5">
      <h1 className="text-2xl font-bold mb-5">About Us</h1>
      <p className="">
        At OG MOBILES, we’re more than just a mobile phone store — we’re your
        go-to destination for the latest smartphones, accessories, and expert
        advice. Whether you’re looking for the newest iPhone, the latest Samsung
        Galaxy, or a reliable budget-friendly device, we’ve got you covered.
      </p>
      <h1 className="text-2xl font-bold mb-5">OUR MISSION</h1>
      <p className="">
        At OG MOBILES, our mission is to connect people with the right
        technology by offering high-quality mobile devices, expert support, and
        exceptional customer service — all at competitive prices. We strive to
        be the most trusted mobile shop in [Your City/Region], where customers
        can find not only the latest smartphones and accessories, but also
        honest advice, fast repairs, and a friendly, helpful experience every
        time they visit.
      </p>
      <h1 className="text-2xl font-bold mb-5">WHY CHOOSE US?</h1>
      <p className="">
        <ul type="square">
          <li>. Competitive Prices</li>
          <li>. Expert Support</li>
          <li>. Fast & Reliable Repairs</li>
          <li>. Wide Range of Products</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
