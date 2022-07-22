import React from 'react';
import rederer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = rederer.create(<ProductImage img="./prueba.png" />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = rederer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});