// export default async function TesFetch() {
//   const res = await fetch("http://localhost:8080/data", {
//     cache: "no-store", // biar nggak di-cache
//   });

//   if (!res.ok) {
//     throw new Error("Gagal fetch data dari backend Go");
//   }

//   const data: { items: string[] } = await res.json();

//   return (
//     <div>
//       <h1>Data dari Go Backend</h1>
//       <ul>
//         {data.items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// app/page.tsx
export default async function TesFetch() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Gagal fetch data dari backend");
  }

  const data: { items: string[] } = await res.json();

  return (
    <div>
      <h1>Data dari Go Backend</h1>
      <ul>
        {data.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}