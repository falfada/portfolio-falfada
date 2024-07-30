import '../scss/modules/Footer.scss';
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <p>Made with 🫶🏻 by falfada ©{currentYear}</p>
                <ul>
                    <li>
                        <a href="mailto:falfada@gmail.com">falfada@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://github.com/falfada" target="_blank">github</a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/falfada" target="_blank">dribbble</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/daniela-leal-garcia/" target="_blank">linkedin</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}