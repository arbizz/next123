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
import Image from "next/image";

// app/page.tsx
export default async function Tes() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://env-6771182.jh-beon.cloud";

  const res = await fetch(`${API_URL}/api/data`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Gagal fetch data dari backend");
  }

  // backend mengirim array langsung, bukan object dengan 'items'
  const data: { id: number; name: string }[] = await res.json();

  return (
    <div>
      <h1>Data dari Go Backend</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>

      <Image src="remote-data/fotobgmerah.jpg" alt="foto" width={120} height={20}></Image>
    </div>
  );
}
