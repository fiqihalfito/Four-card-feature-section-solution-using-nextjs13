import { features } from "../../constants"
import Card from "./card"

function Features() {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((item, i) =>
                <Card key={i} feature={item} />
            )}
        </div>
    )
}

export default Features