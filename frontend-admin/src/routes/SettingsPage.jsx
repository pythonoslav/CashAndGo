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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/currencies/get_currencies_data', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRates(response.data);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login', { replace: true }); // Относительный путь, basename добавит /admin-panel
      }
    };
    fetchRates();
  }, [navigate]);

  const mockRates = [
    {
      country_code: 'ru',
      code: 'RUB',
      buy: 2.9236506599999994,
      sell: 2.8372373399999997,
    },
    {
      country_code: 'us',
      code: 'USDT',
      buy: 35.0,
      sell: 34.5,
    },
    {
      country_code: 'th',
      code: 'THB',
      buy: 1.0,
      sell: 0.95,
    },
  ];

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
            onClick={() => navigate('/edit-rate/new')} // Относительный путь
          >
            Добавить курс
          </Button>

          {isMobile ? (
            <Box>
              {displayRates.map((rate) => (
                <Box
                  key={rate.code}
                  sx={{
                    bgcolor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    p: 2,
                    mb: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                    Country: {rate.country_code}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                    {rate.code} - Buy: {rate.buy}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                    {rate.code} - Sell: {rate.sell}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
                    onClick={() => navigate(`/edit-rate/${rate.code}`)}
                  >
                    Изменить
                  </Button>
                </Box>
              ))}
            </Box>
          ) : (
            <Grid container spacing={3}>
              {displayRates.map((rate) => (
                <Grid item xs={12} sm={6} md={4} key={rate.code}>
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
                      Country: {rate.country_code}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      {rate.code} - Buy: {rate.buy}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }}>
                      {rate.code} - Sell: {rate.sell}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
                      onClick={() => navigate(`/edit-rate/${rate.code}`)}
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