import axios from 'axios'
import React,{useEffect, useState} from 'react'
import getConfig from '../../utils/getConfig' 
import PurchaseCard from '../purchases/PurchaseCard'
import './styles/purchase.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()
  
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])
  console.log(purchases)
  return (
    <div className="purchases">
      <h2 className='purchases-title'>My purchases</h2>
      <div className="purchases-container">
        {
          purchases?.map(purchase =>(
            <PurchaseCard
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Purchases