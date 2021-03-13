import { Col } from 'antd';
import TableHeader from '../molecules/tableHeader';
import TableBody from '../molecules/deletedUsersTable';
import MobileNavigation from '../molecules/mobileNavigation';
import { withRouter } from 'react-router-dom';

const DeletedUsers = () => {
    return (
        <Col>
            {/* header  */}
            <Col>
                <TableHeader heading1={'Deleted Users'} heading2={'Pause All Uploads'} />
            </Col>
            {/* mobile navigation  */}
            <Col className="block lg:hidden xl:hidden">
                <MobileNavigation />
            </Col>
            {/* table */}
            <Col className="py-5">
                <TableBody />
            </Col>
        </Col>
    );
};
export default withRouter(DeletedUsers);
