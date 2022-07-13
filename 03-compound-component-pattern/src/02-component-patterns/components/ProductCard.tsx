import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product });
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
