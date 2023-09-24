const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="my-2 w-[100%] max-w-screen-md mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className={`bg-pink-800 h-2.5 rounded-full animate-pulse`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
