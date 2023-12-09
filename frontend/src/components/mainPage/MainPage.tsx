import Header from '../Header';
import Footer from '../Footer';

import BodyHead from './body_header/BodyHead';
import Description from './Description';
import Specifications from './Specifications';
import WorkAlgorithm from './WorkAlgorithm';
import Projects from './project/Projects';
import Reviews from './reviews/Reviews';
import Contacts from './Contacts';

const MainPage = () => {
    return (
        <>
            <Header />
            <BodyHead />
            <Description />
            <Specifications />
            <WorkAlgorithm />
            <Projects />
            <Reviews />
            <Contacts />
            <Footer />
        </>
    )
}

export default MainPage;