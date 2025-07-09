import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Modal,
  TextField,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SettingsPage() {
  const [rates, setRates] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);
  const [buy, setBuy] = useState('');
  const [sell, setSell] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { code } = useParams();
  const decodedCode = decodeURIComponent(code); // Декодируем code из маршрута

  useEffect(() => {
    console.log('Fetching rates...');
    const fetchRates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/currencies/get_currencies_data', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;
        if (data.result && Array.isArray(data.result)) {
          setRates(data.result);
          console.log('Rates loaded:', data.result);
        } else {
          console.error('Unexpected API response format:', data);
          setRates([]);
        }
      } catch (err) {
        console.error('Error fetching rates:', err);
        localStorage.removeItem('token');
        navigate('/login', { replace: true });
      }
    };
    fetchRates();
  }, [navigate]);

  useEffect(() => {
    console.log('Checking code:', decodedCode);
    if (decodedCode && rates.length > 0) {
      const rate = rates.find((r) => r.code === decodedCode);
      if (rate) {
        console.log('Found rate for modal:', rate);
        setSelectedRate(rate);
        setBuy(rate.buy.toString());
        setSell(rate.sell.toString());
        setOpenModal(true);
      } else {
        console.warn(`Rate with code ${decodedCode} not found`);
        navigate('/');
      }
    }
  }, [decodedCode, rates, navigate]);

  const handleSave = async () => {
    if (selectedRate && buy && sell) {
      try {
        const token = localStorage.getItem('token');
        await axios.post(
          `/api/rates/modifiers/update-ticker-modifiers`,
          {
            code: selectedRate.code,
            buy: parseFloat(buy),
            sell: parseFloat(sell),
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const response = await axios.get('/api/currencies/get_currencies_data', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRates(response.data.result);
        setOpenModal(false);
      } catch (err) {
        console.error('Error updating rate:', err);
      }
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedRate(null);
    setBuy('');
    setSell('');
    navigate('/');
  };

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

          {rates.length === 0 ? (
            <Typography variant="body1" sx={{ color: '#666' }}>
              Нет доступных курсов.
            </Typography>
          ) : isMobile ? (
            <Box>
              {rates.map((rate) => (
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
                    Country: {rate.country_code || 'N/A'}
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
              {rates.map((rate) => (
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
                      Country: {rate.country_code || 'N/A'}
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

          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="edit-rate-modal"
            aria-describedby="edit-rate-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '90%' : 400,
                bgcolor: 'white',
                borderRadius: '12px',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="edit-rate-modal" variant="h6" component="h2" sx={{ mb: 2, color: '#333' }}>
                Редактировать курс для {selectedRate?.code}
              </Typography>
              <TextField
                fullWidth
                label="Buy"
                type="number"
                value={buy}
                onChange={(e) => setBuy(e.target.value)}
                sx={{ mb: 2 }}
                InputProps={{ inputProps: { step: '0.01' } }}
              />
              <TextField
                fullWidth
                label="Sell"
                type="number"
                value={sell}
                onChange={(e) => setSell(e.target.value)}
                sx={{ mb: 2 }}
                InputProps={{ inputProps: { step: '0.01' } }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button onClick={handleClose} sx={{ color: '#666' }}>
                  Отмена
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
                  onClick={handleSave}
                >
                  Сохранить
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Container>
    </Box>
  );
}