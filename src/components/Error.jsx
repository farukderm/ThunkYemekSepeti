const Error = ({ msg, retry }) => {
  return (
    <div>
      <div className="bg-red-200 my-20 p-10 text-center text-lg align-middle justify-center">
        <p className="text-red-800 ">Üzgünüz bir hata oluştu</p>
        <p className="text-red-700 font-semibold">{msg}</p>
      </div>
      {retry && (
        <div className="flex justify-center">
          <button
            onClick={retry}
            className="border p-2 px-4 bg-amber-200 rounded-md hover:bg-zinc-300 transition"
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
