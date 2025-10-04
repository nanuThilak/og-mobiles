import React from "react";
import Card from "../components/Card";

const R = () => {
  return (
    <div className="my-20 mx-5">
      <img src="/rl.png" width={"50px"} className="mb-5" />
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        <Card
          img={"/rmm.png"}
          name={"REALME REALME 14 PRO"}
          price={"30,000Rs"}
          spces={"RAM 120gb + ROM 8gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-15%"}
          buy={"BUY"}
          link="/realme"
        />
        <Card
          img={
            "https://m.media-amazon.com/images/I/712-8ksgYRL._UF894,1000_QL80_FMwebp_.jpg"
          }
          name={"REALME NARZO"}
          price={"35,000Rs"}
          spces={"RAM 120gb + ROM 4gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/realme"
        />

        <Card
          img={"/rmm2.png"}
          name={"REALME V600"}
          price={"30,000Rs"}
          spces={"RAM 120gb + ROM 16gb "}
          pro={"Media Tech CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/realme"
        />
      </div>
    </div>
  );
};

export default R;
