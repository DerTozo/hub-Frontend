import styles from './page.module.css'

export default function dummyHubWidget() {
    return (
        <div className={styles.hubWidgetBorder}>
            <a className={styles.link} href={"http://localhost:3000/whohome"}>
                <div className={styles.appLogoIcon}>
                    <img src={"./dummy-icon.svg"}/>
                </div>
                <div className={styles.hubWidget}>
                    <div className={styles.hubInformation}>
                        <div className={styles.appName}>dummy</div>
                        <div className={styles.line}></div>
                        <div>
                            <div className={styles.keyData}>Key</div>
                            <div className={styles.valueData}>Value</div>
                        </div>
                        <div className={styles.greenColoredBar}>
                            <div className={styles.barValue}>Informations...</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
