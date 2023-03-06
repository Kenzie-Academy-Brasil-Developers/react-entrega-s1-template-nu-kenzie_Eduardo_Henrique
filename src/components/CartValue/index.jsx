import './index.css'
export function CartValue({items}){
  //fazer um map para os de saida e para os de entrada e logo apos subtrair eles
    const itemValueEnter = items.map(item =>
      item.typeValue == 'entrada' && item.value)
      
    const someValueEnter = itemValueEnter.reduce((valueOld,valueNew)=>{
       return valueOld + valueNew
    })
    
    const itemValueExit = items.map(item =>
        item.typeValue == 'despesa' && item.value)

    const someValueExit = itemValueExit.reduce((valueOld,valueNew)=>{
       return valueOld + valueNew
    })

    const subTotal = someValueEnter - someValueExit
  
 return (
<div className="container--total">
 <div className="container--value--total">
    <div className='div--total--some'>
      <h3>Valor total</h3>
      <span>R$ {subTotal.toFixed(2)}</span>
    </div>
    <span>O valor se refere ao saldo</span>
  </div>
</div>)
}