import { ClipboardList } from 'lucide-react'

interface Application {
  id: string
  name: string
  url: string
  iconColor?: 'green' | 'purple' | 'orange' | 'blue' | 'default'
  iconComponent?: React.ReactNode
}

interface AppCardProps {
  application: Application
}

function AppCard({ application }: AppCardProps) {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(application.url, '_blank', 'noopener,noreferrer')
  }

  // Default icon component if none provided
  const defaultIcon = application.iconComponent || <ClipboardList />

  // Icon color mapping
  const iconColors = {
    green: '#4CAF50',
    purple: '#9C27B0',
    orange: '#FF9800',
    blue: '#03A9F4', // Light blue to match reference
    default: '#667EEA',
  }

  const iconColor = iconColors[application.iconColor || 'default']

  return (
    <div className="app-card">
      <div className="app-card-content">
        <div
          className="app-card-icon"
          style={{ backgroundColor: iconColor }}
        >
          {defaultIcon}
        </div>
        <h3 className="app-card-title">{application.name}</h3>
      </div>
      <button
        className="app-card-button"
        onClick={handleButtonClick}
      >
        Open App
      </button>
    </div>
  )
}

export default AppCard

