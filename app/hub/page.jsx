import eventHubWidget from "app/components/event/hubWidget/page";
import whoHomeHubWidget from "app/components/whohome/hubWidget/page";
import dummyHubWidget from "app/components/dummy/hubWidget/page";
import styles from "./page.module.css";

export default function hubWidgets() {
    return (
        <main className={styles.main}>
            {eventHubWidget()}
            {whoHomeHubWidget()}
            {dummyHubWidget()}
            {dummyHubWidget()}
            {dummyHubWidget()}
            {dummyHubWidget()}
        </main>
    )
}
