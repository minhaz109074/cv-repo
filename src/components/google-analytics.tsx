
import { GoogleAnalytics } from '@next/third-parties/google'

export function Analytics() {
    return (
        <><GoogleAnalytics gaId={process.env.GA4_MEASUREMENT_ID!} /></>
    )
}
