import eventHubWidget from "app/components/event/hubWidget/page";
import whoHomeHubWidget from "app/components/whohome/hubWidget/page";

export default function hubWidgets() {
    return (
        <main>
            {eventHubWidget()}
            {whoHomeHubWidget()}
        </main>
    )
}
