import { useEffect, useState } from 'react'
import { apiGetAllAdvertVendor } from '../service/adtverts';

const Table = () => {
   const [adverts, setAdvert] = useState([]);
  const fetchAds = async () => {
    try {
      const responseData = await apiGetAllAdvertVendor();
      console.log(responseData.data.items);
      setAdvert(responseData.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, {});

  return (
<>
  <div className="bg-gray-100 shadow-2xl p-5 rounded mt-8 overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Adverts</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {adverts?.slice(0, 10)?.map((advert) => (
          <tr
            key={advert.id}
            className="border-b hover:bg-gray-50 transition duration-150"
          >
            <td className="px-4 py-2">
              <img
                src={advert.image.url}
                alt={advert.title}
                className="w-[50px] h-[50px] rounded object-cover"
              />
            </td>
            <td className="px-4 py-2 text-green-700 font-medium">{advert.name}</td>
            <td className="px-4 font-medium  text-green-700 py-2">{advert.category}</td>
            <td className="px-4 py-2 font-semibold text-green-700">
              ₵{advert.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</>

  )
}

export default Table