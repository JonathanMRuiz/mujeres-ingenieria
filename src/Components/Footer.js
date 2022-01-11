import React from 'react'
import style from '../Assets/scss/Footer.module.scss'
import { SocialIcon } from 'react-social-icons';
import { Row } from 'reactstrap'
const Footer = () => {
    return (
        <div className={style.container}>
            <div className="col-12">
            <div className={style.social}>
                <SocialIcon url="https://www.facebook.com/" network="facebook" target="_blank" fgColor="white"/>
                <SocialIcon url="https://www.instagram.com/" network="instagram" target="_blank" fgColor="white"/>
                <SocialIcon url="https://www.telegram.com/" network="telegram" target="_blank" fgColor="white"/>
            </div>
            </div>
        </div>
    )
}

export default Footer
