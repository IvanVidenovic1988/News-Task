import { logout } from "../pages/Login/redux/login";
import { useAppDispatch, useAppSelector } from "../shared/redux/hooks";

const Nav = () => {

    const token = useAppSelector((state) => state.login.token)
    const email = useAppSelector((state) => state.login.email)

    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div className="w-full h-[50px] bg-gray-500"></div>
            <div className="w-full h-[50px] flex items-center justify-between bg-red-500">
                <div className="pl-[50px] text-3xl text-white uppercase">News</div>
                {token &&
                    <div className="flex">
                        <p className="pr-[30px] text-white">{email}</p>
                        <button
                            onClick={handleLogout}
                            className="mr-[30px] px-4 border-[1px] text-white border-white"
                        >Logout</button>
                    </div>
                }
            </div>

        </>
    );
}

export default Nav;