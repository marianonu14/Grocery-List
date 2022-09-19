const Footer = () => {
    return ( 
        <footer className="bg-slate-700 grid place-items-center h-20">
            <h1 className="text-white text-2xl">All Rights Reserved &copy; - {new Date().getFullYear()}</h1>
        </footer>
     );
}
 
export default Footer;