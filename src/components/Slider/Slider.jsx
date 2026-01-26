import { useEffect, useRef, useState } from "react"
import style from "./Slider.module.css"


export const Slider = (props) => {
    const {items} = props

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    // Добавляем стили для указателя
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.userSelect = 'auto';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Умножаем для более быстрого скролла
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = containerRef.current;
    
    const handleScroll = () => {
      // Можно добавить логику для показа/скрытия стрелок и т.д.
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToElement = (id) => {
    const element = document.getElementById(`${id}`)
    element.scrollIntoView()
  }

    return(
        <div className={style.slider}>
            <h1 style={{color:"white"}}>{items[0].title}</h1>
            <div className={style.slides}
                ref={containerRef} 
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {items.map(el => (
                    <div key={el.id} className={style.item_card} >
                      <div className={style.item_information}>
                          <div className={style.item_image}>
                            <img src={el.img} />
                          </div>
                          <div className={style.item_text}>
                              <p>{el.price}₽</p>
                              <h1>{el.name}</h1>
                              <button>В корзину</button>
                          </div>
                      </div>    
                    </div>
                ))}
                <div onClick={()=>scrollToElement('catalog')} className={style.card_toCatalog}>
                    Перейти в каталог 
                </div>
            </div>
        </div>
    )
}