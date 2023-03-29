export const Imagen = ({urlImgen}) => {
  return (
    <div className="avatar">
      <div className="w-28 rounded-full shadow-xl">
        <img src={urlImgen} alt="music-cover" id="cover" />
      </div>
    </div>
  )
}