import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';


const AdminPanel = () => {
    const navigate = useNavigate();

    const models = ['chairs', 'tables', 'wardrobes'];

    return (
        <>
            <Header />
            <div style={{ margin: "200px 20px" }}>
                {models.map(model => (
                    <div key={model} onClick={() => navigate(`/admin/${model}`)}>
                        {model}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default AdminPanel;
