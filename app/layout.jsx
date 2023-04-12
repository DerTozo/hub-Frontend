import './globals.css'
import styles from "@/app/page.module.css";
import {Roboto} from 'next/font/google'

export const metadata = {
  title: 'WG-HUB',
}
const roboto = Roboto({weight: "400", subsets: ['latin']})

export default function RootLayout({children}) {
  return (
      <div className={roboto.className}>
        <div className={styles.container}>
          <div className={styles.header}>
            <a href={"http://localhost:3000/"}>
              <div className={styles.logo}>
                <img src={"./wg-hubLogo.svg"} alt={"hubLogo"}/>
              </div>
            </a>
            <div className={styles.welcomeText}>
              <h3>Welcome back, Tomasz!</h3>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.sidebar}>
              <div className={styles.profile}>
                <img src={"./profile-icon.svg"} alt={"profile-icon"}/>
              </div>
              <div className={styles.notification}>
                <img src={"./notification-icon.svg"} alt={"notification-icon"}/>
              </div>
              <div className={styles.wg}>
                <img src={"./wg-icon.svg"} alt={"wg-icon"}/>
              </div>
              <div className={styles.settings}>
                <img src={"./settings-icon.svg"} alt={"settings-icon"}/>
              </div>
            </div>
            <div className={styles.main}>
              {children}
            </div>
          </div>
        </div>
      </div>
  )
}
