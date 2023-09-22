import React, { Fragment, useState, useEffect } from "react";

import EditProduct from "./EditProduct";

function Table() {
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [newProduct, setnewProduct] = useState({
    id: Math.floor(Math.random() * 100000),
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });
  const [editProduct, setEditProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
    id: null,
  });

  const handleEditClick = (product) => {
    setEditProduct({
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
      id: product.id,
    });
    setIsEditVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi data produk baru di sini jika diperlukan
    // Misalnya, pastikan bahwa semua atribut telah diisi.
    if (
      !newProduct.title ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.image ||
      !newProduct.category
    ) {
      alert("Harap isi semua informasi produk.");
      return;
    }

    // Kirim permintaan POST untuk menambahkan produk baru ke API
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // Setelah berhasil menambahkan produk, tambahkan produk ke daftar produk di state
        setProducts([...products, data]);

        // Reset data produk baru
        setnewProduct({
          title: "",
          price: 0,
          description: "",
          image: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error("Error adding new product:", error);
      });
    console.log(newProduct);
    setShowAddProduct(false);
  };

  const addHandler = () => {
    setShowAddProduct(true);
  };

  const hiddenAddHandler = () => {
    setShowAddProduct(false);
  };

  const removeHandler = () => {
    setDeleteMessage(true);
  };

  const hiddenRemoveHandler = () => {
    setDeleteMessage(false);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const RemoveHandler = () => {};

  const handleRemove = (productId) => {
    const updatedProducts = [...products];

    const index = updatedProducts.findIndex(
      (product) => product.id === productId
    );

    if (index !== -1) {
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };

  return (
    <Fragment>
      {showAddProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="inset-0 grid place-items-start place-content-center w-fit h-fit p-10 bg-opacity-75 z-50 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Tambah Produk Baru
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="image"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Url/Link Gambar Produk:
                  </label>
                  <input
                    type="text"
                    id="image"
                    className="mt-1 p-2 border rounded-md w-96"
                    value={newProduct.image}
                    onChange={(e) =>
                      setnewProduct({ ...newProduct, image: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nama Produk:
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="mt-1 p-2 border rounded-md w-96"
                    value={newProduct.title}
                    onChange={(e) =>
                      setnewProduct({ ...newProduct, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Deskripsi Produk:
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="mt-1 p-2 border rounded-md w-96"
                    value={newProduct.description}
                    onChange={(e) =>
                      setnewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Kategori Produk:
                  </label>
                  <input
                    type="text"
                    id="category"
                    className="mt-1 p-2 border rounded-md w-96"
                    value={newProduct.category}
                    onChange={(e) =>
                      setnewProduct({ ...newProduct, category: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block font-medium text-gray-700 dark:text-gray-300"
                  >
                    Harga Produk:
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="mt-1 p-2 border rounded-md w-96"
                    value={newProduct.price}
                    onChange={(e) =>
                      setnewProduct({
                        ...newProduct,
                        price: parseFloat(e.target.value),
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between pr-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Tambah Produk
                </button>
                <button
                  className="ml-5 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={hiddenAddHandler}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isEditVisible && (
        <EditProduct
          initialProduct={editProduct}
          onSaveEdit={(updatedProduct) => {
            fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
              method: "PUT",
              body: JSON.stringify(updatedProduct),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((json) => {
                console.log("Product updated:", json);
                const updatedProducts = products.map((p) =>
                  p.id === updatedProduct.id ? updatedProduct : p
                );
                setProducts(updatedProducts);
                setIsEditVisible(false);
              })
              .catch((error) => console.error(error));
          }}
          onCancelEdit={() => setIsEditVisible(false)}
        />
      )}
      {/* {deleteMessage && (
        <div className="fixed grid place-content-center place-items-center">
          <p>Yakin Ingin Menghapus Data Ini?</p>
          <div>
            <button
              onClick={() => handleRemove(products.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Hapus
            </button>
            <button onClick={hiddenRemoveHandler}>Tidak</button>
          </div>
        </div>
      )} */}
      <div className="relative overflow-x-hidden shadow-md">
        {/* <p className="right-0 top-0 absolute text-white">Edit / Remove</p> */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
            <tr>
              <th scope="col" className="py-3 pl-6">
                Product image
              </th>
              <th scope="col" className="py-3 pl-6">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 flex my-auto">
                <div className="flex items-center">Description</div>
                <button
                  className="bg-blue-600 w-24 h-10 mx-auto text-white"
                  onClick={addHandler}
                >
                  Add Product
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Category
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Price
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 grid place-items-center place-content-start"
              >
                <p className="flex items-center">Edit</p>
                <p>Remove</p>
              </th>
            </tr>
          </thead>
          {products.map((product) => {
            return (
              <tbody>
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="pl-6 py-4 font-medium h-auto text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-auto w-max pr-10"
                    />
                  </th>

                  <td className="px-2 py-4 text-start">{product.title}</td>
                  <td className="px-2 py-4 text-justify">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 capitalize">{product.category}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="font-medium bg-blue-600 dark:bg-blue-500 text-white w-16 hover:underline"
                      onClick={() => handleEditClick(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="font-medium bg-red-600 dark:bg-red-500 text-white w-16 hover:underline"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </Fragment>
  );
}

export default Table;
