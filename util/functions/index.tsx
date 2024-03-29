import { IProduct } from '../../typescript';

export const renderWhiteSpace = (item: string) =>
  item === ' ' ? '\u00A0' : item;

export const formatPrice = (price: number) => `${(price / 100).toFixed(2)} €`;

export const convertNumberToArrayOfNumbers = (num: number) =>
  Array.from(Array(num).keys());

export const amountOfProducts = (n: number, products: IProduct[]) =>
  products.slice(0, n);
