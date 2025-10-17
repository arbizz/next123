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

  return (
    <div>
      <h1>Data dari Go Backend</h1>
      <Image src="remote-data/fotobgmerah.jpg" alt="foto" width={120} height={20}></Image>
    </div>
  );
}
