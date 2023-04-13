import styles from './page.module.css'

export default async function eventPageWidget() {
    const data = await fetch('http://127.0.0.1:5000/fetchAllEvents', {cache: 'no-cache'})
    const res = await data.json()

    return (
        <main className={styles.main}>
            {res.map(item => (
                <div key={item.eventId}>
                    <div className={styles.eventWidget}>
                        <div className={styles.eventInformation}>
                            <div className={styles.nameBar}>
                                <div className={styles.eventName}>{item.name}</div>
                            </div>
                            <div className={styles.line}></div>
                            <div>
                                <div className={styles.keyData}>Faellig in:</div>
                                <div className={styles.valueData}>{item.creationDate} d</div>
                                <div className={styles.keyData}>Bearbeiter:</div>
                                <div className={styles.valueData}>{item.processor}</div>
                            </div>
                        </div>
                        <div className={styles.closeIcon}>
                            <img src={"./close-icon.svg"}/>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}
