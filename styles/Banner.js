import styled from 'styled-components';

const Banner = styled.div`
    align-items: center;
    display: flex;
    background-image: url('${props => props.bgImage ? props.bgImage : "../static/images/main.jpg"}');
    background-color: "#000";
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 0 !important;
    cursor: default;
    height: 60vh;
    margin-bottom: -3.25em;
    max-height: 32em;
    min-height: 22em;
    position: relative;
    top: -3.25em;

    &:after {
			transition: width 0.75s;
			transition-delay: 0.75s;
			pointer-events: none;
			background-color: ${props => props.colorOverlay ? props.colorOverlay : "#015571"};
			content: '';
			display: block;
			height: 100%;
			left: 0;
			opacity: 0.95;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
        }
`
export default Banner;