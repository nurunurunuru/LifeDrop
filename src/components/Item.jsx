import React from 'react'
import { Link } from 'react-router'

const Item = ({ product }) => {
  // Description কে line-by-line bullets এ split করা
  const descriptionLines = product.description.split('\n');

  return (
    <div className='ring-1 ring-slate-900/5 rounded-xl bg-white overflow-hidden'>
      <Link to={`/product/${product._id}`} className='flexCenter relative'>
        <img src={product.image[0]} alt="productImg" />
      </Link>
      <div className='p-3'>
        <h4 className='h4 line-clamp-1 !my-0'>{product.name}</h4>
        <div className='flexBetween pt-1'>
          <p className='font-bold'>{product.category}</p>
          <h5 className='h5 text-secondary pr-2'>Age: {product.price}</h5>
        </div>

        {/* Bullet style description */}
        <ul className='list-disc list-inside py-1'>
          {descriptionLines.map((line, index) => (
            <li key={index} className='text-sm text-gray-700'>
              {line}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Item
