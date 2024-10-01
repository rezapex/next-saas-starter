import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, DollarSign } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <main>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                  Streamline Your Business With
                  <span className="block text-teal-600">Prosperus AI</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Effortlessly create professional invoices and proposals. Prosperus helps freelancers manage their finances and win more clients.
                </p>
                <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <a href="#" target="_blank">
                    <Button className="bg-teal-600 hover:bg-orange-600 text-white rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">

              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="mt-5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Professional Proposals
                  </h2>
                  <p className="mt-2 text-base text-gray-500">
                    Create stunning proposals that win clients. Our templates and customization options help you stand out.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="mt-5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Easy Invoicing
                  </h2>
                  <p className="mt-2 text-base text-gray-500">
                    Generate and send professional invoices in minutes. Get paid faster with our integrated payment options.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h2 className="text-lg font-medium text-gray-900">
                    Financial Insights
                  </h2>
                  <p className="mt-2 text-base text-gray-500">
                    Track your income, expenses, and project profitability. Make informed decisions with our powerful analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Ready to grow your freelance business?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Prosperus provides all the tools you need to manage your freelance finances, impress clients, and focus on what you do best - your work.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <a href="#" target="_blank">
                  <Button className="bg-teal-600 hover:bg-orange-600 text-white rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
