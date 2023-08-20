import React, { useState, useEffect } from 'react';
import styled from "styled-components";



const MainPopup = () => {

    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
      const popupShown = localStorage.getItem('popupShown');
      if (popupShown) {
        setShowPopup(false);
      }
    }, []);
  
    const closePopupToday = () => {
      setShowPopup(false);
      localStorage.setItem('popupShown', 'true');
    };
    const closePopup = () => {
        setShowPopup(false);
    }

    return(
        <PopupContainer className={`${(showPopup) ? '' : 'hide'}`}>
            <div className={`popupContainer`}>
                <div className="imgWrap">
                    <a href="https://forms.gle/wXztiCz4AMrAYabB8" target="_blank" >
                        <img src={process.env.PUBLIC_URL + '/image/popup_img.png'} alt="팝업이미지"/>
                    </a>
                </div>
                <ul className="btnWrap">
                    <li><button type="button" onClick={closePopupToday}>오늘 하루 보지 않기</button></li>
                    <li><button type="button" onClick={closePopup}>닫기</button></li>
                </ul>
            </div>
        </PopupContainer>
    )
}

const PopupContainer = styled.section`
    position: fixed; z-index: 999; left: 0; top: 0; width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.5); 
    display: flex; align-items: center; justify-content: center; 

    &.hide{ opacity:0; visibility:hidden; }

    .popupContainer{ 
        background-color: #fff; width: 100%; max-width: 400px;
        border-radius: 10px; overflow: hidden; margin: 10px; 
    }
    .imgWrap{ 
        width: 100%;
        img{ max-width:100%; display:block; margin: 0 auto; }
    }
    .btnWrap{ 
        display:flex; list-style:none; border-top:1px solid #dfdfdf; 
        > li{ 
            flex-grow:1; 
            button{ width:100%; padding:10px; border:none; background-color:transparent; color: #7f7f7f; font-size:14px; }
            +li{ 
                border-left:1px solid #dfdfdf; 
            }
        }
    }
`

export default MainPopup; 