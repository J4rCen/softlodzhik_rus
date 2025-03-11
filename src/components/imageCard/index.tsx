import { copy, photoSvg, videoSvg, photoFilm, squareCaret, aiSvg, chartNetwork, eyeInBox, gear } from "../../svgs";
import './ImageCard.css'

interface IImageCardProps {
    title: string;
    image: string;
    id: number;
    fileType: string;
    quantity: number;
    dateOfAddition: string;
    tags: Array<{
        name: string;
        color: string
    }>
}

const ImageCard = (item: IImageCardProps) => {
    return (
        <div className="imageCard_container bg-[#252635]  rounded-sm p-5 w-75 h-[420px]">
            <h1 className="imageCard_title flex rounded-t-sm gap-2 bg-[#35364c] text-white"> {photoFilm()} {item.title}</h1>
            <img className="imageCard_image" src={item.image} alt="Изображения" />
            <div className="imageCard_info grid grid-rows-6 w-full gap-2 p-[10px]">
                <div className="imageCard_info_id flex justify-between">
                    <p className="text-gray-400">ID</p> <span className="flex items-center gap-2"><p className="text-white">{item.id}</p> {copy()}</span>
                </div>
                <div className="imageCard_info_wrapper flex justify-between">
                    <div className="imageCard_info_typeFile flex gap-2 items-center">
                        <p className="text-gray-400">Тип файла: </p> 
                        {   
                            item.fileType === "photo" 
                            ? <span className="flex items-center gap-2">{photoSvg()} <p className="text-white">Фото</p></span> 
                            : <span className="flex items-center gap-2">{videoSvg()} <p className="text-white">Видео</p></span> 
                        }
                    </div>
                    <div className="imageCard_info_quantity flex items-center">
                        <p className="text-gray-400">Кол-во файлов<span className="text-white">{item.quantity}</span></p>
                    </div>
                </div>
                <div className="imageCard_info_date flex justify-between">
                    <p className="text-gray-400">Дата добавления</p> <span className="flex items-center gap-2"><p className="text-white">{item.dateOfAddition}</p></span>
                </div>
                <div className="imageCard_info_tags flex justify-between">
                    <p className="text-gray-400">Тэги</p> 
                    {
                        <span className="flex gap-2">
                            {
                                item.tags.map((el) => {
                                    return <p key={el.name} style={{color: el.color}}>#{el.name}</p>
                                })
                            }
                            {squareCaret()}
                        </span>   
                    }
                </div>
                <div className="imageCard_info_ai flex justify-between">
                    <p className="text-gray-400">Нейросети</p> 
                    <span className="flex items-center gap-2"> {aiSvg()} {squareCaret()}</span>
                </div>
                <div className="imageCard_info_wrapper flex justify-between">
                    <div className="imageCard_info_quantity flex items-center gap-2">
                        <p className="text-gray-400">Количество</p>
                        <span className='flex items-center gap-2'>
                            {chartNetwork()}
                            <span className="text-blue-400">{item.quantity}</span>
                            {eyeInBox('h-7')}
                        </span>
                    </div>
                    <div className="imageCard_info_management flex items-center">
                        <p className="text-gray-400">Управления</p>
                        {gear()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard