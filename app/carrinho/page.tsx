// app/cart/page.tsx ou pages/cart.tsx
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../lib/store";
import {
  clearCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../lib/cartSlice";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./cart.scss";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Função para finalizar a compra
  const handleCheckout = () => {
    dispatch(clearCart());
  };

  // Calcular o total do carrinho
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Link href="/" className="back-button">
          <Image
            src="/Arrow - Left.png"
            alt="Icone de Voltar"
            width={33}
            height={33}
            className="cart-item-image"
          />
        </Link>
        <h1>Mochila de Compras</h1>
      </div>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="cart-items">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="cart-item"
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }} // Animação de saída
                  transition={{ duration: 0.3 }}
                >
                  <div className="cart-insideflex">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="cart-item-image"
                    />
                    <div className="cart-desc">
                      <h3>{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <p className="item-price">BRL {item.price}</p>
                      <div className="quantity-control">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="quantity-button"
                        >
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="quantity-button"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="remove-button"
                  >
                    <Image
                      src="/Delete.png"
                      alt="Icone de Deletar"
                      width={25.8}
                      height={25.8}
                    />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="cart-total">
            <h2>TOTAL </h2>
            <h2>BRL {totalPrice.toFixed(2)}</h2>
          </div>
        </>
      )}
      <Link href="/" onClick={handleCheckout} className="checkout-button">
        FINALIZAR COMPRA
      </Link>
    </div>
  );
}
