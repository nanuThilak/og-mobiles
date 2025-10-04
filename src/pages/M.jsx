import React from "react";
import Card from "../components/Card";

const M = () => {
  return (
    <div className="my-20 mx-5">
      <img src="/readml.png" width={"50px"} className="mb-5" />
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        <Card
          img={"/mp.png"}
          name={"REDME 15"}
          price={"15,000Rs"}
          spces={"RAM 120gb + ROM 8gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-15%"}
          buy={"BUY"}
          link="/mi"
        />
        <Card
          img={"/mp2.png"}
          name={"REDME NOTE 14 PRO"}
          price={"25,000Rs"}
          spces={"RAM 120gb + ROM 4gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/mi"
        />

        <Card
          img={"/mp3.png"}
          name={"REDME 13"}
          price={"30,000Rs"}
          spces={"RAM 120gb + ROM 16gb "}
          pro={"Media Tech CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/mi"
        />
           <Card
          img={"/mp4.png"}
          name={"README A3X"}
          price={"11,000Rs"}
          spces={"RAM 120gb + ROM 4gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/mi"
        />
      </div>
    </div>
  );
};

export default M;
