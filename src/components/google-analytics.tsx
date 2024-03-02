
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export function Analytics() {
    return (
        <><GoogleAnalytics gaId={process.env.GA4_MEASUREMENT_ID!} />
            <GoogleTagManager gtmId={process.env.GA4_MEASUREMENT_ID!} /></>
    )
}
