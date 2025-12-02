
type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
    { label: "Accueil", href: "/" },
    { label: "Creer recette", href: "/creer-recette" },
    { label: "Login", href: "/login" },
];

const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    background: "#0b5cff",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
};

const brandStyle: React.CSSProperties = { margin: 0, fontSize: 18, fontWeight: 600 };

const navStyle: React.CSSProperties = { display: "flex", gap: 8 };

const buttonStyle: React.CSSProperties = {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 6,
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 14,
};



function UpBar() {
    return (
        <header style={containerStyle}>
            <h1 style={brandStyle}>
                <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
                    Recette App
                </a>
            </h1>
            <nav style={navStyle}>
                {navItems.map((item) => (
                    <a key={item.href} href={item.href} style={buttonStyle}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default UpBar;