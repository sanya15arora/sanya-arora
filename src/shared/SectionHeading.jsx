import React from 'react'

const SectionHeading = ({firstTitle, secondTitle, isWhite = false}) => {
    return (
        <div>
            <h1 className='text-[40px] font-bold'>{firstTitle}
                <span className={`${isWhite ? `text-white` : `text-[#f6cc77]`}`}>{secondTitle}</span>
            </h1>
        </div>
    )
}

export default SectionHeading