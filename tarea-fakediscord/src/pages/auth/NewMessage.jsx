import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFakestoreApi } from "../../hooks/useFakestoreApi";

const NewMessage = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { loading, error, storeNewMessage } = useFakestoreApi();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await storeNewMessage(form);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col items-center justify-center min-w-[400px] h-fit bg-slate-200 rounded-md p-8">
        <h1 className="text-2xl font-bold text-slate-900">Nuevo mensaje</h1>
        <form
          className="flex flex-col w-full mt-4 text-slate-900"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Mensaje"
            className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500"
            name="name"
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`w-full p-2 mt-4 bg-slate-500 text-white rounded-md hover:bg-slate-600 ${
              loading ? "bg-slate-200 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Cargando..." : "Enviar Mensaje"}
          </button>
          {error ? <span className="text-red-500 mt-2">{error}</span> : null}
        </form>
      </div>
    </div>
  );
};

export default NewMessage;
