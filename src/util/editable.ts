import {SiteVar} from "@util/pgclient";

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
    return cachedSiteVars;
}
