import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex justify-center items-center mt-10">

            <img src="https://png.pngtree.com/png-vector/20191031/ourmid/pngtree-socket-404-error-page-for-desktop-and-mobile-png-image_1928856.jpg" alt="" />

            <button className="btn btn-warning"><Link to='/'>Back to home</Link></button>
        </div>
    );
}