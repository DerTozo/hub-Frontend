import styles from './page.module.css'
import eventPageWidget from "app/components/event/pageWidget/page";

export default function Home() {
    return (
        <main>
            <div className={styles.head}>
                <div className={styles.topicBox}>
                    <div className={styles.topicText}>event's</div>
                </div>
            </div>
            {eventPageWidget()}
        </main>
    )
}
