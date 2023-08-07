import { Button, Result } from "antd";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import appConfig from "../app/config/app.config";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PageNotFound = () => {
    const navigate = useNavigate();
    const { data } = useSelector(state => state.authReducer);

    useEffect(() => {
        const timeoutId = setTimeout(() => navigate(data ? `/feed?$${data.user.college_id}` : '/login'), 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [data, navigate])

    return (
        <>
            <Helmet>
                <title>Page Not Fount | {appConfig.app.name}</title>
            </Helmet>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => navigate(data ? `/feed?$${data.user.college_id}` : '/login')}>Back Home</Button>}
            />
        </>
    )
}
export default PageNotFound;