
export default function LocationResult({location}) {
    return (
        <div className = "resultEntry">
            <span>{location.name}</span>
            <span>{location.city}</span>
            <span>{location.country}</span>
            <span>{location.reviews}</span>
            <span>{location.rating}</span>
        </div>
    );
}