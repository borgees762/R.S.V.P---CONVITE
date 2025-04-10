import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const handleConfirmar = () => {
    if (nome.trim() !== "") {
      setConfirmado(true);
    }
  };

  return (
    <div className="text-center p-8 max-w-md">
      <h1 className="text-3xl font-bold mb-4">Convite 🍷</h1>
      <p className="mb-6 text-lg">
        Uma noite só nossa, com vinho, clima e tudo que a gente quiser. Topa?
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
        <p className="text-green-400 mt-4 text-xl font-semibold">
          Presença confirmada, {nome}! ❤️
        </p>
      )}
    </div>
  );
}
