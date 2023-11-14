'use client'

import { Button } from "@/components/ui/button"

type Props = {}

const AllowPush = (props: Props) => {
    const grantNotifications = async () => {
        if(Notification.permission === "granted") return;
        try{
            await Notification.requestPermission()
        } catch(err) {
            throw err
        }
    }
    const testNotifications = () => {
        new Notification('test notification',{
            body: "this is a test notification"
        })
    }
  return (
    <>
    <Button onClick={grantNotifications}>Allow Push Notifications</Button>
    <Button onClick={testNotifications}>Test Notificaions</Button>
    </>
  )
}

export default AllowPush