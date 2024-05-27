import {atom,selector} from 'recoil'
import axios from 'axios'

// export const networkAtom = atom({
//     key:"networkAtom",
//     default: 104
// })
// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default: 0
// })
// export const notificationsAtom = atom({
//     key:"notificationsAtom",
//     default: 0
// })
// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default: 0
// })

export const notifications = atom({
    key:"networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async ()=>{
            
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) =>{
       
        const allNotifications = get(notifications);
        return allNotifications.network+allNotifications.jobs+allNotifications.notifications+allNotifications.messaging
    }
})