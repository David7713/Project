import React from 'react'
import './Content.css'

import ReactCountryFlag from "react-country-flag"

import { FaStar } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";


import AgodaImage from '../../Assets/Partner Logo/AgodaImage.png'
import KayakImage from '../../Assets/Partner Logo/KayakImage.png'
import RentalCarsImage from '../../Assets/Partner Logo/RentalcarsImage.png'
import OpentableImage from '../../Assets/Partner Logo/OpentableImage.png'
import BookingImage from '../../Assets/Partner Logo/BookingImage.png'

const Content = () => {
    return (
        <>
            <div className='content-section'>

                <div className='hotel-highlights-facilities-section'>
                    <div className='hotel-info-section'>
                        <span>New Yerevan Hotel and Hostel
                     <label className='star-icons'>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </label></span>
                        <label>Parseghov St, Ajapnyak, Yerevan, Armenia, 560052 </label>
                        <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. <br></br>Conveniently situated in the Ajapnyak part of Yerevan, this property puts you close to attractions <br></br>and interesting dining options. Don't leave before paying a visit to the famous Zvartnots International Airport.<br></br> As an added bonus, restaurant is provided on-site to conveniently serve your needs.d</p>
                    </div>

                    <div className='highlights-section'>
                        <span>Hightlights</span>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0H36V36H0z" />
                                        <path fill="#71C865" d="M5.625 4.375v17.491c0 1.304.636 2.526 1.703 3.275l10.098 7.081c.344.242.804.242 1.148 0l10.098-7.081c1.067-.749 1.703-1.971 1.703-3.275V4.375c0-.552-.448-1-1-1H6.625c-.552 0-1 .448-1 1z" />
                                        <path fill="#FE0" d="M27.557 32.114l.005 1.074-.005-1c-.018-3.492 2.991-6.336 6.722-6.353h.033c-3.733 0-6.765-2.823-6.783-6.316l-.005-.956v.992c0 3.468-3.005 6.28-6.712 6.28 3.712 0 6.726 2.806 6.745 6.28z" />
                                        <path fill="#333" fill-rule="nonzero" d="M29.25 3.375c.577 0 1.052.434 1.117.994l.008.131v17.106c0 .695-.16 1.369-.457 1.975 1.124 1.045 2.676 1.691 4.395 1.691.749 0 .75 1.124 0 1.125l-.287.006c-3.308.14-5.923 2.689-5.906 5.781l.005 1c.004.75-1.121.756-1.125.006l-.006-1.073c-.009-1.717-.83-3.26-2.125-4.309l-6.223 4.364c-.345.242-.791.269-1.158.08l-.134-.08-9.813-6.882c-1.13-.793-1.83-2.057-1.909-3.426l-.007-.258V4.5c0-.577.434-1.052.994-1.117l.131-.008h22.5zm0 1.125H6.75v17.106c0 1.027.467 1.994 1.262 2.632l.175.131L18 31.251l5.858-4.109c-.898-.474-1.937-.745-3.046-.745l-.118-.01c-.63-.111-.59-1.115.119-1.115l.254-.004c3.285-.124 5.894-2.643 5.894-5.713v-.992c0-.749 1.121-.751 1.125-.004l.005.957c.006 1.147.372 2.217 1 3.116.082-.26.134-.53.152-.807l.007-.219V4.5zm-1.712 17.665c-.707 1.611-2.047 2.909-3.725 3.625l-.108.043.113.046c1.681.714 3.026 2.01 3.741 3.62l.073-.159c.726-1.52 2.02-2.747 3.63-3.442l.148-.062-.119-.048c-1.614-.686-2.919-1.905-3.659-3.42zM20.812 6.75c.311 0 .563.252.563.563v3.937h3.938c.31 0 .562.252.562.563v5.624c0 .311-.252.563-.563.563h-3.937v3.938c0 .31-.252.562-.563.562h-5.625c-.31 0-.562-.252-.562-.563V18h-3.938c-.31 0-.562-.252-.562-.563v-5.625c0-.31.252-.562.563-.562h3.937V7.312c0-.31.252-.562.563-.562h5.624z" />
                                        <path fill="#FFF" fill-rule="nonzero" d="M20.25 7.875L15.75 7.875 15.75 12.375 11.25 12.375 11.25 16.875 15.75 16.875 15.75 21.375 20.25 21.375 20.25 16.875 24.75 16.875 24.75 12.375 20.25 12.375z" />
                                    </g>
                                </svg>
                                <p>Hygiene Plus</p>
                            </li>
                            <li><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9056 2.17068C21.1349 1.71199 21.6692 1.50658 22.1399 1.67733L22.2472 1.72347L28.2472 4.72347C28.5483 4.87404 28.7509 5.16436 28.7922 5.49304L28.8 5.61789V26.3818C28.8 26.7185 28.6309 27.0295 28.3554 27.2134L28.2472 27.2763L22.2472 30.2763C22.1083 30.3457 21.9552 30.3818 21.8 30.3818C21.2871 30.3818 20.8645 29.9958 20.8067 29.4984L20.8 29.3818L20.7995 27.9997L9.79998 27.9999C9.28715 27.9999 8.86448 27.6138 8.80671 27.1165L8.79998 26.9999L8.79989 21.555C8.26838 21.639 7.7078 21.5085 7.25777 21.1587L7.11205 21.0339L2.35352 16.4809L5.19557 13.7615L8.40899 16.8359L8.79952 16.4197L8.79998 4.99986C8.79998 4.48702 9.18603 4.06435 9.68336 4.00659L9.79998 3.99986L20.7995 3.99968L20.8 2.61789C20.8 2.50146 20.8203 2.38623 20.8598 2.27731L20.9056 2.17068Z" fill="black" />
                                <path d="M20.7998 5V27H9.7998V21.039L9.8888 20.95L17.1908 13.187L14.2068 10.618L9.7998 15.301V5H20.7998Z" fill="#DBE3E8" />
                                <path d="M21.7998 2.61768L27.7998 5.61768V26.3817L21.7998 29.3817V2.61768Z" fill="#75A8F9" />
                                <path d="M23.7998 17C24.3521 17 24.7998 16.5523 24.7998 16C24.7998 15.4477 24.3521 15 23.7998 15C23.2475 15 22.7998 15.4477 22.7998 16C22.7998 16.5523 23.2475 17 23.7998 17Z" fill="white" />
                                <path d="M14.3328 12L15.7998 13.2633L9.21367 20.2653C8.86438 20.6367 8.29827 20.6818 7.89683 20.3889L7.79393 20.3027L3.7998 16.481L5.19543 15.1457L8.4468 18.2562L14.3328 12Z" fill="#71C865" />
                            </svg>
                                <p>Check-in [24-hour]</p>
                            </li>
                            <li><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.2998 27H10.7998V29C10.7998 29.5523 10.3521 30 9.7998 30H7.2998C6.74752 30 6.2998 29.5523 6.2998 29V27ZM22.7998 27H27.2998V29C27.2998 29.5523 26.8521 30 26.2998 30H23.7998C23.2475 30 22.7998 29.5523 22.7998 29V27Z" fill="#787B81" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2998 20H24.2998C25.9567 20 27.2998 21.3431 27.2998 23V28H6.2998V23C6.2998 21.3431 7.64295 20 9.2998 20Z" fill="#DDE9FD" />
                                <path d="M10.1849 1.73386L10.0991 1.7739C9.80541 1.94427 9.74484 2.36103 10.004 2.60642L14.448 6.81347L11.3775 7.93126L9.48985 6.54409C8.78405 6.02537 7.86567 5.89383 7.04264 6.19356L6.14458 6.52061C5.80869 6.64294 5.69131 7.05837 5.91352 7.3384L9.05833 11.3013C9.75909 12.1843 10.9463 12.5199 12.0056 12.1343L26.4294 6.88426C27.51 6.49109 28.0672 5.29626 27.6735 4.21598L27.612 4.06526C27.1669 3.08475 26.0346 2.5972 25.0055 2.97163L20.3418 4.66903L13.8731 1.29667C13.2214 0.956896 12.4569 0.9066 11.7663 1.15806L10.1849 1.73386Z" fill="#75A8F9" />
                                <path d="M16.7998 13.5C19.02 13.5 20.943 13.6023 22.5703 13.8075C23.4844 13.9228 24.2556 14.5302 24.5866 15.3796L24.6468 15.5527L25.7068 19H27.2998C27.8521 19 28.2998 19.4477 28.2998 20C28.2998 20.5523 27.8521 21 27.2998 21L26.536 21.0001C27.011 21.5308 27.2998 22.2317 27.2998 23L27.2988 27.5H27.2998V29C27.2998 29.5128 26.9138 29.9355 26.4164 29.9933L26.2998 30H23.7998C23.287 30 22.8643 29.614 22.8065 29.1166L22.7998 29V28H10.7998V29C10.7998 29.5128 10.4138 29.9355 9.91643 29.9933L9.7998 30H7.2998C6.78697 30 6.3643 29.614 6.30653 29.1166L6.2998 29V28V23C6.2998 22.2317 6.58862 21.5308 7.06361 21.0001L6.2998 21C5.74752 21 5.2998 20.5523 5.2998 20C5.2998 19.4477 5.74752 19 6.2998 19H7.8918L8.95278 15.5527C9.2418 14.6134 10.0543 13.9305 11.0294 13.8075C12.6566 13.6023 14.5796 13.5 16.7998 13.5ZM9.7998 28H7.2998V29H9.7998V28ZM26.2998 28H23.7998V29H26.2998V28ZM24.2998 21H9.2998C8.24544 21 7.38164 21.8159 7.30529 22.8507L7.2998 23L7.2988 27H26.2988L26.2998 23C26.2998 21.9456 25.4839 21.0818 24.4491 21.0055L24.2998 21ZM10.7998 22.25C11.7663 22.25 12.5498 23.0335 12.5498 24C12.5498 24.9665 11.7663 25.75 10.7998 25.75C9.83331 25.75 9.0498 24.9665 9.0498 24C9.0498 23.0335 9.83331 22.25 10.7998 22.25ZM22.7998 22.25C23.7663 22.25 24.5498 23.0335 24.5498 24C24.5498 24.9665 23.7663 25.75 22.7998 25.75C21.8333 25.75 21.0498 24.9665 21.0498 24C21.0498 23.0335 21.8333 22.25 22.7998 22.25ZM16.7998 14.5C14.6188 14.5 12.7366 14.6001 11.1545 14.7997C10.6182 14.8673 10.1639 15.2172 9.95833 15.7092L9.90856 15.8467L8.60486 20.0809C8.82791 20.028 9.06059 20 9.2998 20H24.2998C24.539 20 24.7717 20.028 24.9947 20.0809L23.6911 15.8468C23.5176 15.2832 23.0301 14.8735 22.4451 14.7997C20.863 14.6001 18.9808 14.5 16.7998 14.5ZM13.6927 1.21119L13.8731 1.29667L20.3418 4.66903L25.0055 2.97163C25.9832 2.61592 27.0539 3.03815 27.5401 3.92192L27.612 4.06526L27.6735 4.21598C28.0493 5.24715 27.5587 6.38271 26.5734 6.82576L26.4294 6.88426L12.0056 12.1343C11.0052 12.4985 9.89061 12.2194 9.17952 11.4434L9.05832 11.3013L5.91352 7.3384C5.70982 7.08171 5.79148 6.71124 6.06523 6.55705L6.14458 6.52061L7.04264 6.19356C7.80688 5.91524 8.65334 6.00878 9.33546 6.43888L9.48985 6.54409L11.3775 7.93126L14.448 6.81347L10.004 2.60642C9.7684 2.38334 9.79704 2.01863 10.0249 1.82616L10.0991 1.7739L10.1849 1.73386L11.7663 1.15806C12.3941 0.92946 13.083 0.950245 13.6927 1.21119ZM12.2705 2.04815L12.1084 2.09771L11.2498 2.409L16.3105 7.19965L11.2166 9.05402L8.89764 7.34988C8.50496 7.06129 8.00584 6.96656 7.53905 7.08557L7.38484 7.13319L7.1078 7.234L9.84165 10.6797C10.2439 11.1866 10.9054 11.4016 11.5222 11.2389L11.6636 11.1946L26.0875 5.94453C26.6115 5.75385 26.8986 5.2004 26.7794 4.70004L26.7476 4.59379L26.7014 4.47857C26.486 4.004 25.9617 3.75488 25.4622 3.8766L25.3475 3.91133L20.27 5.75933L13.4108 2.18339C13.0583 1.99961 12.6524 1.95283 12.2705 2.04815Z" fill="#333333" />
                                <path d="M10.7998 25C11.3521 25 11.7998 24.5523 11.7998 24C11.7998 23.4477 11.3521 23 10.7998 23C10.2475 23 9.7998 23.4477 9.7998 24C9.7998 24.5523 10.2475 25 10.7998 25Z" fill="white" />
                                <path d="M22.7998 25C23.3521 25 23.7998 24.5523 23.7998 24C23.7998 23.4477 23.3521 23 22.7998 23C22.2475 23 21.7998 23.4477 21.7998 24C21.7998 24.5523 22.2475 25 22.7998 25Z" fill="white" />
                            </svg>
                                <p>Airport transfer </p>
                            </li>
                            <li >
                                <IoWifi className='highlights-icon'></IoWifi>
                                <p>Free Wi-Fi in all rooms!</p>
                            </li>
                            <li ><MdCleaningServices className='highlights-icon'></MdCleaningServices>
                                <p> Daily housekeeping</p>
                            </li>

                        </ul>
                    </div>



                    <div className='facilities-section'>
                        <span>Facilities</span>
                        <ul>
                            <li><FaCheck className='check-icon'></FaCheck> &nbsp;Front desk [24-hour]</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Free Cancelation available</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Bicycle rental</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Shuttle service</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Free Wi-Fi in all rooms!</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Car park</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Pets allowed</li>
                        </ul>
                    </div>
                </div>



                <div className='rating-map-section'>
                    <div className='rating-section'>
                        <p>8.3 Excellent</p>
                        <span>11 Reviews</span>
                    </div>
                    <div className='map-section'>
                        <iframe className='location' width="425" height="293" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=425&amp;height=293&amp;hl=en&amp;q=Parseghov%20St,%20Ajapnyak%20Yerevan+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>


            </div>
            <div className='review-section'>
                <div className='first-review'>
                    <div className='user-info-part'>
                        <label>9.3 Excellent</label>
                        <br></br>
                        <ul>
                            <li>
                                <ReactCountryFlag countryCode="CH" svg className='country-svg' />
                                Brian from Switzerland</li><br></br>
                            <li><IoBagHandleOutline></IoBagHandleOutline>  &nbsp;2Adult 1 Children</li><br></br>
                            <li><IoBedOutline></IoBedOutline>  &nbsp;Deluxe Room with King Bed</li><br></br>
                            <li><CiCalendar></CiCalendar>  &nbsp;Stayed 1 night in January 2023</li><br></br>
                        </ul>
                    </div>

                    <div className='review-text-part'>
                        <label>"Great location"</label>
                        <p>Everything was great: staff, location at the public squate, very spacious room and WC, cleanliness, facilities, decoration... I recommand this hotel.</p>
                        <span>Reviewed January 12, 2023</span>
                    </div>
                </div>
            </div>



            <div className='review-section'>
                <div className='first-review'>
                    <div className='user-info-part'>
                        <label>8.4 Excellent</label>
                        <br></br>
                        <ul>
                            <li>
                                <ReactCountryFlag countryCode="FR" svg className='country-svg' />
                                Nancy from France</li><br></br>
                            <li><IoBagHandleOutline></IoBagHandleOutline>  &nbsp;Couple</li><br></br>
                            <li><IoBedOutline></IoBedOutline>  &nbsp;Deluxe Room with King Bed</li><br></br>
                            <li><CiCalendar></CiCalendar>  &nbsp;Stayed 3 night in September 2023</li><br></br>
                        </ul>
                    </div>


                    <div className='review-text-part'>
                        <label>"Excellent"</label>
                        <p>Location: spot on Staff: nice Room: nice Quality price: good One word of caution: do not pay for the executive lounge option. .</p>
                        <span>Reviewed September 4, 2023</span>
                    </div>
                </div>



            </div>
            <div className='review-section'>
                <div className='first-review'>
                    <div className='user-info-part'>
                        <label>8.2 Excellent</label>
                        <br></br>
                        <ul>
                            <li>
                                <ReactCountryFlag countryCode="US" svg className='country-svg' />
                                Bob from USA</li><br></br>
                            <li><IoBagHandleOutline></IoBagHandleOutline>  &nbsp;Solo Traveler</li><br></br>
                            <li><IoBedOutline></IoBedOutline>  &nbsp;Junior Suit</li><br></br>
                            <li><CiCalendar></CiCalendar>  &nbsp;Stayed 3 night in March 2023</li><br></br>
                        </ul>
                    </div>
                    <div className='review-text-part'>
                        <label>"Superb location"
                        </label>
                        <p>The hotel is located in the best location. The property is an iconic building and has all the required facilities. Enjoyed the stay!</p>
                        <span>Reviewed March 22, 2023</span>
                    </div>
                </div>
            </div>


            <div className='review-section'>
                <div className='first-review'>
                    <div className='user-info-part'>
                        <label>9.5 Excellent</label>
                        <br></br>
                        <ul>
                            <li>
                                <ReactCountryFlag countryCode="AR" svg className='country-svg' />
                               Sofia from Argentina</li><br></br>
                            <li><IoBagHandleOutline></IoBagHandleOutline>  &nbsp;Solo Traveler</li><br></br>
                            <li><IoBedOutline></IoBedOutline>  &nbsp;Solo Traveler</li><br></br>
                            <li><CiCalendar></CiCalendar>  &nbsp;Stayed 3 night in August 2023</li><br></br>
                        </ul>
                    </div>
                    <div className='review-text-part'>
                        <label>I highly recommend
                        </label>
                        <p>I recently stayed at  this Hotel and it was a fantastic experience. The staff was friendly and attentive, making me feel welcome from the moment I arrived. The room was clean, comfortable.</p>
                        <span>Reviewed August 13, 2023</span>
                    </div>
                </div>
            </div>







            <div className='footer-section'>
                <div className='footer-text-section'>
                    <p>All material herein © 2005–2023 Agoda Company Pte. Ltd. All Rights Reserved.</p>
                    <p>Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
                </div>
                <div className='partner-logos-section'>
                    <img src={AgodaImage}></img>
                    <img src={KayakImage}></img>
                    <img src={OpentableImage}></img>
                    <img src={RentalCarsImage}></img>
                    <img src={BookingImage}></img>
                
                </div>
            </div>
        </>
    )
}

export default Content