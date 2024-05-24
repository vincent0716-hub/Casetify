import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();
test('renders learn react link', () => {
  render(

    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const carouselElement = screen.getByTestId('simple-carousel')
  expect(carouselElement).toBeInTheDocument();
  const navElement = screen.getByTestId('app-nav')
  expect(carouselElement).toBeInTheDocument();


});
