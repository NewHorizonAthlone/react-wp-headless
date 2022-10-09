import { parseISO, formatDistanceToNow } from "date-fns";

interface Timestamp {
    timestamp: string
}

const TimeAgo = ({ timestamp }: Timestamp) => {
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
};

export default TimeAgo;