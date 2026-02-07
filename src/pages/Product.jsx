import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/ShopContext'
import Footer from '../components/Footer'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)

  const [product, setProduct] = useState({})
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = () => {
    if (!products || products.length === 0) return

    const selected = products.find((item) => item._id === productId)
    if (selected) {
      setProduct(selected)
      setImage(selected.image?.[0] || '')
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  if (!product || !product.image) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    )
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 mt-10">

        {/* Main Card */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-6 xl:p-10">

          {/* Left - Image */}
          <div>
            <div className="bg-slate-50 p-5 rounded-3xl shadow-inner">

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt="Selected"
                  className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="flex gap-3 justify-center mt-4">
                {product.image.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    onClick={() => setImage(item)}
                    className={`w-16 h-16 rounded-xl object-cover cursor-pointer border-2 transition 
                    ${image === item ? 'border-red-500 scale-105' : 'border-gray-200 hover:border-red-400'}`}
                    alt="thumb"
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Right - Info */}
          <div>

            <h1 className="text-3xl xl:text-4xl font-bold text-slate-900 mb-3">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center justify-between mb-6">
              <p className="text-red-600 font-bold">🩸LifeDrop</p>
              <p className="text-3xl font-semibold text-red-500">
                {currency}{product.price}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl mb-6 border">
  <h3 className="font-semibold mb-3 text-lg">🧾 Donor Information</h3>

  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
    {product.description
      ?.split('\n')
      .map((line, index) => {
        const [key, value] = line.split(':')
        return (
          <li key={index} className="flex gap-2">
            <span className="font-semibold">{key}:</span>
            <span>{value}</span>
          </li>
        )
      })}
  </ul>
</div>


            {/* Blood Group */}
            {product.sizes && (
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Blood Group</h3>
                <div className="flex flex-wrap gap-3">
                  {[...product.sizes]
                    .sort((a, b) => {
                      const order = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
                      return order.indexOf(a) - order.indexOf(b)
                    })
                    .map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setSize(item)}
                        className={`px-5 py-2 rounded-xl border font-semibold transition
                        ${size === item
                            ? 'bg-red-500 text-white shadow-lg scale-105'
                            : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                          }`}
                      >
                        {item}
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-lg transition mb-6"
            >
              Request Blood
            </button>

            {/* Extra Info */}
            <div className="border-t pt-4 text-sm text-gray-600 leading-relaxed">
              <p>
                🩸 এক ব্যাগ রক্ত, একটি জীবন — আপনার সামান্য দানই হতে পারে
                কারো নতুন সকাল ❤️ আজই রক্ত দিন, জীবন বাঁচান
              </p>
            </div>

          </div>
        </div>

        {/* Related */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold mb-6">
            Related Donors
          </h2>
          <RelatedProducts
            category={product.category}
            subCategory={product.subCategory}
          />
        </div>

      </div>

      <Footer />
    </section>
  )
}

export default Product
