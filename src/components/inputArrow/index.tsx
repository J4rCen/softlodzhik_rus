import { caretDown } from "../../svgs"

interface IInputArrowProps {
    classProps: string,
    placeholder: string
    callback?: () => void
}

const inputArrow = (item: IInputArrowProps) => {
    return (
        <div className="inputArrow_container relative">
            <input type="text" className={item.classProps} placeholder={item.placeholder}/>
            {caretDown('absolute right-4 md:top-1/4 top-1/2 transform md:-translate-y-1/4 -translate-y-1/2 text-gray-500 h-3 w-3')}
        </div>
    )
}

export default inputArrow