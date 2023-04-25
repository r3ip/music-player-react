export const Imagen = ({urlImagen, urlDownload}) => {
  return (
    <div className="avatar">
      <div className="w-28 rounded-full shadow-xl ring ring-primary ring-offset-base-100 ring-offset-2">
        <a href={urlDownload} target={"_blank"}>
          <img src={urlImagen} alt="music-cover" id="cover" />
        </a>
      </div>
    </div>
  )
}