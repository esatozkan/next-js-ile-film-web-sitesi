import Movies from "@/component/movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=28b1e77b08a8a1033dac1f9083ae2c88&query=${keyword}&language=en-US&include_adult=false`
  );
const data =await res.json()
  console.log(keyword, "keyword");
  return <div>{
    !data?.results?<div>Aranılan Film Bulunamadı</div>: 
    
        <div className="flex items-center flex-wrap gap-3">
            {
                data?.result?.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                  ))
            }
        </div>
    }</div>;
};

export default Page;
