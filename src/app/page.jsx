import Movies from "@/component/movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=28b1e77b08a8a1033dac1f9083ae2c88&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();

  return (
    <div className="flex justify-center items-center flex-wrap gap-3">
      {
      data?.result?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
