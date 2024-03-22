export const BlogSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6">
      <div role="status" className="max-w-5xl animate-pulse">
        <div className="border-b mt-4 cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[760px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
          <div className="text-gray-500 text-sm my-6">
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
