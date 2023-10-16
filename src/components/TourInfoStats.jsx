const TourInfoStats = ({icon, number, label}) => {
    return ( 
        <span className={`stat-element ${label}`}><img src={icon} alt="" /> <span>{number && number + " "} {label}</span> </span>
     );
}
 
export default TourInfoStats;