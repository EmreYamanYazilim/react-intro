import React from 'react'

function Product({productName, price}) { // yada props yazarak div içindede props.price yazarakta değerleri verebiliriz

  return (
    <div>
      <div>Ürün Bilgileri</div>
      <div>
        <div>isim : {productName} </div>  
        <div>Fiyat : {price} </div>
      </div>
    </div>
  )
}

export default Product
