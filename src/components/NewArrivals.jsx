import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const NewArrivals = () => {
  const { products } = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([])

  useEffect(() => {
    if (products?.length) {
      setNewArrivals(products.slice(0, 10))
    }
  }, [products])

  return (
    <section className='max-padd-container py-16 bg-gradient-to-b from-red-50 via-white to-white'>
      <Title title={'Blood Donor'} titleStyles={'text-center'} />

      {/* Grid */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {newArrivals.map((product) => (
          <Item key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
