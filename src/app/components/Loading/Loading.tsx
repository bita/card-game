const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-8">
        <p className="animate-spin h-6 w-6 mr-3 mb-3 border-4 border-pink-600 border-t-pink-300 
        rounded-full"></p>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">Loading...</p>
      </div>
    </>
  );
};

export default Loading;
