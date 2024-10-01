import Link from 'next/link';
import { FileText, DollarSign, BarChart3, ChartAreaIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <ChartAreaIcon className="h-6 w-6 text-teal-600" />
            <p className="text-gray-500 text-base">
              Empowering freelancers with smart financial tools.
            </p>
            <div className="flex space-x-6">
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Proposals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Invoicing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Analytics
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Prosperus AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}