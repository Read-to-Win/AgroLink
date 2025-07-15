import React from 'react'

const Table = () => {
  return (
    <>
      <div className="bg-gray-100 shadow-2xl p-5 rounded mt-8">
        {/* <table className="w-full">
          <tr>
            <th className="text-left">Image</th>
            <th className="text-left">Adverts</th>
            <th className="text-left">Category</th>
            <th className="text-left">Price</th>
          </tr>
          {adverts?.slice(0, 10)?.map((advert) => (
            <tr key={advert.id} className="">
              <td className="py-2">
                <img
                  src={advert.image.url}
                  alt={advert.title}
                  className="w-[50px] h-[50px] rounded object-cover"
                />
              </td>
              <td className="py-2">{advert.title}</td>
              <td className="py-2">{advert.category}</td>
              <td className="py-2">${advert.price}</td>
            </tr>
          ))}
        </table> */}
      </div>
    </>
  )
}

export default Table