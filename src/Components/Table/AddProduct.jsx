// import React, { Fragment, useState } from "react";

// function AddProduct() {
//   const [products, setProducts] = useState([]);

//   const [newProduct, setnewProduct] = useState({
//     title: "",
//     price: "",
//     image: "",
//     description: "",
//     category: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validasi data produk baru di sini jika diperlukan
//     // Misalnya, pastikan bahwa semua atribut telah diisi.
//     if (
//       !newProduct.title ||
//       !newProduct.price ||
//       !newProduct.description ||
//       !newProduct.image ||
//       !newProduct.category
//     ) {
//       alert("Harap isi semua informasi produk.");
//       return;
//     }

//     // Kirim permintaan POST untuk menambahkan produk baru ke API
//     fetch("https://fakestoreapi.com/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newProduct),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // Setelah berhasil menambahkan produk, tambahkan produk ke daftar produk di state
//         setProducts([...products, data]);

//         // Reset data produk baru
//         setnewProduct({
//           title: "",
//           price: 0,
//           description: "",
//           image: "",
//           category: "",
//         });
//       })
//       .catch((error) => {
//         console.error("Error adding new product:", error);
//       });
//   };

//   return (
//     <Fragment>
//       <div className=" p-4 bg-gray-100 dark:bg-gray-700">
//         <h2 className="text-xl font-semibold mb-2 text-white">
//           Tambah Produk Baru
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="image"
//                 className="block font-medium text-gray-700 dark:text-gray-300"
//               >
//                 Url/Link Gambar Produk:
//               </label>
//               <input
//                 type="text"
//                 id="image"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={newProduct.image}
//                 onChange={(e) =>
//                   setnewProduct({ ...newProduct, image: e.target.value })
//                 }
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="title"
//                 className="block font-medium text-gray-700 dark:text-gray-300"
//               >
//                 Nama Produk:
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={newProduct.title}
//                 onChange={(e) =>
//                   setnewProduct({ ...newProduct, title: e.target.value })
//                 }
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="description"
//                 className="block font-medium text-gray-700 dark:text-gray-300"
//               >
//                 Deskripsi Produk:
//               </label>
//               <input
//                 type="text"
//                 id="description"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={newProduct.description}
//                 onChange={(e) =>
//                   setnewProduct({
//                     ...newProduct,
//                     description: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="category"
//                 className="block font-medium text-gray-700 dark:text-gray-300"
//               >
//                 Kategori Produk:
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={newProduct.category}
//                 onChange={(e) =>
//                   setnewProduct({ ...newProduct, category: e.target.value })
//                 }
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="price"
//                 className="block font-medium text-gray-700 dark:text-gray-300"
//               >
//                 Harga produk:
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 className="mt-1 p-2 w-full border rounded-md"
//                 value={newProduct.price}
//                 onChange={(e) =>
//                   setnewProduct({
//                     ...newProduct,
//                     price: parseFloat(e.target.value),
//                   })
//                 }
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center justify-between w-1/2 pr-2">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Tambah Produk
//             </button>
//             {/* <button
//               type="submit"
//               className="ml-5 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//               onClick={hiddenHandler}
//             >
//               Batal
//             </button> */}
//           </div>
//         </form>
//       </div>
//     </Fragment>
//   );
// }

// export default AddProduct;
