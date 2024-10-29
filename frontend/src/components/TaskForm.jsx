 

export const TaskForm = () => {


  return (
    <div className="bg-zinc-800 p-10 w-full rounded-md max-w-md">
      <form>
        <h5 className="font-bold">Titulo</h5>
        <input type="text"
         className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
         placeholder="Titulo"
        />
        <h5 className="font-bold">Descripcion</h5>
        <textarea type="text"

        className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
        placeholder="Descripción"
        />
        
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">Registrar </button>


      </form>
    </div>
    
  )
}
