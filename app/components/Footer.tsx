const footerLinks = [
    { label: 'Home',       href: '/'        },
    { label: 'About Us',   href: '/about'   },
    { label: 'FAQ',        href: '/faq'     },
    { label: 'Blog',       href: '/blog'    },
    { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <a href="/" className="footer__logo">
                    <img
                        src="/img/66a8c4268dad82efb9a0c13e_Logo.png"
                        alt="Pentrebach Cottages"
                        width={120}
                    />
                </a>
                <nav className="footer__nav">
                    {footerLinks.map(({ label, href }) => (
                        <a key={href} href={href} className="footer__navlink">
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="footer__bottom">
                <span>© {new Date().getFullYear()} Pentrebach Cottages. All rights reserved.</span>
            </div>
        </footer>
    );
}
