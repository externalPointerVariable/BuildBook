function Footer(){
    return(
        <>
        <footer className="fixed bottom-0 w-full">
            <div className="footer rounded-t-lg bg-gray-800 p-4 flex justify-center items-center">
                <p className="text-center text-white"> Visit
                    <a href="http://github.com/externalPointerVariable/BuildBook" target="_blank" rel="noreferrer">
                        <span className="small headre text-amber-300"> BuildBook.io </span>
                    </a>
                     to check out all the react projects and feel free to contribute yours.</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;