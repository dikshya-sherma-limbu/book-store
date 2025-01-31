import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/ordersApi";
export default function OrderPage() {
  const { currentUser } = useAuth();
  console.log("Current User", currentUser);
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrdersByEmailQuery(currentUser?.email);
  console.log("Orders", orders);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h2>Error getting Orders.....</h2>;
  return (
    <div className="container mx-auto p-6 flex flex-col items-center shadow-md w-1/2">
      <h2 className="text-2xl font-semibold mb-4 ">Your Orders</h2>
      {orders.length === 0 ? (
        <h2>No orders till now :/</h2>
      ) : (
        orders.map((order, index) => (
          <div>
            <h1>OrderId: {order?._id}</h1>
            <h3>Item: {order.name}</h3>
            <h3>Price: {order.totalPrice}</h3>
            <h3>Quantity: {order.quantity}</h3>
            <h3>
              Shipping Address:
              <p>
                {order.address.city}
                {order.address.state}
                {order.address.country}
                {order.address.zipcode}
              </p>
            </h3>
            <h3>Payment Status: {order.paymentStatus}</h3>
          </div>
        ))
      )}
    </div>
  );
}
