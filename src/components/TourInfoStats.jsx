const TourInfoStats = ({icon, number, label}) => {
    return ( 
        <span><img src={icon} alt="" /> {number && number + " "} {label}</span>
     );
}
 
export default TourInfoStats;