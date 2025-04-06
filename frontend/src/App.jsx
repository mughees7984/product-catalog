
// // import { useEffect, useState } from 'react';

// // function App() {
// //   const [items, setItems] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   const fetchItems = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/items?page=${page}&limit=3`);
// //       const data = await res.json();

// //       setItems(data.items);
// //       setTotalPages(data.totalPages);
// //       setError('');
// //     } catch (err) {
// //       setError('Failed to fetch items');
// //     }
// //     setLoading(false);
// //   };

// //   useEffect(() => {
// //     fetchItems();
// //   }, [page]);

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
// //       <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

// //       {loading ? (
// //         <p>Loading...</p>
// //       ) : error ? (
// //         <p className="text-red-500">{error}</p>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-4">
// //           {items.map((item) => (
// //             <div key={item.id} className="bg-white p-4 rounded-xl shadow">
// //               <h2 className="text-lg font-semibold">{item.name}</h2>
// //               <p className="text-gray-600 mt-2">{item.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       <div className="mt-6 flex gap-4">
// //         <button
// //           onClick={() => setPage((p) => Math.max(p - 1, 1))}
// //           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
// //           disabled={page === 1}
// //         >
// //           Previous
// //         </button>

// //         <span className="text-lg font-medium">Page {page} of {totalPages}</span>

// //         <button
// //           onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
// //           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
// //           disabled={page >= totalPages}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


// import { useEffect, useState } from 'react';

// function App() {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [search, setSearch] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');

//   const fetchItems = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`http://localhost:5000/api/items?page=${page}&limit=3&search=${searchQuery}`);
//       const data = await res.json();
//       setItems(data.items);
//       setTotalPages(data.totalPages);
//       setError('');
//     } catch (err) {
//       setError('Failed to fetch items');
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchItems();
//   }, [page, searchQuery]);

//   // Debounce search input
//   useEffect(() => {
//     const delay = setTimeout(() => {
//       setPage(1); // Reset to first page on new search
//       setSearchQuery(search);
//     }, 500); // wait 500ms after user stops typing

//     return () => clearTimeout(delay);
//   }, [search]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
//       <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-6 p-2 w-full max-w-md rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <>
//           {items.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
//               {items.map((item) => (
//                 <div key={item.id} className="bg-white p-4 rounded-xl shadow">
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-600 mt-2">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 mt-4">No items found.</p>
//           )}
//         </>
//       )}

//       <div className="mt-6 flex gap-4">
//         <button
//           onClick={() => setPage((p) => Math.max(p - 1, 1))}
//           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//           disabled={page === 1}
//         >
//           Previous
//         </button>

//         <span className="text-lg font-medium">Page {page} of {totalPages}</span>

//         <button
//           onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//           disabled={page >= totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/items?page=${page}&limit=3&search=${searchQuery}`);
      const data = await res.json();
      setItems(data.items);
      setTotalPages(data.totalPages);
      setError('');
    } catch (err) {
      setError('Failed to fetch items');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [page, searchQuery]);

  const handleSearch = () => {
    setPage(1); // Reset to first page
    setSearchQuery(search);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

      <div className="mb-6 w-full max-w-md flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 flex-grow rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-4">No items found.</p>
          )}
        </>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="text-lg font-medium">Page {page} of {totalPages}</span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
