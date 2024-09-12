import '../Styles/Header.css';
export default function Header() {
    return (
        <header id="header" className="header">
            <div className="content">
                <h1>Delight in Every Bite</h1>
                <p>Our food is crafted with the freshest ingredients and a passion for flavor. From hearty meals to delightful desserts, we bring joy to your table. Savor the taste of perfection with every bite.</p>
                <div className="input-filed">
                    <form>
                        <input type='text' className='text-filed' placeholder='Search for the items' />
                        <input className='button' type='button' value="Search" />
                    </form>
                </div>
            </div>
        </header>
    );
}
