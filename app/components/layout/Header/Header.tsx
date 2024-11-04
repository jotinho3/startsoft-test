// components/Header.tsx
import "./Header.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../../lib/store"; // ajuste o caminho conforme necessário
import { CartItem } from "../../../types/Cart"; // importe a interface CartItem
import Link from "next/link"; // Importando Link
import { motion } from "framer-motion"; 

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  // Calcular o número total de itens no carrinho
  const totalItems = cartItems.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__icon">
          <Image
            src="/logo 1.png"
            alt="Logo Starsoft Icone"
            width={101}
            height={38}
          />
        </div>
        <Link href="/carrinho"> {/* Usando Link para redirecionar para a página do carrinho */}
          <div className="header__shopcart">
            <Image
              src="/Bag.png"
              alt="Carrinho Icone"
              width={33}
              height={33}
            />
            {totalItems > 0 && (
              <motion.div
                className="header__cartCount"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { duration: 0.3 } }} // Animação ao aparecer
                exit={{ scale: 0 }} // Animação ao sair
              >
                {totalItems}
              </motion.div>
            )}
          </div>
        </Link>
      </nav>
    </header>
  );
}
