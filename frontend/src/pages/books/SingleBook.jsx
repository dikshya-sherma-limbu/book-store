import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";
import getImageUrl from "../../utils/getImageUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
export default function SingleBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  console.log("category", book);
  return (
    <div className="md:max-w-lg shadow-xl p-5 justify-center items-center flex flex-col mx-auto  ">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
      <div className="">
        <div>
          <img
            src={`${getImageUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong>{" "}
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1 "
        >
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
