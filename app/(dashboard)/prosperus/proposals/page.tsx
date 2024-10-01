// import { redirect } from 'next/navigation';
// import Link from 'next/link';
// import { getUser, getUserProposals } from '@/lib/db/queries';
// import { Button } from '@/components/ui/button';

// export default async function ProposalsPage() {
//   const user = await getUser();

//   if (!user) {
//     redirect('/login');
//   }

//   const proposals = await getUserProposals(user.id);

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Your Proposals</h1>
//         <Link href="/prosperus/proposals/create">
//           <Button>Create New Proposal</Button>
//         </Link>
//       </div>
//       {proposals.length === 0 ? (
//         <p>You haven't created any proposals yet.</p>
//       ) : (
//         <ul className="space-y-4">
//           {proposals.map((proposal) => (
//             <li key={proposal.id} className="border p-4 rounded-lg">
//               <h2 className="text-xl font-semibold">{proposal.title}</h2>
//               <p className="text-gray-600 mt-2">{proposal.content.substring(0, 100)}...</p>
//               <div className="mt-2 text-sm text-gray-500">
//                 Created: {new Date(proposal.createdAt).toLocaleDateString()}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }