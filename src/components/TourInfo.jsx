import peopleIcon from "../assets/people-icon.png"
import durationIcon from "../assets/duration-icon.png"
import locationIcon from "../assets/location-icon.png"
import TourInfoStats from "./TourInfoStats";
import Price from "./Price";
import Button from "./Button"

const AboutTour = ({duration, numberOfPeople, tourName, location, price, isDiscounted, oldPrice, description}) => {
    return ( 
        <div className="tour-info">
            <div className="tour-info-stats">
                <TourInfoStats icon={durationIcon} label={"Days"} number={duration}/>
                <TourInfoStats icon={peopleIcon} label={"People Going"} number={numberOfPeople}/>
            </div>
            <h4 className="tour-name">{ tourName }</h4>
            <TourInfoStats icon={locationIcon} label={location} number={null}/>
            <Price price={price} isDiscounted={isDiscounted} oldPrice={ oldPrice ? oldPrice : "" }/>
            <p className="tour-description">{description}</p> 
            <Button label={"Explore"} handleClick={() => {return}}/>
        </div>
     );
}
 
export default AboutTour;