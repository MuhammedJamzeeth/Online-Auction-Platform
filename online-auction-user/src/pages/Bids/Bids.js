import NavBar from "../../components/Nav/NavBar";
import * as React from "react";

const Bids = () => {
  return (
    <>
      <NavBar></NavBar>
      <div class="flex flex-row m-6">
        <div class="basis-1/4">01</div>
        <div class="basis-2/4">02</div>
        <div class="basis-1/4">03</div>
      </div>
    </>
  );
};

export default Bids;
