import fintech from '../assets/icons/fintech.svg'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import config from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import { NavLink } from 'react-router-dom'




const Sidenav = () => {
  return (
    <nav className='sidenav box bg-3'>
      <img className='mb' src={fintech} alt="Fintech logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
            <NavLink to='/'>Resumo</NavLink>
          </span>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
            <NavLink to='/vendas'>Vendas</NavLink>

          </span>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
            Webhooks
          </span>
        </li>
        <li>
          <span>
            <img src={config} alt="" />
            Configurações
          </span>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
            Contato
          </span>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
            Sair
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
