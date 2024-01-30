// import { cn } from "@/lib/utils";
// import Image from "next/image";

// function Project({
//   title,
//   description,
//   tags,
// }: {
//   title: string;
//   description: string;
//   tags?: string[];
// }) {
//   return (
//     <div className="flex flex-row rounded-xl p-4 bg-gray-50 ">
//       <div className="space-y-3">
//         <h3 className="text-2xl font-bold">{title}</h3>
//         <p>{description}</p>
//         <div className="space-x-2">
//           {tags?.map((type) => (
//             <div
//               className={cn(
//                 "inline-flex rounded-lg text-white text-xs p-2",
//                 type == "CSS" ? "bg-pink-400" : "bg-blue-400"
//               )}
//             >
//               {type}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="w-1/4 aspect-square bg-gray-200 rounded"></div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <main className="max-w-screen-2xl m-auto space-y-20">
//       <div className="min-h-screen">
//         <h1 className="text-9xl text-white">Ingmar van Hulzen</h1>
//         <p>
//           Passionatate developer with knowledge of front-end and backend
//           development.
//         </p>
//       </div>
//       <div className="grid grid-cols-2 gap-4 min-h-80">
//         <div className="flex flex-row rounded-xl p-4 bg-gray-50 ">
//           <div className="space-y-3">
//             <h3 className="text-2xl font-bold">Scroll Indication</h3>
//             <p>
//               A simple project to indicate that there is more content on the
//               page. Typicaly used within articles where the spaces between
//               paragarps could lead to missing content.
//             </p>
//             <div className="space-x-2">
//               <div className="inline-flex rounded-lg text-white text-xs p-2 bg-pink-400">
//                 CSS
//               </div>
//               <div className="inline-flex rounded-lg text-white text-xs p-2 bg-blue-400">
//                 React
//               </div>
//             </div>
//           </div>
//           <div className="w-1/4 aspect-square bg-gray-200 rounded"></div>
//         </div>
//         <div className="bg-gray-50 rounded-xl p-4"></div>
//         <div className="bg-gray-50 rounded-xl p-4"></div>
//         <div className="bg-gray-50 rounded-xl p-4"></div>
//       </div>
//     </main>
//   );
// }
