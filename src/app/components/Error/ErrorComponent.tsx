const ErrorComponent: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="flex justify-center py-4 rounded-md my-4 px-8 bg-pink-200  text-pink-700">
      <p className="text-center">{errorMsg}</p>
    </div>
  );
};

export default ErrorComponent;
