import AppCard from './components/AppCard'
import { ClipboardList, DollarSign, Package, Bell } from 'lucide-react'
import './App.css'

interface Application {
  id: string
  name: string
  url: string
  iconColor?: 'green' | 'purple' | 'orange' | 'blue' | 'default'
  iconComponent?: React.ReactNode
}

const applications: Application[] = [
  {
    id: 'receiving-form',
    name: 'Receiving Form',
    url: 'https://pi-receiving-form-frontend.vercel.app/',
    iconColor: 'purple',
    iconComponent: <ClipboardList />,
  },
  {
    id: 'legends-notifier',
    name: 'Legeneds Notifier',
    url: 'https://legends-notifier.vercel.app/',
    iconColor: 'blue',
    iconComponent: <Bell />,
  },
  {
    id: 'monday-reconciliation',
    name: 'Monday Reconciliation',
    url: 'https://premier-ikon-monday-packet-reconciliation.replit.app/',
    iconColor: 'orange',
    iconComponent: <Package />,
  },
  {
    id: 'sales-tax-processor',
    name: 'Sales Tax Processor',
    url: 'https://premier-ikon-sales-tax-processor.replit.app/',
    iconColor: 'green',
    iconComponent: <DollarSign />,
  },

]

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="app-title-prefix">Welcome to the</span>
          <span className="app-title-gradient">Premier Ikon App Hub</span>
        </h1>
        <p className="app-description">
          Access your essential business tools in one centralized location. Streamline your workflow with our integrated app ecosystem.
        </p>
      </header>

      <main className="app-main">
        <div className="apps-grid">
          {applications.map((app) => (
            <AppCard key={app.id} application={app} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 Premier Ikon. Streamlining business operations through intelligent automation.</p>
      </footer>
    </div>
  )
}

export default App

