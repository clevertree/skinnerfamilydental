'use client';

import Link from 'next/link';
import {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
    useEffect(() => {
        // Log the 404 error for analytics
        console.log('404 page visited');
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-16">
            <div className="text-center max-w-md">
                <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    className="text-yellow-500 mb-6"
                    size="4x"
                />

                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8">
                    Oops! The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
