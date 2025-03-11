import { useState } from "react"
import { photoSvg, videoSvg } from "../../svgs"
import './popupFileType.css'

const PopupFileType = (isHidden: {isHidden: boolean}) => {

    const [photoSelect, setPhotoSelect] = useState<boolean>(false)
    const [videoSelect, setVideoSelect] = useState<boolean>(false)

    const resetSelect = () => {
        setPhotoSelect(false)
        setVideoSelect(false)
    }

    return (
        <div style={isHidden.isHidden ? {display: "block"} : {display: 'none'}} className="popupFileType_container absolute bg-[#252635] flex items-center flex-col">
            <button onClick={() => setPhotoSelect(!photoSelect)} className={`popupFileType_button ${photoSelect ? 'select_button' : ''} gap-2 text-white flex`}>{photoSvg()} Фото</button>
            <button onClick={() => setVideoSelect(!videoSelect)} className={`popupFileType_button ${videoSelect ? 'select_button' : ''} gap-2 text-white flex relative`}>{videoSvg()} Видео</button>
            <button onClick={() => resetSelect()} className="popupFileType_button text-white flex"> <span className="text-[#5e88d8]">Сбросить фильтры</span></button>
        </div>
    )
}

export default PopupFileType