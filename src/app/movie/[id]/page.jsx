import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=28b1e77b08a8a1033dac1f9083ae2c88`
  );
  return await res.json();
};

const page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  console.log(id, "id");
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        fill
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />
      <div className="text-4xl  font-bold my-3">{movieDetail?.title}</div>
      <div className="my-3">
        {movieDetail?.release_date} - {movieDetail?.vote_average}
      </div>
      <div className=" hover:bg-white hover:text-black my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer">
        Trail
      </div>
    </div>
  );
};

export default page;
