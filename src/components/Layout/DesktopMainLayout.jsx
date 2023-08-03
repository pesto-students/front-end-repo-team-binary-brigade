import { Col, Grid, Row } from "antd";
import UserList from "../feeds/UserList";
import UserProfileCard from "../common/UserProfileCard";
import CreatePostButtonCard from "../common/CreatePostButtonCard";

const { useBreakpoint } = Grid;

const DesktopMainLayout = ({ children, sidelayout = true }) => {
    const screens = useBreakpoint();

    return (
        <Row style={{ height: '91vh' }}>
            {
                (sidelayout && screens.md) &&
                <Col md={6} xs={24} style={{ padding: '25px 15px' }}>
                    <UserProfileCard />
                    <CreatePostButtonCard />
                </Col>
            }
            <Col md={sidelayout ? 12 : 24} xs={24} style={{ height: '100%', overflow: 'auto', padding: '0px 10px' }}>
                {children}
            </Col>
            {
                (sidelayout && screens.md) &&
                <Col md={6} xs={24} style={{ height: '100%', overflow: 'auto' }}>
                    <UserList />
                </Col>
            }
        </Row>
    )
}
export default DesktopMainLayout;