import React from "react";
import Card from "../components/Card";

const Oppo = () => {
  return (
    <div className="my-20 mx-5">
      <img src="/oppol.png" width={"50px"} className="mb-5" />
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
         <Card
          img={"/op.png"}
          name={"OPPO RENO PRO12 5G"}
          price={"12,000Rs"}
          spces={"RAM 120gb + ROM 8gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-15%"}
          buy={"BUY"}
          link="/oppo"
        />
        <Card
          img={"/op2.png"}
          name={"OPPO Y300"}
          price={"11,000Rs"}
          spces={"RAM 120gb + ROM 4gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/oppo"
        />
         <Card
          img={"/op3.png"}
          name={"OPPO Y500"}
          price={"11,000Rs"}
          spces={"RAM 120gb + ROM 4gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/oppo"
        />

       
      </div>
    </div>
  );
};

export default Oppo;
