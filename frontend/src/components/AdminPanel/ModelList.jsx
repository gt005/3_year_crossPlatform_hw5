import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getServerUrl } from '../../common/services';
import { Box, TextField, Modal, Table, Button, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import { modalStyle, inputStyle } from './styles';


const ModelList = () => {
    const { model } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${getServerUrl()}/furniture/${model}`);
                setItems(response.data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
            setLoading(false);
        };

        fetchItems();
    }, [model]);

    const handleRowClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "colorName" || name === "colorHexCode") {
            setSelectedItem(prevItem => ({
                ...prevItem,
                color: {
                    ...prevItem.color,
                    [name === "colorName" ? "name" : "hexCode"]: value
                }
            }));
        } else {
            setSelectedItem(prevItem => ({ ...prevItem, [name]: value }));
        }
    };

    const handleOpenAddModal = () => {
        setSelectedItem({
            material: '',
            size: '',
            color: { name: '', hexCode: '' },
            quantityInStock: '',
            cost: '',
            image: '',
            description: ''
        });
        setIsModalOpen(true);
    };

    const handleAdd = async () => {
        try {
            const newItem = await axios.post(
                `${getServerUrl()}/furniture/${model}`,
                selectedItem,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            setItems([...items, newItem.data]);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Ошибка добавления:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const updatedItem = await axios.put(
                `${getServerUrl()}/furniture/${model}/${selectedItem._id}`,
                selectedItem,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            setItems(items.map(item => item._id === updatedItem.data._id ? updatedItem.data : item));
            setIsModalOpen(false);
        } catch (error) {
            console.error('Ошибка обновления:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${getServerUrl()}/furniture/${model}/${selectedItem._id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            setItems(items.filter(item => item._id !== selectedItem._id));
            setIsModalOpen(false);
        } catch (error) {
            console.error('Ошибка удаления:', error);
        }
    };

    return (
        <>
            <Header />
            <div style={{ margin: '50px 20px' }}>
                <Button onClick={handleOpenAddModal}>Добавить</Button>

                {loading ? (
                    <p>Загрузка...</p>
                ) : items.length > 0 ? (
                    <Table>
                        <TableBody>
                            {items.map(item => (
                                <TableRow
                                    key={item._id}
                                    onClick={() => handleRowClick(item)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <TableCell>{item.material}</TableCell>
                                    <TableCell>{item.size}</TableCell>
                                    <TableCell>{item.cost}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <Typography variant="h5" align="center" style={{ margin: '200px 20px' }}>
                        Пока тут ничего нет
                    </Typography>
                )}

                <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <Box sx={modalStyle}>
                        {selectedItem && (
                            <>
                                <TextField
                                    label="Материал"
                                    name="material"
                                    value={selectedItem.material}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                <TextField
                                    label="Размер"
                                    name="size"
                                    value={selectedItem.size}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                <TextField
                                    label="Цвет (название)"
                                    name="colorName"
                                    value={selectedItem.color.name}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                <TextField
                                    label="Цвет (hexCode)"
                                    name="colorHexCode"
                                    value={selectedItem.color.hexCode}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                <TextField
                                    label="Количество в наличии"
                                    name="quantityInStock"
                                    value={selectedItem.quantityInStock}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                <TextField
                                    label="Цена"
                                    name="cost"
                                    value={selectedItem.cost}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                <TextField
                                    label="Ссылка на изображение"
                                    name="image"
                                    value={selectedItem.image}
                                    onChange={handleInputChange}
                                    fullWidth
                                    sx={inputStyle}
                                />
                                {selectedItem.description && (
                                    <TextField
                                        label="Описание"
                                        name="description"
                                        value={selectedItem.description}
                                        onChange={handleInputChange}
                                        fullWidth
                                        sx={inputStyle}
                                    />
                                )}
                                {selectedItem._id ? (
                                    <>
                                        <Button onClick={handleUpdate}>Обновить</Button>
                                        <Button onClick={handleDelete}>Удалить</Button>
                                    </>
                                ) : (
                                    <Button onClick={handleAdd}>Добавить</Button>
                                )}
                            </>
                        )}
                    </Box>
                </Modal>
            </div>
            <Footer />
        </>
    );
};

export default ModelList;
