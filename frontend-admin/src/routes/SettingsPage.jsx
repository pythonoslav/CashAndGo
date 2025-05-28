import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SettingsPage() {
  const [rates, setRates] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Определяем мобильное устройство

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/rates', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRates(response.data);
      } catch (err) {
        localStorage.removeItem('token');
        //navigate('/login', { replace: true });
      }
    };
    fetchRates();
  }, [navigate]);

  // Данные для теста, если backend не готов
  const mockRates = [
    {
      id: 1,
      date: '2023-09-19 08:09:40',
      rubToThb: 2.8,
      usdtToThb: 35,
      rubToUsdt: 98.1,
      usdtToThbSecondary: 35.85,
      rubToThbSecondary: 2.7364,
    },
    {
      id: 2,
      date: '2023-05-08 08:35:51',
      rubToThb: 2.8,
      usdtToThb: 35,
      rubToUsdt: 98.1,
      usdtToThbSecondary: 35.85,
      rubToThbSecondary: 2.7364,
    },
    {
      id: 3,
      date: '2023-05-08 08:33:50',
      rubToThb: 2.51,
      usdtToThb: 33.6,
      rubToUsdt: 83.1,
      usdtToThbSecondary: 33.85,
      rubToThbSecondary: 2.45495,
    },
  ];

  // Используем mockRates, если данные с сервера не пришли
  const displayRates = rates.length > 0 ? rates : mockRates;

  return (
    <Box sx={{ bgcolor: '#F5F5F5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Курсы
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
            onClick={() => navigate('/edit-rate/new')}
          >
            Добавить курс
          </Button>

          {isMobile ? (
            // Для мобильных устройств — список
            <Box>
              {displayRates.map((rate) => (
                <Box
                  key={rate.id}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    p: 2,
                    mb: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                    {rate.date}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                    RUB - THB: {rate.rubToThb} &nbsp; USDT - THB: {rate.usdtToThb}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                    RUB - USDT: {rate.rubToUsdt} &nbsp; USDT - THB: {rate.usdtToThbSecondary}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                    RUB - THB: {rate.rubToThbSecondary}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
                    onClick={() => navigate(`/edit-rate/${rate.id}`)}
                  >
                    Изменить
                  </Button>
                </Box>
              ))}
            </Box>
          ) : (
            // Для ПК — Grid-сетка
            <Grid container spacing={3}>
              {displayRates.map((rate) => (
                <Grid item xs={12} sm={6} md={4} key={rate.id}>
                  <Box
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      p: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                      {rate.date}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      RUB - THB: {rate.rubToThb}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      USDT - THB: {rate.usdtToThb}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      RUB - USDT: {rate.rubToUsdt}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      USDT - THB: {rate.usdtToThbSecondary}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      RUB - THB: {rate.rubToThbSecondary}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
                      onClick={() => navigate(`/edit-rate/${rate.id}`)}
                    >
                      Изменить
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
}