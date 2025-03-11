import { useState } from 'react'
import ImageCard from '../../components/imageCard'
import inputArrow from '../../components/inputArrow'
import PopupFileType from '../../components/popupFileType'
import { calendar, caretDown, listSolid, magnifyingGlass, swapperRight } from '../../svgs'
import './gallery.css'
import PopupAddFile from '../../components/popupAddFile'
import {data} from '../../data'

const MediaGallery = () => {

    const [isSelectPopUp, setIsSelectPopUp] = useState<boolean>(false)
    const [isSelectAddPopUp, setIsSelectAddPopUp] = useState<boolean>(false)

    const openAddPopUp = () => {
        setIsSelectAddPopUp(!isSelectAddPopUp)
    }

    return (
        <div className="mediaGallery_container flex direction-row min-h-screen w-full max-w-screen">
            <div className="mediaGallery_left-window md:w-50 w-0 bg-[#252635] min-h-screen"></div>
            <div className="mediaGallery_right-window grid md:grid-cols-[1fr] md:grid-rows-[50px_1fr] w-full" style={{ padding: 15 }}>
                <div className="mediaGallery_right-window_filters-menu grid md:grid-cols-[260px_230px_230px_130px_260px_120px] gap-3">
                <div className="mediaGallery_right-window_filters-menu_wrapper relative">
                    {magnifyingGlass('absolute left-4 md:top-1/4 top-1/2 transform md:-translate-y-1/4 -translate-y-1/2 text-gray-500 h-3 w-3')}
                    <input className="mediaGallery_right-window_filters-menu_input mediaGallery_font rounded-sm text-gray-400 w-full" style={{ paddingLeft: 32 }} placeholder="Поиск медиа файлов по названию или ID" type="text" />
                </div>
                {inputArrow({ classProps: "mediaGallery_right-window_filters-menu_input mediaGallery_font rounded-sm text-gray-400 w-full", placeholder: "Все нейросети" })}
                {inputArrow({ classProps: "mediaGallery_right-window_filters-menu_input mediaGallery_font rounded-sm text-gray-400 w-full", placeholder: "Все теги" })}
                <div className="inputArrow_container relative">
                    <input type="text" onClick={() => setIsSelectPopUp(!isSelectPopUp)} className='mediaGallery_right-window_filters-menu_input mediaGallery_font cursor-pointer rounded-sm text-gray-400 w-full' placeholder='Тип файлов'/>
                    {caretDown('absolute right-4 md:top-1/4 top-1/2 transform md:-translate-y-1/4 -translate-y-1/2 text-gray-500 h-3 w-3')}
                    <PopupFileType isHidden={isSelectPopUp}/>
                </div>
                <div className="mediaGallery_right-window_filters-menu_wrapper flex relative">
                    <button className="mediaGallery_right-window_filters-menu_button bg-[#35364c] mediaGallery_font text-white rounded-l-sm h-[30px] p-2">Период</button>
                    <input type="text" placeholder="Дата с" className="mediaGallery_right-window_filters-menu_input mediaGallery_font text-gray-400 md:w-25" />
                    {swapperRight('absolute md:left-35 left-42 md:top-1/4 top-1/2 transform md:-translate-y-1/4 -translate-y-1/2 text-gray-500 h-3 w-3')}
                    <input type="text" placeholder="Дата по" className="mediaGallery_right-window_filters-menu_input mediaGallery_font text-gray-400 rounded-r-sm md:w-25" />
                    {calendar('absolute right-4 md:top-1/4 top-1/2 transform md:-translate-y-1/4 -translate-y-1/2 text-gray-500 h-3 w-3 items-center')}
                </div>
                <div className="mediaGallery_right-window_filters-menu_wrapper flex gap-[10px] md:justify-normal justify-center">
                    {listSolid('h-[32px]')}
                    <button onClick={() => openAddPopUp()} className="mediaGallery_right-window_filters-menu_button text-white mediaGallery_font bg-[#5e88d8] rounded-sm h-[28px] w-[120px] p-2">Добавить</button>
                </div>
                </div>
                <div className="mediaGallery_right-window_gallery grid grid-cols-[repeat(auto-fit,max(18.75rem))] auto-rows-auto gap-4 p-4">
                    {data.map(el => (
                        <ImageCard key={el.id} {...el} />
                    ))}
                    <PopupAddFile isHidden={isSelectAddPopUp} callBack={openAddPopUp}/>
                </div>
            </div>
            </div>

    )
}

export default MediaGallery