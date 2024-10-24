import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined({ page, setPage, totalPages }) {
    const handlePageChange = (event, value) => {
        setPage(value); // Устанавливаем новую страницу при изменении
    };

    return (
        <Stack spacing={2}>
            <Pagination 
                count={totalPages} 
                page={page} // Текущая страница
                onChange={handlePageChange} // Обработчик изменения страницы
                variant="outlined" 
                color="primary" 
            />
        </Stack>
    );
}
