import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
   return (
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
         <section className="nav-padding w-full ">
            <Skeleton className="w-full h-[274px] rounded-lg bg-white-400" />
         </section>
         <section className="mt-6 flex flex-col w-full ">
            <Skeleton className="h-10 w-56 bg-white-400" />
            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
               <Skeleton className="h-[440px] w-full sm:w-[356px] bg-white-400" />
               <Skeleton className="h-[440px] w-full sm:w-[356px] bg-white-400" />
               <Skeleton className="h-[440px] w-full sm:w-[356px] bg-white-400" />
            </div>
         </section>
      </main>
   );
};

export default loading;
