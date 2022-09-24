function WritePageButton({ setOpenPostModal }) {
    return (
        <button type="button" onClick={() => setOpenPostModal(true)
        } className="link link3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4977 24H23.828M20.9954 8.41861L22.4117 9.8351M23.1198 4.87738C23.3989 5.15638 23.6202 5.48762 23.7713 5.85218C23.9223 6.21675 24 6.6075 24 7.00212C24 7.39674 23.9223 7.78749 23.7713 8.15205C23.6202 8.51662 23.3989 8.84786 23.1198 9.12685L9.66514 22.5835L4 24L5.41628 18.4134L18.8767 4.88305C19.4072 4.34984 20.1188 4.03565 20.8702 4.00285C21.6216 3.97005 22.3579 4.22104 22.9329 4.70599L23.1198 4.87738Z" stroke="#42413C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button >
    )
}

export default WritePageButton;
