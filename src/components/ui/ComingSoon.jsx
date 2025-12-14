'use client';

import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export default function ComingSoonPage({ title, category }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {category}
                    </span>
                </div>

                <div className="mb-8">
                    <Clock className="w-20 h-20 text-primary-500 mx-auto mb-6 opacity-50" />
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    {title}
                </h1>

                <p className="text-2xl text-gray-500 mb-4">
                    Coming Soon
                </p>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                    We're working hard to bring you detailed information about our {title.toLowerCase()}.
                    Check back soon or contact us for more information.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Products
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
