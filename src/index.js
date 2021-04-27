import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//asadbek.us.auth0.com
//RbuwFt2gQ3DjjekpWWCCza7g9EUPX0sd
ReactDOM.render(
  <Auth0Provider
    domain="asadbek.us.auth0.com"
    clientId="RbuwFt2gQ3DjjekpWWCCza7g9EUPX0sd"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
