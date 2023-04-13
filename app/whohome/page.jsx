import whoHomePageWidget from "app/components/whohome/pageWidget/page";
import styles from "app/whohome/page.module.css";

export default function Home() {

    return (
        <main>
            <div className={styles.head}>
                <div className={styles.topicBox}>
                    <div className={styles.topicText}>home?</div>
                </div>
            </div>
            <div className={styles.content}>
                {whoHomePageWidget()}
                {whoHomePageWidget()}
                {whoHomePageWidget()}
                {whoHomePageWidget()}
                {whoHomePageWidget()}
                {whoHomePageWidget()}
            </div>
        </main>
    )
}
