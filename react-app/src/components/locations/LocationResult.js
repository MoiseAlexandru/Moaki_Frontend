
export default function LocationResult({result}) {
    return (
        <div className = "resultEntry">
            <span>{result.name}</span>
            <span>{result.city}</span>
            <span>{result.country}</span>
            <span>{result.reviews}</span>
            <span>{result.rating}</span>
        </div>
    );
}