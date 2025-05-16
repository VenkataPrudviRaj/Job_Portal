import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Homepage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJob from './Pages/FindJob';
import Header from './Header/Header';
import Footer from './LandingPage/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJob from './PostJob/PostJob';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyProfilePage from './Pages/CompanyProfilePage';
export default function App() {
   const theme = createTheme({
     colors : {
      'bright-sun': [
          '#fffbeb', '#fff3c6',
          '#ffe588',
          '#ffd149',
          '#ffbd20',
           '#f99b07',
           '#dd7302',
           '#b75006',
          '#943c0c',
          '#7a330d',
          '#461902',
      ],
      "mine-shaft": [
           "#f6f6f6",
           "#e7e7e7",
           "#d1d1d1",
           "#b0b0b0",
           "#888888",
           "#6d6d6d",
           "#5d5d5d",
           "#4f4f4f",
          "#454545",
          "#3d3d3d",
          "#2d2d2d",
      ],
     }
   })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <div className='relative'>
      <Header/>
       <Divider size="xs" /> 
        <Routes>
          <Route path="/Find-Jobs" element={<FindJob/>}/>
          <Route path="/Find-Talent" element={<FindTalentPage/>}/>
          <Route path='/Company' element={<CompanyProfilePage/>}/>
          <Route path="/Jobs" element={<JobDescPage/>}/>
          <Route path='/Apply-Jobs' element={<ApplyJobPage/>}/>
          <Route path='/post-Job' element={<PostJobPage/>}/>
          <Route path='/Talent-Profile' element={<TalentProfilePage/>}/>
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}