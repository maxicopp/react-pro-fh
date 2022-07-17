import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string;
    product: Product;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });
    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
