// types.ts (ou um arquivo semelhante onde você define os tipos)
export interface CartItem {
  id: number;          // ID do produto
  name: string;       // Nome do produto
  price: number;      // Preço do produto
  quantity: number;   // Quantidade do produto no carrinho
  image: string;      // URL da imagem do produto
  description: string;
}
