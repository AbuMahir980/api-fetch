import React from "react";

const DelCard = ({ title, setIsModalOpen}) => {
    function handleToggle(e) {
        e.target.id === "modal" && setIsModalOpen((isopen) => !isopen)
    }
    return (
        <div
            className="fixed top-0 left-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-60"
            id="modal"
            onClick={handleToggle}
        >
            <div className="flex w-[20rem] flex-col items-center space-y-[1rem] rounded-[0.5rem] bg-blue-800 py-[1rem] text-center drop-shadow-xl">
            <h1 className="font-semibold text-sky-50 text-xl">{title}</h1>
            <p className="font-bold text-sky-50">
                Has been deleted, thank you.
            </p>
            <div>
                <button
                onClick={() => {
                    setIsModalOpen((isopen) => !isopen);
                }}
                className="rounded-[0.5rem] bg-red-500 px-[1rem] py-[0.5rem] text-center text-white "
                >
                Close
                </button>
            </div>
            </div>
        </div>
    );
};

export default DelCard;
