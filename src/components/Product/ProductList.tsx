import { useEffect, useState } from 'react';
import { get } from '../../services/api.service';
import '../../styles/ProductStyle.css'; 

export default function Products() {
  const [products, setProducts] = useState<any[]>();
  useEffect(() => {
    const getProducts = async () => {
      const results = await get('products');
      if (results && results.data.length) setProducts(results.data);
    };
    getProducts();
  }, []);
  return (
    <table className='product-list'>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
      {products &&
        products.map((product: any) => {
          return (
            <tr>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <img src= {product?.images[0]} alt={product.title} height={'40px'} width={'40px'} loading='eager'/>
            </tr>
          );
        })}
    </table>
  );
}
