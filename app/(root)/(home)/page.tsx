import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

export const revalidate = 900;

const Page = async () => {
   const resources = await getResources({
      query: "",
      category: "",
      page: "1",
   });


   return (
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col ">
         <section className="nav-padding w-full">
            <div className="flex-center min-h-[274px] w-ful flex-col rounded-xl bg-banner bg-cover bg-center text-center">
               <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
                  Javascript Mastery Resources
               </h1>
            </div>
            <SearchForm />
         </section>
         <Filters />
         <section className="flex-center mt-6 w-full flex-col sm:mt-20">
            Header
            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              { resources?.length>0 ? (resources.map   ((resource:any) => {
                  return  <ResourceCard
                     key={resource._id}
                     title={resource.title}
                     id={resource._id}
                     image={resource.image}
                     downloadNumber={resource.views}
                  />
                  
                })): (
                  <p className="body-regular text-white-400 ">No Resource Found</p>
                )
              }
            </div>
         </section>
      </main>
   );
};

export default Page;
