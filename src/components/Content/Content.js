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
                        <span>Marco Polo Hotel
                            <label className='star-icons'>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </label></span>
                        <label>Al Mateena St, Deira, Dubai, United Arab Emirates, 25570 </label>
                        <p>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go <br></br> you please. Strategically situated in Deira, allowing you access and proximity to local attractions and sights. <br></br>and interesting dining options. Don't leave before paying a visit to the famous Burj Khalifa.<br></br> Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and hot tub on-site.</p>
                    </div>

                    <div className='highlights-section'>
                        <span>Hightlights</span>
                        <ul>
                            <li>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4717 22.5V18.3353L25.77 16H4.87065L2.47168 13.1707V22.5C2.47168 23.0523 2.91939 23.5 3.47168 23.5H30.4717C31.024 23.5 31.4717 23.0523 31.4717 22.5Z" fill="#F38141" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.2998 13L4.7998 16H25.7998L31.2998 18.5V10.5L29.7998 8L27.7998 7.5H5.7998L3.2998 8.5L2.2998 11V13Z" fill="white" />
                                    <path d="M5.7998 7H27.7998C30.0089 7 31.7998 8.79086 31.7998 11V22C31.7998 23.1046 30.9044 24 29.7998 24H3.7998C2.69524 24 1.7998 23.1046 1.7998 22V11C1.7998 8.79086 3.59067 7 5.7998 7ZM5.7998 8C4.14295 8 2.7998 9.34315 2.7998 11V22C2.7998 22.5523 3.24752 23 3.7998 23H29.7998C30.3521 23 30.7998 22.5523 30.7998 22V11C30.7998 9.34315 29.4567 8 27.7998 8H5.7998Z" fill="#333333" />
                                    <path d="M30.2998 25.5H3.2998C3.02366 25.5 2.7998 25.7239 2.7998 26C2.7998 26.2761 3.02366 26.5 3.2998 26.5H30.2998C30.5759 26.5 30.7998 26.2761 30.7998 26C30.7998 25.7239 30.5759 25.5 30.2998 25.5Z" fill="#333333" />
                                    <path d="M2.09082 13.4941L3.89069 15.6169C4.3657 16.1771 5.06303 16.5001 5.79753 16.5001H25.3768C25.5718 16.5001 25.7649 16.5381 25.9454 16.612L31.2827 18.7981L31.6617 17.8727L26.3244 15.6866C26.0237 15.5634 25.7018 15.5001 25.3768 15.5001H5.79753C5.35683 15.5001 4.93843 15.3063 4.65343 14.9702L2.42007 12.3401L2.09082 13.4941Z" fill="#333333" />
                                    <path d="M9.2998 21C8.60945 21 7.98445 21.2798 7.53204 21.7322C7.07963 22.1846 6.7998 22.8096 6.7998 23.5C6.7998 24.1904 7.07963 24.8154 7.53204 25.2678C7.98445 25.7202 8.60945 26 9.2998 26C9.99016 26 10.6152 25.7202 11.0676 25.2678C11.52 24.8154 11.7998 24.1904 11.7998 23.5C11.7998 22.8096 11.52 22.1846 11.0676 21.7322C10.6152 21.2798 9.99016 21 9.2998 21Z" fill="white" stroke="#333333" />
                                    <path d="M27.7998 19H31.7998V22H27.7998C27.2475 22 26.7998 21.5523 26.7998 21V20C26.7998 19.4477 27.2475 19 27.7998 19Z" fill="#333333" />
                                    <path d="M30.7998 20H27.7998V21H30.7998V20Z" fill="white" />
                                    <path d="M23.2998 21C22.6094 21 21.9844 21.2798 21.532 21.7322C21.0796 22.1846 20.7998 22.8096 20.7998 23.5C20.7998 24.1904 21.0796 24.8154 21.532 25.2678C21.9844 25.7202 22.6094 26 23.2998 26C23.9902 26 24.6152 25.7202 25.0676 25.2678C25.52 24.8154 25.7998 24.1904 25.7998 23.5C25.7998 22.8096 25.52 22.1846 25.0676 21.7322C24.6152 21.2798 23.9902 21 23.2998 21Z" fill="white" stroke="#333333" />
                                    <path d="M13.7998 12.5C13.7998 12.2239 13.5759 12 13.2998 12C13.0237 12 12.7998 12.2239 12.7998 12.5V15.5C12.7998 15.7761 13.0237 16 13.2998 16C13.5759 16 13.7998 15.7761 13.7998 15.5V12.5Z" fill="#333333" />
                                    <path d="M22.7998 8H21.7998V16H22.7998V8Z" fill="#333333" />
                                </svg>

                                <p>430 meters to public transportation</p>
                            </li>
                            <li><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.7998 28.3332C7.69524 28.3332 6.7998 27.4377 6.7998 26.3332V19.3332C6.7998 18.2286 7.69524 17.3332 8.7998 17.3332H12.7998L12.9729 17.1729L13.2401 16.9025C14.1207 15.9755 16.1292 13.5246 17.4726 9.28416C17.777 8.32339 18.6744 7.6665 19.6933 7.6665C20.922 7.6665 21.728 8.63983 21.7952 9.83549L21.7998 9.99984V14.9998H28.7998C29.8473 14.9998 30.7258 16.1091 30.8002 17.1736L30.8053 17.3183V19.8871C30.8053 22.4745 30.6391 25.1606 29.6668 27.5628C28.9139 29.4231 27.4031 29.4918 25.4663 29.4874L24.8053 29.485L12.7998 28.3332H8.7998Z" fill="black" />
                                <path d="M19.6933 8.6665C19.1112 8.6665 18.5989 9.0402 18.4259 9.58617C17.9436 11.1085 17.3521 12.4963 16.6748 13.7526C15.7431 15.4806 14.801 16.7322 14.0334 17.5361L13.7998 17.7705V27.4235L24.8053 28.4852H25.7064C27.7828 28.4664 28.316 28.2349 28.7398 27.1876C29.4889 25.3369 29.7764 23.259 29.8032 20.3529L29.8053 19.8871V17.3183C29.8053 16.7149 29.3219 16.0893 28.8911 16.0086L28.7998 15.9998H20.7998V9.99937C20.8002 9.1973 20.3425 8.6665 19.6933 8.6665Z" fill="white" />
                                <path d="M12.7998 27.333V18.333L8.7998 18.3333C8.28697 18.3333 7.8643 18.7194 7.80653 19.2167L7.7998 19.3333V26.3333C7.7998 26.8462 8.18584 27.2688 8.68318 27.3266L8.7998 27.3333L12.7998 27.333Z" fill="#75A8F9" />
                                <path d="M8.29474 14.0487L8.29978 15.0026C8.30328 15.6693 9.30328 15.664 9.29976 14.9974L9.29508 14.1083C9.28048 11.3596 11.6044 9.09435 14.5449 8.96973L14.8009 8.96433C15.4668 8.96282 15.4657 7.96433 14.7998 7.96433C11.7492 7.96433 9.28485 5.66987 9.26967 2.84739L9.26513 1.99733C9.26159 1.33245 8.26514 1.33511 8.26514 2V2.88241C8.26514 5.61141 5.94583 7.84986 3.02559 7.96008L2.7998 7.96433C2.17018 7.96433 2.1352 8.85631 2.69487 8.95541L2.7998 8.96433C5.83115 8.96433 8.27983 11.2442 8.29474 14.0487Z" fill="black" />
                                <path d="M8.77809 5.20215L8.86215 5.38249C9.51967 6.72985 10.6799 7.81295 12.1145 8.42249L12.2201 8.46515L12.0878 8.52041C10.658 9.13808 9.50684 10.2288 8.86209 11.5805L8.79709 11.7221C8.16148 10.2909 6.96618 9.13875 5.4713 8.50358L5.37109 8.46315L5.46728 8.42436C6.95903 7.78813 8.14985 6.63446 8.77809 5.20215Z" fill="#FFEE00" />
                            </svg>

                                <p>Great for activities </p>
                            </li>
                            <li><svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7998 18.6607L11.4142 9C11.4142 9 8.53859 10.1179 5.92961 13.8554C4.19923 16.3342 3.846 19.9874 3.80433 22.1668C3.78919 22.9587 4.68548 23.3862 5.34818 22.9524C6.25739 22.3572 7.535 21.5768 9.06026 20.7964C12.1909 19.1947 14.7998 18.6607 14.7998 18.6607Z" fill="#E8CC97" stroke="black" />
                                <path d="M19.7998 18.6107L23.0863 9C23.0863 9 25.825 10.1179 28.5639 13.8554C30.397 16.3568 30.7579 20.0539 30.7961 22.2258C30.8098 23.0055 29.9363 23.4305 29.2758 23.0159C28.316 22.4134 26.9362 21.6049 25.2774 20.7964C21.9909 19.1947 19.7998 18.6107 19.7998 18.6107Z" fill="#E8CC97" stroke="black" />
                                <path d="M9.7998 21L5.7998 14" stroke="black" />
                                <path d="M24.7998 21L28.7998 14" stroke="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3851 7C15.1709 7 12.9061 7.46002 10.9687 8.29105L10.7998 8.36618L14.6655 19L14.9822 18.9632C15.5122 18.9081 16.0451 18.8712 16.5804 18.8527L17.3851 18.8388C18.1914 18.8388 18.9932 18.8806 19.788 18.9632L20.1043 19L23.7998 8.29101C22.0239 7.52914 19.9739 7.07922 17.9394 7.00953L17.3851 7Z" fill="#D1A470" stroke="black" />
                            </svg>

                                <p>Free Meal </p>
                            </li>
                            <li >
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.2998 27H10.7998V29C10.7998 29.5523 10.3521 30 9.7998 30H7.2998C6.74752 30 6.2998 29.5523 6.2998 29V27ZM22.7998 27H27.2998V29C27.2998 29.5523 26.8521 30 26.2998 30H23.7998C23.2475 30 22.7998 29.5523 22.7998 29V27Z" fill="#787B81" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2998 20H24.2998C25.9567 20 27.2998 21.3431 27.2998 23V28H6.2998V23C6.2998 21.3431 7.64295 20 9.2998 20Z" fill="#DDE9FD" />
                                    <path d="M10.1849 1.73386L10.0991 1.7739C9.80541 1.94427 9.74484 2.36103 10.004 2.60642L14.448 6.81347L11.3775 7.93126L9.48985 6.54409C8.78405 6.02537 7.86567 5.89383 7.04264 6.19356L6.14458 6.52061C5.80869 6.64294 5.69131 7.05837 5.91352 7.3384L9.05833 11.3013C9.75909 12.1843 10.9463 12.5199 12.0056 12.1343L26.4294 6.88426C27.51 6.49109 28.0672 5.29626 27.6735 4.21598L27.612 4.06526C27.1669 3.08475 26.0346 2.5972 25.0055 2.97163L20.3418 4.66903L13.8731 1.29667C13.2214 0.956896 12.4569 0.9066 11.7663 1.15806L10.1849 1.73386Z" fill="#75A8F9" />
                                    <path d="M16.7998 13.5C19.02 13.5 20.943 13.6023 22.5703 13.8075C23.4844 13.9228 24.2556 14.5302 24.5866 15.3796L24.6468 15.5527L25.7068 19H27.2998C27.8521 19 28.2998 19.4477 28.2998 20C28.2998 20.5523 27.8521 21 27.2998 21L26.536 21.0001C27.011 21.5308 27.2998 22.2317 27.2998 23L27.2988 27.5H27.2998V29C27.2998 29.5128 26.9138 29.9355 26.4164 29.9933L26.2998 30H23.7998C23.287 30 22.8643 29.614 22.8065 29.1166L22.7998 29V28H10.7998V29C10.7998 29.5128 10.4138 29.9355 9.91643 29.9933L9.7998 30H7.2998C6.78697 30 6.3643 29.614 6.30653 29.1166L6.2998 29V28V23C6.2998 22.2317 6.58862 21.5308 7.06361 21.0001L6.2998 21C5.74752 21 5.2998 20.5523 5.2998 20C5.2998 19.4477 5.74752 19 6.2998 19H7.8918L8.95278 15.5527C9.2418 14.6134 10.0543 13.9305 11.0294 13.8075C12.6566 13.6023 14.5796 13.5 16.7998 13.5ZM9.7998 28H7.2998V29H9.7998V28ZM26.2998 28H23.7998V29H26.2998V28ZM24.2998 21H9.2998C8.24544 21 7.38164 21.8159 7.30529 22.8507L7.2998 23L7.2988 27H26.2988L26.2998 23C26.2998 21.9456 25.4839 21.0818 24.4491 21.0055L24.2998 21ZM10.7998 22.25C11.7663 22.25 12.5498 23.0335 12.5498 24C12.5498 24.9665 11.7663 25.75 10.7998 25.75C9.83331 25.75 9.0498 24.9665 9.0498 24C9.0498 23.0335 9.83331 22.25 10.7998 22.25ZM22.7998 22.25C23.7663 22.25 24.5498 23.0335 24.5498 24C24.5498 24.9665 23.7663 25.75 22.7998 25.75C21.8333 25.75 21.0498 24.9665 21.0498 24C21.0498 23.0335 21.8333 22.25 22.7998 22.25ZM16.7998 14.5C14.6188 14.5 12.7366 14.6001 11.1545 14.7997C10.6182 14.8673 10.1639 15.2172 9.95833 15.7092L9.90856 15.8467L8.60486 20.0809C8.82791 20.028 9.06059 20 9.2998 20H24.2998C24.539 20 24.7717 20.028 24.9947 20.0809L23.6911 15.8468C23.5176 15.2832 23.0301 14.8735 22.4451 14.7997C20.863 14.6001 18.9808 14.5 16.7998 14.5ZM13.6927 1.21119L13.8731 1.29667L20.3418 4.66903L25.0055 2.97163C25.9832 2.61592 27.0539 3.03815 27.5401 3.92192L27.612 4.06526L27.6735 4.21598C28.0493 5.24715 27.5587 6.38271 26.5734 6.82576L26.4294 6.88426L12.0056 12.1343C11.0052 12.4985 9.89061 12.2194 9.17952 11.4434L9.05832 11.3013L5.91352 7.3384C5.70982 7.08171 5.79148 6.71124 6.06523 6.55705L6.14458 6.52061L7.04264 6.19356C7.80688 5.91524 8.65334 6.00878 9.33546 6.43888L9.48985 6.54409L11.3775 7.93126L14.448 6.81347L10.004 2.60642C9.7684 2.38334 9.79704 2.01863 10.0249 1.82616L10.0991 1.7739L10.1849 1.73386L11.7663 1.15806C12.3941 0.92946 13.083 0.950245 13.6927 1.21119ZM12.2705 2.04815L12.1084 2.09771L11.2498 2.409L16.3105 7.19965L11.2166 9.05402L8.89764 7.34988C8.50496 7.06129 8.00584 6.96656 7.53905 7.08557L7.38484 7.13319L7.1078 7.234L9.84165 10.6797C10.2439 11.1866 10.9054 11.4016 11.5222 11.2389L11.6636 11.1946L26.0875 5.94453C26.6115 5.75385 26.8986 5.2004 26.7794 4.70004L26.7476 4.59379L26.7014 4.47857C26.486 4.004 25.9617 3.75488 25.4622 3.8766L25.3475 3.91133L20.27 5.75933L13.4108 2.18339C13.0583 1.99961 12.6524 1.95283 12.2705 2.04815Z" fill="#333333" />
                                    <path d="M10.7998 25C11.3521 25 11.7998 24.5523 11.7998 24C11.7998 23.4477 11.3521 23 10.7998 23C10.2475 23 9.7998 23.4477 9.7998 24C9.7998 24.5523 10.2475 25 10.7998 25Z" fill="white" />
                                    <path d="M22.7998 25C23.3521 25 23.7998 24.5523 23.7998 24C23.7998 23.4477 23.3521 23 22.7998 23C22.2475 23 21.7998 23.4477 21.7998 24C21.7998 24.5523 22.2475 25 22.7998 25Z" fill="white" />
                                </svg>

                                <p>Airport transfer</p>
                            </li>
                            <li>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9056 2.17068C21.1349 1.71199 21.6692 1.50658 22.1399 1.67733L22.2472 1.72347L28.2472 4.72347C28.5483 4.87404 28.7509 5.16436 28.7922 5.49304L28.8 5.61789V26.3818C28.8 26.7185 28.6309 27.0295 28.3554 27.2134L28.2472 27.2763L22.2472 30.2763C22.1083 30.3457 21.9552 30.3818 21.8 30.3818C21.2871 30.3818 20.8645 29.9958 20.8067 29.4984L20.8 29.3818L20.7995 27.9997L9.79998 27.9999C9.28715 27.9999 8.86448 27.6138 8.80671 27.1165L8.79998 26.9999L8.79989 21.555C8.26838 21.639 7.7078 21.5085 7.25777 21.1587L7.11205 21.0339L2.35352 16.4809L5.19557 13.7615L8.40899 16.8359L8.79952 16.4197L8.79998 4.99986C8.79998 4.48702 9.18603 4.06435 9.68336 4.00659L9.79998 3.99986L20.7995 3.99968L20.8 2.61789C20.8 2.50146 20.8203 2.38623 20.8598 2.27731L20.9056 2.17068Z" fill="black" />
                                    <path d="M20.7998 5V27H9.7998V21.039L9.8888 20.95L17.1908 13.187L14.2068 10.618L9.7998 15.301V5H20.7998Z" fill="#DBE3E8" />
                                    <path d="M21.7998 2.61768L27.7998 5.61768V26.3817L21.7998 29.3817V2.61768Z" fill="#75A8F9" />
                                    <path d="M23.7998 17C24.3521 17 24.7998 16.5523 24.7998 16C24.7998 15.4477 24.3521 15 23.7998 15C23.2475 15 22.7998 15.4477 22.7998 16C22.7998 16.5523 23.2475 17 23.7998 17Z" fill="white" />
                                    <path d="M14.3328 12L15.7998 13.2633L9.21367 20.2653C8.86438 20.6367 8.29827 20.6818 7.89683 20.3889L7.79393 20.3027L3.7998 16.481L5.19543 15.1457L8.4468 18.2562L14.3328 12Z" fill="#71C865" />
                                </svg>

                                <p> Front desk [24-hour]</p>
                            </li>

                        </ul>
                    </div>



                    <div className='facilities-section'>
                        <span>Facilities</span>
                        <ul>
                            <li><FaCheck className='check-icon'></FaCheck> &nbsp;Front desk [24-hour]</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Free Cancelation available</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Fitness Centerl</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Shuttle service</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Free Wi-Fi in all rooms!</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Airport Transfer</li>
                            <li> <FaCheck className='check-icon'></FaCheck> &nbsp;Swimming Pool</li>
                        </ul>
                    </div>
                </div>



                <div className='rating-map-section'>
                    <div className='rating-section'>
                        <p>8.3 Excellent</p>
                        <span>25 Reviews</span>
                    </div>
                    <div className='map-section'>
                        <iframe className='location' width="425" height="293" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=425&amp;height=293&amp;hl=en&amp;q=Marco%20Polo%20Hotel%20Al%20Mateena%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates%20Ilford+(Marco%20Polo%20Hotel)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


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
                            <li><IoBagHandleOutline></IoBagHandleOutline>  &nbsp;2 &nbsp;Adult 1 Children</li><br></br>
                            <li><IoBedOutline></IoBedOutline>  &nbsp;Deluxe Room with King Bed</li><br></br>
                            <li><CiCalendar></CiCalendar>  &nbsp;Stayed 1 night in January 2023</li><br></br>
                        </ul>
                    </div>

                    <div className='review-text-part'>
                        <label>"Great location"</label>
                        <p>Everything was great: staff, location at the public squate, very spacious room and WC, cleanliness, facilities, decoration... <br></br>I recommand this hotel.</p>
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
                        <p>"Excellent stay! The hotel offered a clean and cozy atmosphere, friendly staff. Highly recommended for a pleasant experience."</p>
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
                            <li><IoBedOutline></IoBedOutline>  &nbsp;Junior Suit</li><br></br>
                            <li><CiCalendar></CiCalendar>  &nbsp;Stayed 3 night in August 2023</li><br></br>
                        </ul>
                    </div>
                    <div className='review-text-part'>
                        <label>I highly recommend
                        </label>
                        <p>I recently stayed at  this Hotel and it was a fantastic experience. The staff was friendly and attentive, making me feel welcome<br></br> from the moment I arrived. The room was clean, comfortable.</p>
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