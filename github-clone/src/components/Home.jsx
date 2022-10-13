import React from "react";
import DetailsTable from "../units/Table";

function Home({ data }) {
  return (
    <div>
      <DetailsTable data={data} />
    </div>
  );
}

export default Home;
