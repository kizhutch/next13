import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; 

function UserEntryLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        children
    )
}

export default UserEntryLayout