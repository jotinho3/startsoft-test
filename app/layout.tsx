'use client'

import './layout.scss'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import store from '../lib/store' // ajuste o caminho conforme necessário

type LayoutProps = {
  children: ReactNode
}

// Instancia um QueryClient fora do componente para evitar recriação em cada renderização
const queryClient = new QueryClient()

export default function RootLayout({ children }: LayoutProps) {
  return (
    <Provider store={store}>
    <html lang="pt-BR">
      <head>
        <title>Meu Projeto Next.js</title>
        <meta name="description" content="Descrição do site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
    </Provider>
  )
}
