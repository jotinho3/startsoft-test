// app/page.tsx ou pages/page.tsx

'use client';

import { useState } from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../lib/cartSlice';
import { motion } from 'framer-motion';
import './page.scss';

const fetchProducts = async (limit: number) => {
  const response = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=${limit}`
  );
  const data = await response.json();
  return data;
};

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(12); // Começa com limite de 20
  const { data, isLoading, isError, isFetching } = useQuery(['products', limit], () => fetchProducts(limit), {
    keepPreviousData: true,
  });

  const [addedStates, setAddedStates] = useState<Record<number, boolean>>({});

  const handleLoadMore = () => {
    if (limit < 60) {
      setLimit((prevLimit) => Math.min(prevLimit + 4, 60)); // Aumenta o limite em 4, até no máximo 60
    }
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image, description: product.description }));
    
    setAddedStates((prev) => ({ ...prev, [product.id]: true }));

    setTimeout(() => {
      setAddedStates((prev) => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar os produtos.</p>;

  // Cálculo da porcentagem para a barra de progresso
  const progressPercentage = (limit / 60) * 100;

  return (
    <div className="container">
      <div className="grid">
        {data?.data.map((product: any, index: number) => {
          const isAdded = addedStates[product.id];

          return (
            <motion.div
              key={product.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={296}
                height={258}
                className="image"
              />
              <h3>{product.name}</h3>
              <p className="productDescription">{product.description}</p>
              <p className="price">R$ {product.price}</p>
              <motion.button
                onClick={() => handleAddToCart(product)}
                className="addToCartButton"
                style={{
                  backgroundColor: isAdded ? '#28a745' : '#FF8310',
                  color: isAdded ? '#fff' : '#fff',
                }}
                animate={{ scale: isAdded ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isAdded ? 'ADICIONADO AO CARRINHO!' : 'COMPRAR'}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Barra de Progresso */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }} />
      </div>

      {limit < 60 && (
        <button onClick={handleLoadMore} className="loadMoreButton">
          Carregar Mais
        </button>
      )}
    </div>
  );
}
