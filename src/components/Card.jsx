export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="flex-auto flex-col w-44 relative">
      {badgeText && (
        <div className="absolute top-[6px] left-[6px] bg-white">
          {badgeText}
        </div>
      )}
      <img src={`../images/${props.coverImg}`} className="w-80 rounded-xl" />
      <div className="flex items-center">
        <img src="../images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
