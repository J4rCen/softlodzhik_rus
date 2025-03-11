import { useState } from "react"
import { photoFilm, photoFilmBig, photoSvg, videoSvg, xmark } from "../../svgs"
import './popupAddFile.css'

const PopupAddFile = (isHidden: {isHidden: boolean, callBack: () => void}) => {

    const [photoSelect, setPhotoSelect] = useState<boolean>(false)
    const [videoSelect, setVideoSelect] = useState<boolean>(false)

    return (
        <div style={isHidden.isHidden ? {display: "block"} : {display: 'none'}} className="popupAddFile_container md:w-150 w-80">
            <div className="popupAddFile_title flex text-white  bg-[#35364c] justify-between">
                <span className="flex gap-4">
                    {photoFilm()}
                    <p>Добавления медиа файла</p>
                </span>
                <span onClick={() => isHidden?.callBack()} className="cursor-pointer">{xmark()}</span>
            </div>
            <div className="popupAddFile_main grid grid-rows-[50px_50px_50px_50px_300px_50px] gap-3 bg-[#252635]">
                <div className="popupAddFile_main_stage flex gap-4 flex-col w-full">
                    <span className="flex gap-5 items-center">
                        <div className="popupAddFile_main_stage_number h-6 w-6 bg-[#5e88d8] flex items-center justify-center rounded-full">
                            <p className="text-white">1</p>
                        </div>
                        <p className="text-white">Файлы</p>
                    </span>
                    <span className="popupAddFile_main_indications flex w-full gap-4">
                        <div className="popupAddFile_main_indication rounded-xs h-1 w-[50%] bg-[#5e88d8]"></div>
                        <div className="popupAddFile_main_indication rounded-xs h-1 w-[50%] bg-[#656d81]"></div>
                    </span>
                </div>
                <div className="popupAddFile_main_info flex items-center">
                    <p className="text-gray-400">Перед загрузкой файлов ознакомьтесь с <span className="text-blue-400">Требованиями</span> к фото и видео</p>
                </div>
                <div className="popupAddFile_main_file-name flex items-center gap-5">
                    <p className="text-white">Название файлов</p>
                    <input className="text-white popupAddFile_main_file-name_input" type="text" placeholder="Введите название для этих файлов"/>
                </div>
                <div className="popupAddFile_main_type-name flex items-center gap-10">
                    <p className="text-white">Тип файла</p>
                    <span className="flex items-center w-[80%] gap-4">
                        <button onClick={() => setPhotoSelect(!photoSelect)} className={`popupAddFile_button ${photoSelect ? 'select_button' : ''} gap-2 text-white flex w-[50%]`}>{photoSvg()} Фото</button>
                        <button onClick={() => setVideoSelect(!videoSelect)} className={`popupAddFile_button ${videoSelect ? 'select_button' : ''} gap-2 text-white flex w-[50%]`}>{videoSvg()} Видео</button>
                    </span>
                </div>
                <div className="popupAddFile_main_drop-zone">
                    <div className="popupAddFile_main_drop-zone_window-drop flex items-center justify-center flex-col gap-4">
                        {photoFilmBig()}
                        <span className="flex items-center flex-col">
                            <p className="text-blue-400">Файлы</p>
                            <p className="text-gray-400">или перетащите их в эту область</p>
                        </span>
                    </div>
                </div>
                <div className="popupAddFile_main_bottom flex justify-between w-full">
                    <button className="popupAddFile_main_bottom_button h-[30px] w-[100px] cursor-pointer text-blue-400 border border-blue-400 border-solid rounded-lg">Отмена</button>
                    <button className="popupAddFile_main_bottom_button h-[30px] w-[100px] cursor-pointer text-white rounded-lg bg-[#5e88d8]">Далее</button>
                </div>
            </div>
        </div>
    )
}

export default PopupAddFile