import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';



export default function Video(props) {
    const DateTimePrettyList = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePrettyList date={props.date} />
        </div>
    )
}

