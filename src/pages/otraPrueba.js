import { useParams } from "react-router-dom"

export default function OtraPrueba () {
    const {name} = useParams();
    return (
        <div>
            <h1>HOLA {name}</h1>
        </div>
    )
}