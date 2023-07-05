import React from 'react'
import '../styles/homepage.css'
import { FaAngleLeft} from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import NewsGrid from './news cards/newsgridsection'
import { SecPage } from './secondpart'


export const HomePage = () => {
    return (
        <div className="HomePage">
            <div className='NewsFlashBundle'>
                <div className='NewsFlash'>
                    <div className='newsflashtitle'>NEWSFLASH</div>
                    <div className='content'> Flashing News Will Be Appearing Here In A Scrolling (up and down )</div>
                </div>
                <div> <FaAngleLeft className='NewsFlashNavBtns' /> </div>
                <div> <FaAngleRight className='NewsFlashNavBtns'/></div>
            </div>
            <NewsGrid />
            <SecPage/>
        </div>
    );
}