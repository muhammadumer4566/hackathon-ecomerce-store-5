'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber?: string; // Optional
  cardExpiry?: string; // Optional
  cardCVV?: string;    // Optional
}

interface CartItem {
  id: string;
  title: string;
  quantity: number;
  discountedPrice: number;
}

interface OrderDetails {
  customerInfo: CustomerInfo;
  cartItems: CartItem[];
}

interface OrderContextType {
  orderDetails: OrderDetails | null;
  setOrderDetails: (details: OrderDetails) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  return (
    <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
