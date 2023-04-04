import {AiOutlineGithub} from 'react-icons/all'

export const Footer = () => {
  return (
    <footer className="footer footer-center p-4">
      <div>
        <p>Creado por: <strong>Pier Valenzuela</strong> <a href="https://github.com/r3ip/" target={"_blank"}><AiOutlineGithub className="inline w-6 h-6"/></a></p>
      </div>
    </footer>
  )
}
