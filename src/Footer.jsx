const Footer = ()=>{
    const currentYear = new Date().getFullYear();

    return(
        <footer className="">
        <p>&copy; {currentYear} RescueNet. All rights reserved.</p>
      </footer>
    )
}

export default Footer;