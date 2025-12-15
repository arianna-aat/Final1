import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";

function Comentarios() {
  const [texto, setTexto] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [editado, setEditado] = useState(null);
  const [nuevoTexto, setNuevoTexto] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comentarios"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setComentarios(data);
    });
    return () => unsubscribe();
  }, []);
  const edicion = async (id) => {
    if (!nuevoTexto.trim()) return;
    await updateDoc(doc(db, "comentarios", id), {
      texto: nuevoTexto
    });
    setEditado(null);
    setNuevoTexto("");
  };
  const enviarComentario = async (e) => {
    e.preventDefault()
    if (!texto.trim()) return;
    await addDoc(collection(db, "comentarios"), { texto });
    setTexto("");
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "comentarios", id));
  };
  return (
    <div className="min-h-screen
      flex flex-col
      items-center justify-center bg-blue-200">
      <div className="flex flex-col rounded-2xl mx-auto w-100 bg-gray-200 p-10 text-xl">
        <h2 className="font-bold text-black text-center text-3xl mb-10">Comentarios</h2>

        <textarea
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Escribe un comentario..."
          className="border-gray-400 rounded-xl text-gray-800 p-1 mr-10 mb-4"
        />

        <button
          onClick={enviarComentario}
          className="bg-blue-500 text-white rounded-xl px-4 py-2 mb-6"
        >
          Enviar
        </button>

        <div>
          {comentarios.map(c => (
            <div
              key={c.id}
              className="border rounded-xl m-3 p-2 flex items-center justify-between"
            >
              {editado === c.id ? (
                <div>
                  <input
                    type="text"
                    value={nuevoTexto}
                    onChange={(e) => setNuevoTexto(e.target.value)}
                    className="border p-1 rounded mr-2 flex-1"
                  />
                  <button
                    onClick={() => edicion(c.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 "
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditado(null)}
                    className="bg-gray-800 text-white px-2 py-1 rounded mr-2"
                  >
                    Listo
                  </button>
                </div>
              ) : (
                <>
                  <span className="flex-1">{c.texto}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { setEditado(c.id); setNuevoTexto(c.texto); }}
                      className="bg-yellow-400 text-white px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
      <div className="bg-blue-600 p-3 text-xl fixed bottom-4 right-4 rounded-lg shadow-lg">
         <a href="http://localhost:5173/"  class="text-white text-2xl font-semibold transition 
        hover:text-yellow-300 hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.9)]" >
         Regresar
        </a>
      </div>
    </div>
  );
}

export default Comentarios;