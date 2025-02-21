export const CONFIG = {
  domain: process.env.DOMAIN!,

  gtmId:
    process.env.GTM_ID && process.env.GTM_ID !== 'none'
      ? process.env.GTM_ID
      : undefined,

  maltUrl: process.env.MALT_URL ?? '#',
  calendlyUrl: process.env.CALENDLY_URL ?? '#',
};
