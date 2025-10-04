import React from "react";
import Card from "../components/Card";

const Vivo = () => {
  return (
    <div className="my-20 mx-5">
      <img src="/vivol.png" width={"50px"} className="mb-5" />
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        <Card
          img={"/vp.png"}
          name={"VIVO N400"}
          price={"12,000Rs"}
          spces={"RAM 120gb + ROM 8gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-15%"}
          buy={"BUY"}
          link="/vivo"
        />
        <Card
          img={
            "/vp2.png"
          }
          name={"VIVO Z300"}
          price={"25,000Rs"}
          spces={"RAM 120gb + ROM 4gb "}
          pro={"snap dragon CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/vivo"
        />

        <Card
          img={"/vp3.png"}
          name={"VIVO Z600"}
          price={"30,000Rs"}
          spces={"RAM 120gb + ROM 16gb "}
          pro={"Media Tech CPU & GPU"}
          dis={"-10%"}
          buy={"BUY"}
          link="/vivo"
        />
      </div>
    </div>
  );
};

export default Vivo;
