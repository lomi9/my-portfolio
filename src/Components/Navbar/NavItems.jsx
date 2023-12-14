import React, { useRef, useEffect } from 'react';
import { gsap, Elastic } from 'gsap';
import { Link } from 'react-scroll';

export default function NavItem({ item, href, onClick }) {
    const circleRef = useRef(null);
    const linkRef = useRef(null);

    useEffect(() => {
        const gTimeline = gsap.timeline({ paused: true });

        gTimeline.to(circleRef.current, {
            width: "calc(100% + 1em)",
            ease: Elastic.easeOut.config(0.75, 0.5),
            duration: 0.5
        });

        const playAnimation = () => gTimeline.play();
        const reverseAnimation = () => gTimeline.reverse();

        const node = linkRef.current; 
        node.addEventListener('mouseover', playAnimation);
        node.addEventListener('mouseleave', reverseAnimation);

        return () => {
            if (node) {
                node.removeEventListener('mouseover', playAnimation);
                node.removeEventListener('mouseleave', reverseAnimation);
            }
        };
    }, []);

    return (
        <div className="navbar__menu-item-wrapper" ref={linkRef}>
            <Link to={href} smooth={true} duration={500} className="navbar__menu-items" onClick={() => onClick(href)}>
                {item}
            </Link>
            <div className="circle" ref={circleRef}></div>
        </div>
    );
}
