import {motion} from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};
// calculate the reversed index for stagged delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps- index -1;
};

const Stairs = () => {
    return (
    <>
        {/* {render a motion divs, each representing aseo of a stairs
        
        Each div will have same animation sefined by the stairAnimation object.
        The delay for each div is calculated automatically based on its reversed index
        Creating a stagged effect with deccreasing dealy for each subsequent step} */}
        {[...Array(6)].map((_, index)=> {
            return (<motion.div key={index} variants={stairAnimation} initial="initaial" 
                animate="animate" exit="exit" transition= {{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index)* 0.1,
                }} 
                className="h-full w-full bg-white relative"
            />
            )
        })}
    </>
    );
};

export default Stairs;