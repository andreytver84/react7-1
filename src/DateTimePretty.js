export default function DateTimePretty(Component) {
    return function(props) {
      const { date } = props;
      const currentDate = new Date();
      const videoDate = new Date(date);
      const diffMs = currentDate - videoDate;
      const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
  
      if (diffMs < 3600000) {
        return <Component {...props} date={`${diffMins} минут назад`} />;
      } else if (diffMs < 86400000) {
        const diffHours = Math.round(diffMs / 3600000);
        return <Component {...props} date={`${diffHours} часов назад`} />;
      } else {
        const diffDays = Math.round(diffMs / 86400000);
        return <Component {...props} date={`${diffDays} дней назад`} />;
      }
    };
  }