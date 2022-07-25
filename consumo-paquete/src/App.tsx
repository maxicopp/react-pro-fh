
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mlc-product-card';

import './App.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
        {
          ({ increaseBy, count, isMaxCountReached, reset, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  );
}

export default App;
