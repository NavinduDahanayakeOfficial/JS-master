import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResourcePlaylist, getResources } from "@/sanity/actions";
import React from "react";

export const revalidate = 900;

interface Props {
   searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
   const resources = await getResources({
      query: searchParams?.query || "",
      category: searchParams?.category || "",
      page: "1",
   });

   const resourcePlaylist = await getResourcePlaylist();

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

         {(searchParams?.query || searchParams?.category) && (
            <section className="flex-center mt-6 w-full flex-col ">
               <Header
                  type="Resources"
                  query={searchParams?.query || ""}
                  category={searchParams?.category || ""}
               />
               <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
                  {resources?.length > 0 ? (
                     resources.map((resource: any) => {
                        return (
                           <ResourceCard
                              key={resource._id}
                              title={resource.title}
                              id={resource._id}
                              image={resource.image}
                              downloadNumber={resource.views}
                           />
                        );
                     })
                  ) : (
                     <p className="body-regular text-white-400 ">
                        No Resource Found
                     </p>
                  )}
               </div>
            </section>
         )}

         {!searchParams?.query &&
            !searchParams?.category &&
            resourcePlaylist.map(
               (item: any) =>
                  item?.resources?.length > 0 && (
                     <section
                        key={item._id}
                        className="flex-center mt-6 mb-12 w-full flex-col"
                     >
                        <h1 className="heading3 self-start text-white-800">
                           {item.title}
                        </h1>
                        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
                           {item?.resources?.map((resource: any) => {
                              return (
                                 <ResourceCard
                                    key={resource._id}
                                    title={resource.title}
                                    id={resource._id}
                                    image={resource.image}
                                    downloadNumber={resource.views}
                                 />
                              );
                           })}
                        </div>
                     </section>
                  )
            )}
      </main>
   );
};

export default Page;
