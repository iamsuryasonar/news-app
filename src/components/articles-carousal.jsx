import { useState, useRef } from 'react'
import Article from './article'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faSpinner } from "@fortawesome/free-solid-svg-icons";

function ArticlesCarousal({ data, isLoading, setCategory }) {
    const [currentItemIndex, setcurrentItemIndex] = useState(0);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [swipeType, setSwipeType] = useState("");
    const [direction, setDirection] = useState(null);

    // carousal handlers
    const nextItemHandler = () => {

        setDirection(-1); // setting direction of item transition, in this case it is ascending order

        containerRef.current.style.justifyContent = 'flex-start';
        containerRef.current.style.transform = `translate(-100%)`;
        setcurrentItemIndex((Math.abs(currentItemIndex + 1) % data.length));
    };

    const prevItemHandler = () => {
        if (direction === -1) {

            // while direction is changed justifyContent is set to flex-end 
            // which takes the whole array of divs as it is and places the end of it to the visible viewport (ie. the carousel div)
            // But below you can see just after setting flex-end we are setting translate to 100%
            // this causes the visible viewport to shift one more time unnecessarily.
            // which could be solved by just reversing the translate operation we did, 
            // that is by appending child to end of the containerDiv

            const firstElement = containerRef.current.firstElementChild;
            containerRef.current.appendChild(firstElement);
        }

        setDirection(1);// setting direction of item transition, in this case it is decending order

        containerRef.current.style.justifyContent = 'flex-end';
        containerRef.current.style.transform = `translate(100%)`;
        setcurrentItemIndex(Math.abs((currentItemIndex - 1) % data.length));
    };

    //swipe handlers
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX === null) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;

        if (diffX > 0) {
            setSwipeType("RIGHT");
        } else if (diffX < 0) {
            setSwipeType("LEFT");
        }
    };

    const handleTouchEnd = (e) => {
        setStartX(null);
        if (swipeType === "RIGHT") {
            prevItemHandler();
        } else if (swipeType === "LEFT") {
            nextItemHandler();
        }
        setSwipeType("");
    };


    const handleTransitionEnd = () => {
        if (containerRef.current) {

            const firstElement = containerRef.current.firstElementChild;// getting the first element
            const lastElement = containerRef.current.lastElementChild;// getting the last element

            if (direction === -1 && firstElement) {
                containerRef.current.appendChild(firstElement);
            }

            if (direction === 1 && lastElement) {
                containerRef.current.prepend(lastElement);
            }

            // translate needs reset after transition but without another transition
            //  which is why transition is set to none
            containerRef.current.style.transition = 'none';
            containerRef.current.style.transform = `translate(0)`;

            setTimeout(() => {
                // javascript tends to execute this transition too fast, so iykiyk
                containerRef.current.style.transition = 'all 700ms ease-in-out'
            });
        }
    };

    return (
        <div
            className="container"
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <div
                className="carousal"
                style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: '3px',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    className="slider"
                    ref={containerRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        position: "relative",
                        transition: "all 700ms",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {
                        data?.map((article, index, arr) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        flexShrink: 0,
                                        flexGrow: 0,
                                        width: "100%",
                                    }}
                                >
                                    <Article article={article} index={index} arr={arr} isLoading={isLoading} setCategory={setCategory} />
                                </div>
                            )
                        })
                    }
                    {isLoading && <FontAwesomeIcon
                        className='w-8 h-8 text-white animate-spin fixed inset-1/2'
                        icon={faSpinner} />}
                </div>
                <div className="controls hidden sm:flex">
                    <FontAwesomeIcon
                        className='text-teal-200 active:text-teal-500 hover:text-teal-500 cursor-pointer '
                        style={{
                            textDecoration: "none",
                            backgroundColor: "transparent",
                            fontSize: "1.875rem",
                            width: "2rem",
                            height: "2rem",
                            position: "absolute",
                            top: "50%",
                            bottom: "50%",
                            left: "5px",
                            transform: "translateY(-50%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={prevItemHandler}
                        icon={faCaretLeft} />

                    <FontAwesomeIcon
                        className='text-teal-200 active:text-teal-500 hover:text-teal-500 cursor-pointer '
                        style={{
                            backgroundColor: "transparent",
                            fontSize: "1.875rem",
                            width: "2rem",
                            height: "2rem",
                            position: "absolute",
                            top: "50%",
                            bottom: "50%",
                            right: "5px",
                            transform: "translateY(-50%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={nextItemHandler}
                        icon={faCaretRight}
                    />
                </div>
            </div>
        </div>
    );
}

export default ArticlesCarousal;