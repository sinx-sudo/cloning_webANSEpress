import Loading from "../../assets/logo/ans-logo-preloader.png";

function Preloader() {
    return (
        <>
            <div className="flex justify-center items-center bg-white h-screen z-50">
                <img
                    src={Loading}
                    alt="Loading..."
                    className="w-[100px] h-[100px] animate-bounce"
                />
            </div>
        </>
    );
}

export default Preloader;