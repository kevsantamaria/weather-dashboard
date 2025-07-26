import {Switch} from '@/components/ui/switch'

function PageHeader() {
  return (
    <header className="container bg-blue-500 text-white fixed min-w-screen p-4 px-10 flex items-center justify-between">
      <h1 className="font-bold text-xl">Weather Dashboard</h1>
      <Switch />
    </header>
  )
}

export default PageHeader