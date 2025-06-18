import packageJson from '../../package.json'

export const APP_CONFIG = {
    appName: "BookGeek",
    version: packageJson.version,
    meta: {
        title: "BookGeek",
        description: "This is a booking app built with Next.js",
        keywords: ["booking", "app", "nextjs", "react"],
    }
}