import createStore from "teaful";

export const { useStore: useCart } = createStore({ price: 0, items: [] });
export const { useStore: useCounter } = createStore({ count: 0 });