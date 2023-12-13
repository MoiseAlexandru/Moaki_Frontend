
import { locationList } from "../../dummydata";


export default function locationFilter(query) {
    if(!query)
        return [];
    const filterResults = locationList.filter((location) => location.name.toLowerCase().includes(query.toLowerCase()));
    return filterResults;
}
