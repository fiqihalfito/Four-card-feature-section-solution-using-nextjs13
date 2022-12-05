import { hero } from "../../constants"

function Hero() {
    return (
        <div className="text-center mb-12">
            <h1 className="font-extralight text-2xl md:text-3xl text-neutralVeryDarkBlue ">{hero.heading}</h1>
            <h1 className="font-semibold text-2xl md:text-3xl text-neutralVeryDarkBlue mb-4">{hero.subheading}</h1>
            <p className="text-neutralGrayishBlue text-[15px] md:mx-80">{hero.body}</p>
        </div>
    )
}

export default Hero