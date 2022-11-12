import { Link } from "react-router-dom"


export function RestaurantCard({
    name,
    rating,
    type,
    number_of_votes,
    price_starts_from,
    id
}){
    return (
        <tr data-testid="item">
            <td data-testid="name">
            </td>
            <td data-testid="rating">
            </td>
            <td data-testid="type">
            </td>
            <td data-testid="votes">
            </td>
            <td data-testid="price">
            </td>
        </tr>
    )
}
