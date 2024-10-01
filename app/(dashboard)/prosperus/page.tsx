import { redirect } from 'next/navigation';
import { getUser } from '@/lib/db/queries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, DollarSign, ChartBar, User } from 'lucide-react';
import Link from 'next/link';

const dashboardItems = [
  { title: 'Proposals', icon: FileText, description: 'Create and manage your business proposals.', action: 'Create Proposal', link: '/prosperus/proposals/create' },
  { title: 'Invoices', icon: DollarSign, description: 'Generate and track your invoices.', action: 'New Invoice', link: '/prosperus/invoices/new' },
  { title: 'Analytics', icon: ChartBar, description: 'View your business performance metrics.', action: 'View Reports', link: '/prosperus/analytics' },
];

export default async function ProsperusAIDashboard() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.firstName} {user.lastName}</h1>
        <Button variant="outline" className="flex items-center">
          <User className="mr-2 h-4 w-4" />
          Profile
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <item.icon className="mr-2 h-6 w-6" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="mb-4 text-gray-600">{item.description}</p>
              <Link href={item.link} className="w-full mt-auto">
                <Button className="w-full">{item.action}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
