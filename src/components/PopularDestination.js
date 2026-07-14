import React from 'react'
import './Header.css'
import './RegiPopularDestination.css'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
function PopularDestination() {
     const scrollRef = useRef(null);
        const [showLeft, setShowLeft] = useState(false);
    
    
        function nextBtn() {
            const el = scrollRef.current;
            el.scrollBy({
                left: 250,
                behavior: 'smooth'
            });
    
            setShowLeft(true);
        }
    
        function prevtBtn() {
            const el = scrollRef.current;
            el.scrollBy({
                left: -250,
                behavior: 'smooth'
            });
    
    
            setTimeout(() => {
                if (el.scrollLeft <= 0) {
                    setShowLeft(false);
                }
            }, 300);
        }
    
  return (
   <>
     <div className='place_main_div'>
                <h2 className="trending_heading">Popular Destination</h2>
                <div className='subdiv1_place_main_div' ref={scrollRef}>


                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Himachal Pradesh<br></br>Shimla,Kuthri.Chail,<br></br>Naldehra</p>

                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Peris<br></br>Effiel Tower. Louver Museum. Notre-Dame.Cathedral</p>

                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://wanderlog.com/p/images/66e9a04af169a54a82164ea9_66bd2d63b74cc52cdd91b284_img%20tokyo_explore_places.jpg' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Tokyo<br></br>Tokyo-tower,Senso-ji-Temple,<br></br>Sibbuya Crossing</p>

                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://wanderlog.com/p/images/66e9a04a0e88014cfb53cc86_66bd2d6330902c203b566dcb_img%20bangkok_explore_places.jpg' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Bankok<br></br>Grant palace,What-arun,<br></br>Chatuchak,Weekend-Market</p>
                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Himachal Pradesh<br></br>Shimla,Kuthri.Chail,<br></br>Naldehra</p>

                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Peris<br></br>Effiel Tower. Louver Museum. Notre-Dame.Cathedral</p>

                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://wanderlog.com/p/images/66e9a04af169a54a82164ea9_66bd2d63b74cc52cdd91b284_img%20tokyo_explore_places.jpg' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Tokyo<br></br>Tokyo-tower,Senso-ji-Temple,<br></br>Sibbuya Crossing</p>

                    </div>
                    <div className='mini_subdiv1_place_main_div'>
                        <img src='https://wanderlog.com/p/images/66e9a04a0e88014cfb53cc86_66bd2d6330902c203b566dcb_img%20bangkok_explore_places.jpg' className='top_place_image'></img>
                        <p className='p_mini_subdiv1_place_main_div'>Bankok<br></br>Grant palace,What-arun,<br></br>Chatuchak,Weekend-Market</p>
                    </div>
                    {showLeft && (
                        <Button className='btn2_place_main_div' onClick={prevtBtn}>
                            <ArrowLeftOutlined />
                        </Button>
                    )}

                    <Button className='btn1_place_main_div' onClick={nextBtn}>
                        <ArrowRightOutlined />
                    </Button>


                </div>

            </div>
   </>
  )
}

export default PopularDestination