import GraficosVendas from '../Components/GraficosVendas';
import { useData } from '../Context/DataContext'

const Resumo = () => {
  const { data } = useData()

  if (data === null) return null;
  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <h2>Vendas</h2>
          <span>
            {data
              .filter((i) => i.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className='box'>
          <h2>Recebido</h2>
          <span>
            {data
              .filter((i) => i.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className='box'>
          <h2>Processando</h2>
          <span>
            {data
              .filter((i) => i.status == 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>

      <p><strong>Totais</strong></p>

      <div className="flex">
        <div className="flex mb box">
          <span>
            <strong>Pagos</strong>: {data.filter((i) => i.status === "pago").length}
          </span>
        </div>
        <div className="flex mb box">
          <span>
            <strong>Processando</strong>: {data.filter((i) => i.status === "processando").length}
          </span>
        </div>
        <div className="flex mb box">
          <span>
            <strong>Falha</strong>: {data.filter((i) => i.status === "falha").length}
          </span>
        </div>
        <div className="flex mb box">
          <span>
            <strong>Boleto</strong>: {data.filter((i) => i.pagamento === "boleto").length}
          </span>
        </div>
        <div className="flex mb box">
          <span>
            <strong>Cartão</strong>: {data.filter((i) => i.pagamento === "cartão").length}
          </span>
        </div>
        <div className="flex mb box">
          <span>
            <strong>Pix</strong>: {data.filter((i) => i.pagamento === "pix").length}
          </span>
        </div>

      </div>
      <div className="box mb">
        <GraficosVendas data={data} />
      </div>
    </section>

  )
}

export default Resumo
