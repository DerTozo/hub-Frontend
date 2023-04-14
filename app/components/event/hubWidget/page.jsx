import styles from './page.module.css'

export default async function eventHubWidget() {
    const data = await fetch('http://127.0.0.1:5000/fetchOneEvent', {cache: 'no-cache'})
    const res = await data.json()

    return (
        <div>
            <div key={res.eventId}>
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
                                    <div className={styles.valueData}>{res.creationDate} d</div>
                                </div>
                                <div className={styles.blueColoredBar}>
                                    <div className={styles.barValue}>{res.name}</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
