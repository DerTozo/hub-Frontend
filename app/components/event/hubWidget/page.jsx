import styles from './page.module.css'

export default function eventHubWidget() {
    return (
        <div className={styles.hubWidgetBorder}>
            <a className={styles.link} href={"http://localhost:3000/event"}>
                <div className={styles.appLogoIcon}>
                    <img src={"./event-logo.svg"}/>
                </div>
                <div className={styles.hubWidget}>
                    <div className={styles.hubInformation}>
                        <div className={styles.appName}>event's</div>
                        <div className={styles.line}></div>
                        <div>
                            <div className={styles.keyData}>Next Notification</div>
                            <div className={styles.valueData}>1d 3h</div>
                        </div>
                        <div className={styles.blueColoredBar}>
                            <div className={styles.barValue}>Gelbe Tonne</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
