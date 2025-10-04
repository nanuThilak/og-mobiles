import React from "react";

const Contact = () => {
  return (
    <div className="my-20 mx-5">
      <p className="text-center font-bold text-2xl">CONTACT US</p>
      <h1 className="font-bold mb-5">GET IN TOUCH</h1>
      <div>
        Address: MobileTech Hub 123 Main Street Downtown Center, Metro City
        10001 (Near City Mall, next to CoffeeZone)
      </div>
      <br />
      <div>Opening Hours: Monday – Saturday: 10:00 AM – 8:00 PM</div>
      <br />
      <div>Sunday: Closed</div>
      <br />
      <div>Phone: +91 8974567989</div>
      <br />
      <div>Email: ogmobiles@mobiletechhub.com</div>
      <br />
      <div>Customer Support: supportog@mobiletechhub.com</div>
      <br />
<div className="border p-10 rounded-2xl">
   <form action="" className="flex flex-col gap-5 w-[500px]">
    <h1 className="text-2xl font-bold">Sending Us a Message</h1>
    <label htmlFor="">Name</label>
      <input type="Name" placeholder="Name" className="border-2 p-2" />
      <label htmlFor="">Email</label>
      <input type="email" placeholder="Email" className="border-2 p-2" />

  <label htmlFor="">Message</label>
      <input type="email" placeholder="message" className="border-2 p-5" />
      <button className="border rounded-2xl bg-white text-black w-25">Send</button>
    </form>
</div>
 
    </div>
  );
};

export default Contact;
