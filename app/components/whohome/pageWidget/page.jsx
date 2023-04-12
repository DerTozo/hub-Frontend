import styles from './page.module.css'

export default function whoHomePageWidget() {
    return (
        <main>
            <div className={styles.homeWidget}>
                <div className={styles.homeInformation}>
                    <div className={styles.nameBar}>
                        <div className={styles.name}>Tomasz</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.status}>Status:</div>
                    <div className={styles.statusData}>Offline</div>
                    <div className={styles.lastLogin}>zuletzt online Gestern 17:34</div>
                </div>
                <div className={styles.icon}>
                    <img src={"./profile-icon.svg"} alt={"profile-icon"}/>
                </div>
            </div>
        </main>
    )
}
