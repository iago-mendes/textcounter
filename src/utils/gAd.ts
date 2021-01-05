import getConfig from 'next/config'

const {publicRuntimeConfig: env} = getConfig()

export const adClient = String(env.adClient)