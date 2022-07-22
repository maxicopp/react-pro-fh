import React from 'react';
import rederer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = rederer.create(<ProductTitle title="Custom product" className="custom-class" />);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = rederer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>);
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});