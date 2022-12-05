import Image from "next/image"

function Card({ feature }) {
    return (
        <div className={`${feature.borderColor} border-t-4 rounded-md shadow-lg p-6 ${feature.gridPosition}`}>
            <h1 className="font-semibold text-neutralVeryDarkBlue text-xl">{feature.title}</h1>
            <p className="text-[15px] text-neutralGrayishBlue mb-8">{feature.body}</p>
            <Image src={`/images/${feature.img}`} width={64} height={64} alt="icon" className="ml-auto" />
        </div>
    )
}

export default Card