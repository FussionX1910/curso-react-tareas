import { useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import RoomItem from "../components/RoomItem";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: rooms, loading, error, getRooms } = useFakestoreApi();

  useEffect(() => {
    const get = async () => {
      const unsubscribe = await getRooms();
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    };
    get();
  }, []);

  return (
    <>
      <div className="text-black">
        <h1 className="text-2xl mb-5 font-bold">Sala de Chat: </h1>
        {loading ? <span>Cargando...</span> : null}
        {error ? <span>Hubo un error</span> : null}
        {rooms ? (
          <aside className="absolute left-0 top-36 bg-gray-900 text-white min-w-[150px] max-w-[150px] min-h-full flex flex-col gap-2">
            {rooms.map((room) => (
              <RoomItem room={room} key={room.id} />
            ))}
          </aside>
        ) : null}
      </div>
      {/* Fixed floating button */}
      <Link
        to="/new-message"
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </Link>
    </>
  );
};

export default Home;
