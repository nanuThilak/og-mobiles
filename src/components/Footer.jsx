import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-screen h-fit">
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by OG
            MOBILES Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
