import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const PopularProducts = () => {

  const { products } = useContext(ShopContext)
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    if (products?.length) {
      const data = products.filter(item => item.popular)
      setPopularProducts(data.slice(0, 5))
    }
  }, [products])

  return (
    <section className='max-padd-container py-16 bg-gradient-to-b from-white via-white to-red-50'>
      <Title title={'Negative Blood Type Donor'} titleStyles={'text-center'} />

      {/* Grid */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {popularProducts.map(product => (
          <Item key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
