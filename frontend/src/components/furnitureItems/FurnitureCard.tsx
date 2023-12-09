import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import {IFurnitureItem} from './types'
import { useNavigate } from 'react-router-dom';


export const FurnitureCard = ({ item }: { item: IFurnitureItem }) => {
    const navigate = useNavigate();

    return (
        <Card style={{cursor: 'pointer'}} onClick={() => navigate(`${item._id}`)}>
            {item.image && <CardMedia component="img" height="140" image={item.image} />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.material} - {item.size}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Цвет: {item.color.name} (#{item.color.hexCode})<br/>
                    В наличии: {item.quantityInStock} шт.<br/>
                    Цена: ${item.cost}<br/>
                    {item.description && <>Описание: {item.description}<br/></>}
                </Typography>
            </CardContent>
        </Card>
    );
};
