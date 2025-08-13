import type {Metadata} from 'next';

/**
 * Utility functions for building consistent metadata across the site
 */

// Default site name to use in title tags
export const SITE_NAME = process.env.SITE_NAME || 'Stephanie L. Skinner D.M.D. Family Dentistry';

/**
 * Builds a consistent page title in the format "Page | Site Name"
 *
 * @param pageTitle - The title for the specific page
 * @param siteName - The site name (defaults to SITE_NAME constant)
 * @returns Formatted title string
 */
export const buildMetaData = (pageTitle: string, siteName: string = SITE_NAME): Metadata => {
    return {
        title: `${pageTitle} | ${siteName}`
    }
};
