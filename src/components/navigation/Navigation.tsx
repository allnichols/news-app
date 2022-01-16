import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className='w-100 bg-slate-500'>
                <div>
                    <h1>Navigation</h1>
                </div>
                <nav className="">
                    <ul className="flex justify-center">
                        <li className="mr-4">
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                </nav>
            </div>

            <div>
                <Outlet />
            </div>
        </>

    )
};

export default Navigation;