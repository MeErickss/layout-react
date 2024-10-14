import { IconMinus, IconPlus } from "@tabler/icons-react";
import { Pagina } from "../../components/Pagina";
import { useState } from "react";

export function Tradutor() {
  const [Caracteres, setCaracteres] = useState(0);
  const [Texto, setTexto] = useState("");
  const [Traducao, setTraducao] = useState("");


  async function API(text) {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=pt-br|en-us`
    );
    const data = await response.json();
    return data.responseData.translatedText;
  }


  async function traduzir() {
    if (Texto.trim() === "") {
      alert("Por favor, insira um texto para traduzir.");
      return;
    }
    try {

      const translatedText = await API(Texto);
      setTraducao(translatedText);
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      setTraducao("Erro na tradução. Tente novamente.");
    }
  }

  return (
    <Pagina titulo="Tradutor" subtitulo="Tradutor no React">
        <div className="w-full h-full flex flex-col justify-start items-start p-5 gap-5">

            <h1 className="text-2xl font-bold text-center mb-6">Tradutor</h1>

            <div className="flex w-full h-full gap-4">
                <div className="w-1/3 h-52 relative">

                    <label className="block text-gray-700 font-bold mb-2">Português</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md h-44 resize-none text-black pr-20"
                      placeholder="Escreva aqui..."
                      maxLength={249}
                      onChange={(event) => {
                        setTexto(event.target.value);
                        setCaracteres(event.target.value.length + 1);
                    }}
                    ></textarea>
                    <span className="absolute bottom-2 left-2 text-sm text-gray-400">
                      {Caracteres}/250
                    </span>
                    <button
                      className="absolute bottom-2 right-2 bg-orange-400 text-white font-bold py-2 px-3 rounded hover:bg-orange-500 focus:outline-none"
                      onClick={traduzir}
                    >
                      Traduzir
                    </button>
                </div>

                <div className="w-1/3">
                    <label className="block text-gray-700 font-bold mb-2">Inglês</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md h-44 resize-none text-black"
                      placeholder="Tradução..."
                      value={Traducao}
                      readOnly
                    ></textarea>
                </div>
            </div>
      </div>
    </Pagina>
  );
}
