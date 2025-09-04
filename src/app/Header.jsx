import Link from "next/link";

export default function Header() {
    return (
        <header>
            <img src="/nap_logo.png" />
            <nav>
                <ul>
                    <li><Link href="#">Kontakt</Link></li>
                    <li><Link href="#">Kudy k nám</Link></li>
                    <li><Link href="#">Menu</Link></li>
                    <li><Link href="#">O nás</Link></li>
                </ul>
            </nav>
        </header>
    )
}