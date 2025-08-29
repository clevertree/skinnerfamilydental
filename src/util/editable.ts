'use server'

import {SiteVar} from "@util/pgclient";
import {revalidatePath} from "next/cache";

export interface SiteVariables {
    HEADER_MAKE_APPOINTMENT?: string;
    FOOTER_MANAGED_BY_HTML?: string;
    CONTACT_PHONE?: string;
}

let cachedSiteVars: SiteVariables | undefined = undefined;

export async function fetchSiteVars() {
    if (cachedSiteVars) {
        return cachedSiteVars;
    }
    cachedSiteVars = {};
    const siteVarList = await SiteVar.findAll();
    for (const siteVar of siteVarList) {
        const {key, value} = siteVar.dataValues;
        cachedSiteVars[key as keyof SiteVariables] = value;
    }
    console.log('SiteVars:', cachedSiteVars);
    return cachedSiteVars;
}

export async function updateSiteVar(name: keyof SiteVariables, value: string) {
    if (process.env.NEXT_PUBLIC_EDIT_MODE !== 'true')
        throw new Error('Cannot update site vars in non-edit mode');
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