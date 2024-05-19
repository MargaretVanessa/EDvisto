import PropTypes from "prop-types";

const Message = ({ color, width }) => {
    return (
        <svg
            width={width}
            height={width}
            viewBox="0 0 51 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1175_3214)">
                <path
                    d="M8.32372 34.4428C9.10028 34.9734 9.20194 35.3589 8.79634 36.2367C7.94779 38.0739 6.96895 40.2512 6.14281 42.4778C5.92269 43.0707 5.90692 44.2289 6.38306 44.6939C6.77269 45.0746 7.43368 45.1268 8.07289 45.1771C8.2619 45.192 8.44032 45.206 8.60837 45.2282C8.63555 45.2319 8.66291 45.2336 8.69032 45.2336C8.92281 45.2114 9.14671 45.1344 9.34343 45.009L9.42642 44.9656C10.127 44.6043 10.8282 44.244 11.5302 43.8848C13.5337 42.8576 15.6053 41.7947 17.6225 40.7106L17.6414 40.7007C20.0687 39.397 22.3595 38.1649 25.1726 38.7065C25.29 38.7251 25.4091 38.7299 25.5278 38.7201C25.5653 38.7183 25.6033 38.7166 25.6404 38.7162C32.3234 38.6556 37.473 37.272 41.8466 34.3625C48.5452 29.9058 51.5529 23.5279 50.0985 16.8643C48.752 10.6946 46.097 6.85569 41.4904 4.41739C36.807 1.93897 31.5294 0.514869 26.63 0.407471C26.6282 0.40778 26.6263 0.40778 26.6246 0.407471C20.5773 0.431268 15.525 1.425 10.7254 3.53551C4.90713 6.09341 1.71688 9.76833 0.972688 14.7701C0.651894 16.8048 0.613629 18.8738 0.858988 20.9189C1.66459 27.1379 4.1065 31.5615 8.32372 34.4428ZM10.3721 39.4713C10.7766 38.0319 11.1584 36.6723 11.6345 35.3699C12.3814 33.3285 11.2791 32.1815 10.2362 31.4102C8.64986 30.2377 7.0453 28.8879 6.05235 26.9692C3.48804 22.0142 3.13908 17.3725 4.98472 12.7788C5.98576 10.2875 8.01791 8.43779 11.3799 6.95739C16.0204 4.91414 20.6391 3.89259 25.2053 3.89259C29.7516 3.91279 34.2408 4.90516 38.3703 6.80259C43.1379 8.94496 45.7819 12.4784 46.6912 17.9228C47.4381 22.3906 46.1968 26.1119 42.7871 29.6333C39.7506 32.769 35.6566 34.6142 29.9033 35.44C27.0035 35.8564 23.5736 36.2013 20.1216 35.6027C19.6907 35.5296 19.2088 35.7989 18.819 36.0166C16.4822 37.3264 14.1675 38.6401 11.7171 40.0311L9.92476 41.0479C10.0812 40.5066 10.2285 39.9824 10.3721 39.4715V39.4713Z"
                    fill={color}
                />
                <path
                    d="M16.3265 22.6061H16.3554C16.681 22.6051 17.0031 22.5391 17.3028 22.4122C17.6025 22.2851 17.8738 22.0999 18.1008 21.8671C18.2958 21.6664 18.448 21.4282 18.5483 21.1673C18.6485 20.9063 18.6947 20.6278 18.684 20.3485C18.6472 19.7792 18.4009 19.2436 17.9923 18.8446C17.5837 18.4454 17.0417 18.2109 16.4703 18.1862C16.1668 18.1881 15.8666 18.2502 15.5873 18.3687C15.3079 18.4871 15.0549 18.6596 14.8429 18.8763C14.6118 19.0965 14.4266 19.3602 14.2981 19.6521C14.1694 19.944 14.0999 20.2584 14.0935 20.5772C14.0918 20.8362 14.142 21.093 14.2411 21.3324C14.3402 21.5719 14.4863 21.7889 14.6707 21.9714C15.1167 22.3932 15.7122 22.6214 16.3265 22.6061Z"
                    fill={color}
                />
                <path
                    d="M26.1524 23.1803H26.1732C26.7362 23.1758 27.2746 22.9496 27.6713 22.551C28.0885 22.1465 28.329 21.594 28.3404 21.0137C28.3452 20.4343 28.0236 19.7492 27.5012 19.2267C27.147 18.8303 26.653 18.5857 26.1223 18.5438H26.1157C25.0441 18.55 23.9771 19.722 23.9615 20.9098C23.9562 21.2068 24.0101 21.5019 24.1203 21.7777C24.2302 22.0538 24.3941 22.3052 24.6026 22.5173C24.8041 22.7246 25.0447 22.89 25.3107 23.0038C25.5769 23.1176 25.8628 23.1776 26.1524 23.1803Z"
                    fill={color}
                />
                <path
                    d="M35.5062 22.9401H35.5199C36.0537 22.9197 36.5618 22.7053 36.9484 22.3376C37.3351 21.9696 37.5737 21.4736 37.6195 20.9427C37.605 20.418 37.3842 19.9199 37.0048 19.5562C36.4944 18.9892 35.7861 18.638 35.0249 18.5745C34.8318 18.5707 34.6401 18.6063 34.4612 18.6788C34.2824 18.7513 34.1203 18.8592 33.9847 18.9962C33.7712 19.2151 33.6033 19.4743 33.4913 19.7585C33.3793 20.0427 33.3249 20.3463 33.3318 20.6517C33.3187 21.2421 33.5398 21.8134 33.9471 22.242C34.3542 22.6703 34.9145 22.9215 35.5062 22.9401Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_1175_3214">
                    <rect
                        width="50"
                        height="44.9045"
                        fill="white"
                        transform="translate(0.5 0.405029)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

Message.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

export default Message;