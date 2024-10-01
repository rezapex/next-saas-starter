import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FileText, DollarSign, BarChart } from 'lucide-react';

export function Features() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle>Professional Proposals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create stunning proposals that win clients. Our templates and customization options help you stand out.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle>Easy Invoicing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate and send professional invoices in minutes. Get paid faster with our integrated payment options.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-teal-600" />
              </div>
              <CardTitle>Financial Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track your income, expenses, and project profitability. Make informed decisions with our powerful analytics.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}