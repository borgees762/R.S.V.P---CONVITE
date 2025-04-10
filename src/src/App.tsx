import { useState, useRef } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [confirmado, setConfirmado] = useState(false);
  const [mostrarSurpresa, setMostrarSurpresa] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleConfirmar = () => {
    if (nome.trim() !== "") {
      setConfirmado(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="text-center p-8 max-w-md min-h-screen flex items-center justify-center mx-auto bg-black text-white">
      {/* Áudio (cover de "Earned It") */}
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_9765013899.mp3?filename=earned-it-cover-21699.mp3" />

      <div>
        <h1 className="text-3xl font-bold mb-4">Convite 🍷</h1>
        <p className="mb-6 text-lg">
          Uma noite só nossa, com vinho, clima  
          e tudo que a gente quiser. Topa?
        </p>

        {!confirmado ? (
          <>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-600 w-full text-white"
            />
            <button
              onClick={handleConfirmar}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow transition"
            >
              Confirmar presença
            </button>
          </>
        ) : (
          <div>
            <p className="text-green-400 mt-4 text-xl font-semibold">
              Presença confirmada, {nome}! ❤️
            </p>

            {!mostrarSurpresa ? (
              <button
                onClick={() => setMostrarSurpresa(true)}
                className="mt-6 bg-white text-black px-4 py-2 rounded-xl shadow hover:bg-pink-200 transition"
              >
                Tenho uma surpresa pra você... 👀
              </button>
            ) : (
              <p className="text-red-400 text-lg mt-4 animate-pulse">
                Esse é só o começo... 😈🍷
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

