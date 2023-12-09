import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getServerUrl } from '../../common/services';
import Header from '../Header';
import Footer from '../Footer';
import { Grid, Typography, Button } from '@mui/material';
import { IFurnitureItem } from './types';


const FurnitureDetailsPage = () => {
    const { furnitureType, itemId } = useParams();

    const [item, setItem] = useState<IFurnitureItem | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`${getServerUrl()}/furniture/${furnitureType}/${itemId}`);
                setItem(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchItem();
    }, [furnitureType, itemId]);

    return (
        <>
            <Header />
            <Button onClick={() => navigate(-1)}>Назад</Button>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {item && item.image && <img src={item.image} alt={item.material} style={{ width: '50%' }} />}
                </Grid>
                <Grid item xs={12} md={6}>
                    {item && (
                        <div>
                            <Typography variant="h4">{item.material} - {item.size}</Typography>
                            <Typography>Цвет: {item.color.name} (#{item.color.hexCode})</Typography>
                            <Typography>В наличии: {item.quantityInStock} шт.</Typography>
                            <Typography>Цена: ${item.cost}</Typography>
                            {item.description && <Typography>Описание: {item.description}</Typography>}
                        </div>
                    )}
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default FurnitureDetailsPage;
