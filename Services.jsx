import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar'; // Importing the Navbar component

const services = [
  {
    title: 'Home Cleaning',
    description: 'Professional cleaning services for your home.',
    image: 'https://i.pinimg.com/474x/ad/59/cc/ad59ccdda05214f409d6ad694932bf32.jpg',
  },
  {
    title: 'Plumbing Services',
    description: 'Expert plumbing solutions for leaks, repairs, and installations.',
    image: 'https://i.pinimg.com/474x/b4/43/8c/b4438c7c799d885071f1254768788a6e.jpg',
  },
  {
    title: 'Electrical Repairs',
    description: 'Reliable electrical repair and installation services.',
    image: 'https://i.pinimg.com/474x/0b/02/02/0b02021662c1f60aa59a6ff7d3d7cff8.jpg',
  },
  {
    title: 'Pest Control',
    description: 'Effective pest control to keep your home pest-free.',
    image: 'https://i.pinimg.com/736x/2c/22/04/2c220434e24e01722b3f07d02a9375a0.jpg',
  },
  {
    title: 'Carpet Cleaning',
    description: 'Deep cleaning for carpets to restore their look and feel.',
    image: 'https://i.pinimg.com/474x/4e/db/98/4edb980b8d4c14b7abea5f16e700071b.jpg',
  },
];

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <>
    <Navbar />
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, borderRadius: '15px', boxShadow: 3 }}>
              <CardMedia component="img" height="140" image={service.image} alt={service.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
                  Book Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Services;
