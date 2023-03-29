import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export const Search = () => {

  const [search, setSearch] = useState("");

  const hanledChange = (e) => {
    setSearch(e.target.value)
  }

  const filter = () => {
    console.log(search)
  }

  return (
    <div className="flex justify-center mt-10 mx-auto">
      <div className="card w-96 bg-base-100 ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Busqueda</h2>
          <p>Recuerda usar enlaces de SoundCloud!</p>
          <div className="flex space-x-4">
            <input type="text" placeholder="https://soundcloud.com/..." className="input input-bordered w-full" value={search} onChange={ hanledChange }/>
            <button className="btn btn-primary " onClick={filter}><FiSearch /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
