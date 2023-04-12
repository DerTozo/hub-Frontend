import styles from './page.module.css'

export default function whoHomeHubWidget() {
    return (
        <div className={styles.hubWidgetBorder}>
            <a className={styles.link} href={"http://localhost:3000/whohome"}>
                <div className={styles.appLogoIcon}>
                    <img src={"./whohome-logo.svg"}/>
                </div>
                <div className={styles.hubWidget}>
                    <div className={styles.hubInformation}>
                        <div className={styles.appName}>home?</div>
                        <div className={styles.line}></div>
                        <div>
                            <div className={styles.keyData}>@home</div>
                            <div className={styles.valueData}>4</div>
                        </div>
                        <div className={styles.orangeColoredBar}>
                            <div className={styles.barValue}>Tomasz, Julius, Jesse...</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
