import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getServerUrl } from '../../common/services';
import { FurnitureCard } from './FurnitureCard';
import Header from '../Header';
import Footer from '../Footer';
import { Grid, Typography } from '@mui/material';
import { IFurnitureItem } from './types';

const ListFurniturePage = () => {
    const { furnitureType } = useParams();

    const [items, setItems] = useState<IFurnitureItem[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${getServerUrl()}/furniture/${furnitureType}`);
                setItems(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
            setLoading(false);
        };

        fetchItems();
    }, [furnitureType]);

    return (
        <>
            <Header />
            {loading ? (
                <p>Загрузка...</p>
            ) : items.length > 0 ? (
                <Grid container spacing={2} style={{ margin: '50px 20px' }}>
                    {items.map(item => (
                        <Grid item key={item._id} xs={12} sm={6} md={4}>
                            <FurnitureCard item={item} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="h5" align="center" style={{ margin: '200px 20px' }}>
                    Пока тут ничего нет
                </Typography>
            )}
            <Footer />
        </>
    );
};

export default ListFurniturePage;
