import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { AllProviders } from './context/AllProviders'
import { Container, Box, Grid } from '@mui/material';
import AppNav from '../src/component/Nav/AppNav'
import FilterSideList from './component/SidList/FilterSideList'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import SimpleCarousel from './component/Slick/carousel'
import { projectRouter, Router } from './router/router'
import { HomeContext } from './context/HomePageContext'
function App(): JSX.Element {
  const { homeClick, } = useContext(HomeContext)
  console.log(homeClick)
  return (
    <BrowserRouter>
      <AllProviders>
        <SimpleCarousel />
        <AppNav />
        <Container maxWidth="xl" >
          <Grid container sx={{ p: 8 }}>

            {projectRouter.map((page: Router, index) => (
              <>
                <Routes>
                  <Route
                    key={index}
                    path={page.path}
                    element={
                      <>
                        {page.path != "/" && <FilterSideList />}
                        {page.element}
                      </>
                    }
                  />
                </Routes>
              </>
            ))}

          </Grid>
        </Container>
      </AllProviders>
    </BrowserRouter >
  );
}

export default App;
