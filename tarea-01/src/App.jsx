import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    /* Variables principales */
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("joke");

    /* Función para Obtener Chistes */
    const getJoke = async () => {
        try {
            setType("joke");
            setLoading(true);
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            setText(data.joke);
        } catch (error) {
            setText("Hubo un problema obteniendo el chiste.");
        } finally {
            setLoading(false);
        }
    };

    /* Función para Obtener Citas */
    const getQuote = async () => {
        try {
            setType("quote");
            setLoading(true);
            const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes/random");
            const data = await response.json();
            setText(data.data[0].quoteText);
        } catch (error) {
            setText("Hubo un problema obteniendo la cita.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <>
        <section>
            <header className="bg-slate-100 rounded-xl dark:bg-slate-800 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 text-center max-w-md">
                <h1 className="font-semibold text-white">¿Chiste ó Citas?</h1>
                <div className="text-center">
                    <button onClick={getJoke} className="m-2">Chiste</button>
                    <button onClick={getQuote} className="m-2">Cita</button>
                </div>
            </header>
            <div className="card max-w-md">
                {
                    type === "joke" ? (
                        <span className="text-2xl text-orange-300"><em>Chiste</em></span>
                    ) : (
                        <span className="text-2xl text-orange-300"><em>Cita</em></span>
                    )
                }
                {loading ? (
                    <p className="text">Cargando...</p>
                ) : (
                    <p>{`${text}`}</p>
                )}
            </div>
        </section>
        </>
    );
}

export default App;
