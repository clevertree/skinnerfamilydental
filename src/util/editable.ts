'use server'

import {getSequelize, SiteVar} from "@util/pgclient";
import {revalidatePath} from "next/cache";
import {validateAdminSession} from "@util/session";

export interface SiteVariables {
    HEADER_MAKE_APPOINTMENT?: string;
    FOOTER_MANAGED_BY_HTML?: string;
    CONTACT_PHONE?: string;

    // Front Page
    HOME_PAGE_FEATURE_HEADLINE_TOUR?: string;
    HOME_PAGE_FEATURE_BODY_TOUR?: string;
    HOME_PAGE_FEATURE_HEADLINE_SERVICES?: string;
    HOME_PAGE_FEATURE_BODY_SERVICES?: string;
    HOME_PAGE_FEATURE_HEADLINE_APPOINTMENT?: string;
    HOME_PAGE_FEATURE_BODY_APPOINTMENT?: string;
    HOME_PAGE_FEATURE_HEADLINE_LEARN?: string;
    HOME_PAGE_FEATURE_BODY_LEARN?: string;
}

let cachedSiteVars: SiteVariables | undefined = undefined;

export async function fetchSiteVars() {
    if (cachedSiteVars) {
        return cachedSiteVars;
    }
    // TODO: load hard-coded default constants before database

    // Set empty site vars in case database fails
    cachedSiteVars = {};
    try {
        await getSequelize();
        const siteVarList = await SiteVar.findAll();
        for (const siteVar of siteVarList) {
            const {key, value} = siteVar.dataValues;
            cachedSiteVars[key as keyof SiteVariables] = value;
        }
        // console.log('SiteVars:', cachedSiteVars);
    } catch (e: unknown) {
        console.error('Error fetching site vars: ', e);
    }
    return cachedSiteVars;
}

export async function updateSiteVar(name: keyof SiteVariables, value: string) {
    if (process.env.NEXT_PUBLIC_EDIT_MODE !== 'true')
        throw new Error('Cannot update site vars in non-edit mode');

    await validateAdminSession();
    await getSequelize();

    // Use upsert to insert or update the record
    await SiteVar.upsert({
        key: name,
        value: value
    });

    // Clear cache
    cachedSiteVars = undefined;

    // Invalidate nextjs cache
    revalidatePath('/', 'layout');
}