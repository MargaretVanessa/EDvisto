import PropTypes from "prop-types";

const Edit = ({ color, width }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2660_6324)">
<path d="M0.87131 23.7405C0.368041 23.7352 0.104237 23.4792 0.0946372 23.0385C0.093167 22.9141 0.108997 22.79 0.14169 22.6699C0.510664 21.2784 0.901249 19.8924 1.24884 18.4953C1.40006 17.8178 1.72982 17.1927 2.20404 16.6848C3.49732 15.3305 4.76953 13.9559 6.07795 12.6166C9.51986 9.09354 13.1295 5.74708 16.834 2.5014C17.6383 1.79672 18.4297 1.0763 19.2526 0.39379C19.7423 -0.0122193 19.9298 -0.00294513 20.4243 0.418367C21.1298 1.01957 21.8095 1.65118 22.4937 2.27695C22.8621 2.61373 23.2152 2.96707 23.5779 3.30999C24.0475 3.754 24.0464 4.2284 23.5988 4.69947C22.8864 5.44902 22.1929 6.21595 21.4796 6.96436C21.2229 7.23379 20.9265 7.465 20.6579 7.7235C16.4552 11.7683 12.2532 15.8138 8.052 19.86C7.38501 20.5019 6.71718 21.1434 6.0336 21.7675C5.85643 21.9175 5.65332 22.0339 5.43424 22.1111C4.12014 22.616 2.80264 23.1119 1.48173 23.5988C1.28199 23.6609 1.07798 23.7082 0.87131 23.7405ZM4.52692 19.3958L18.682 5.81016C18.3725 5.52044 18.0777 5.24435 17.7312 4.91976C12.8695 9.26644 8.44676 14.0332 3.85055 18.6678L4.52692 19.3958ZM5.84337 20.7468C10.5683 16.187 15.311 11.7661 19.8406 7.14126L19.4265 6.61449C14.5411 11.0089 9.89425 15.5549 5.13296 19.9575L5.84337 20.7468ZM3.21119 18.0841C7.72799 13.3324 12.2614 8.73155 17.0164 4.30064L16.5282 3.86747C11.7057 8.17273 7.12509 12.6987 2.73539 17.4395C2.84871 17.5807 2.92811 17.6741 3.00104 17.7726C3.06522 17.8585 3.12157 17.9499 3.21162 18.0841H3.21119ZM22.7064 4.15999C21.9187 3.15506 20.2291 1.50219 19.7295 1.24058L17.4986 3.18027L20.8795 6.16101C21.499 5.48308 22.0948 4.83021 22.7068 4.15999H22.7064ZM2.07779 18.05C1.90384 18.9437 1.74667 19.7224 1.60674 20.5042C1.58954 20.6235 1.61858 20.7449 1.68793 20.8435C2.00922 21.244 2.35022 21.6288 2.69696 22.034L4.77569 21.2403L2.07779 18.05Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_2660_6324">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  )
}

Edit.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};


export default Edit

