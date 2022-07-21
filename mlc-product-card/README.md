# MLC-Product-Card

Este es un paquete de pruebas de despligue en NPM

### Maximiliano Cóppola

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mlc-product-card';
```

```
<ProductCard key={product.id} product={product} initialValues={{ count: 4, maxCount: 10 }}>
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
```