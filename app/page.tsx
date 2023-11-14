import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AllowPush from './components/allow-push/allow-push'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='h-full flex'>
      <AllowPush />
      </div>
    </main>
  )
}
